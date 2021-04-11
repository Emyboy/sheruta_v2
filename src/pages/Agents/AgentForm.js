import React, { useState, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom';
import loadingGif from '../../img/loading.gif';
import { signup } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone'
import { crate_agent_account } from '../../redux/actions/auth.action';
import { notification } from "antd";
import { ProgressBar } from 'react-bootstrap';
import { storage } from 'firebase';
import axios from 'axios';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const AgentForm = props => {
    const { auth } = props;
    const { agentLoading, progress } = auth;
    const [data, setData] = useState({
        name: null,
        location: null,
        logo_url: null,
        phone_number: auth.user.user.phone_number,
        google_location: null,
        company_logo: null
    });
    const [state, setState] = useState({
        loading: false
    })

    const onDrop = useCallback(acceptedFiles => {
        console.log('file ----', acceptedFiles);
        setData({ ...data, company_logo: acceptedFiles[0] });
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const crate_agent_account = e => {
        e.priventDefault()
        console.log('SENDING ---', data)
        const uploadTask = storage.child(`image/agent/${data.user_id}/company_logo`).put(data.company_logo)
        uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + Number.parseInt(progress) + '% done');
        }, (error) => {
            // Handle unsuccessful uploads
            notification.error({ message: 'Error Uploading Image ' });
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                console.log('File available at', downloadURL);
                axios(`${process.env.REACT_APP_BASE_URL}/agent`, {
                    method: 'POST',
                    data: { ...data, company_logo: downloadURL }
                })
                    .then(account => {
                        console.log(account);
                        notification.error({ message: 'Error Sending data, Please Try Again' });
                    })
                    .catch(err => {
                        notification.error({ message: 'Error Sending data, Please Try Again' });
                        console.log(err)
                    })
            }).catch(err => {
                console.log('error ---', err);
            });
        });
    }

    if (auth.agentData) {
        // notification.warning({ message: 'Your already an agent' })
        return <Redirect to='/dashboard' />
    } else {
        return (
            <div >
                <div className="animate__animated animate__fadeIn modal-dialog modal-dialog-centered login-pop-form" role="document">
                    <div className="modal-content" id="sign-up">
                        <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close"></i></span>
                        <div className="modal-body">
                            <h4 className="modal-header-title">Agent</h4>
                            <div className="login-form">
                                <form onSubmit={crate_agent_account}>
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='company_name' onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control" placeholder="Company Name" />
                                                    <i className="ti-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input defaultValue={data.phone_number} name='company_phone_no' onChange={(e) => setData({ ...data, phone_number: e.target.value })} type="phone" className="form-control" placeholder="Company Phone No:" />
                                                    <i className="ti-mobile"></i>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='company_address' onChange={(e) => setData({ ...data, location: e.target.value })} type="text" className="form-control" placeholder="Company Address" />
                                                    <i className="ti-map"></i>
                                                </div>
                                            </div>
                                        </div> */}

                                        {/* <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='location' onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location" />
                                                    <i className="ti-map"></i>
                                                </div>
                                            </div>
                                        </div> */}

                                        <div className="col-lg-6 col-md-6">
                                            <div className='form-group'>
                                                <GooglePlacesAutocomplete
                                                    apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
                                                    className="form-control"
                                                    apiOptions={{ language: 'en', region: 'ng' }}
                                                    selectProps={{
                                                        // props.state.location,
                                                        onChange: e => {
                                                            console.log(e)
                                                            setData({ ...data, google_location: e, location: e.label })
                                                        },
                                                        placeholder:
                                                            'Location',
                                                        className: 'form-control shadow-sm rounded input-with-icon'
                                                    }}
                                                    autocompletionRequest={{
                                                        componentRestrictions: {
                                                            country: ['ng'],
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <div {...getRootProps()}>
                                                        <input {...getInputProps()} />
                                                        {
                                                            isDragActive ?
                                                                <p>Drop the files here ...</p> :
                                                                <a href="#c" className="btn btn-theme-2 w-100 pt-3 pb-3">Upload Logo</a>
                                                        }
                                                    </div>
                                                    {/* <a href="#c" class="btn btn-theme-2 w-100 mt-1">Upload Logo</a> */}
                                                </div>
                                            </div>
                                        </div>

                                        {/* <h5>company_logo</h5> */}

                                    </div>

                                    <div className="form-group">
                                        {!state.loading ? <button disabled={state.loading} type="submit" className="btn btn-md full-width pop-login">{state.loading ? 'Loading ..' : `Create Account`} </button>
                                            :
                                            <ProgressBar striped variant="success" now={progress} />}
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    agent: state.agent,
    auth: state.auth
})

const mapDispatchToProps = {
    createAccount: crate_agent_account
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentForm)