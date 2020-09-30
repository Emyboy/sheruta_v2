import React, { useState, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom';
import loadingGif from '../../img/loading.gif';
import { signup } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone'
import { crate_agent_account } from '../../redux/actions/auth.action';
import { notification } from "antd";
import { ProgressBar } from 'react-bootstrap';

const AgentForm = props => {
    const { auth } = props;
    const { agentLoading, progress } = auth;
    const [name, setName] = useState(null);
    const [phoneNo, setPhoneNo] = useState(null);
    const [address, setAddress] = useState(null);
    const [location, setLocation] = useState(null);
    const [logo, setLogo] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        console.log('file ----', acceptedFiles);
        setLogo(acceptedFiles[0]);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleSubmit = e => {
        e.preventDefault();
        if (auth.isLoggedIn) {
            if (name && phoneNo && address && logo) {
                props.createAccount({
                    user_id: auth.user.id,
                    company_name: name,
                    company_phone_no: phoneNo,
                    company_address: address,
                    company_logo: logo,
                    location
                })
            } else {
                notification.error({ message: 'Please Fill Out The Form' })
            }
        } else {
            notification.error({ message: "Please Login / Signup" })
        }

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
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <div className="row">

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='company_name' onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Company Name" />
                                                    <i className="ti-user"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='company_phone_no' onChange={(e) => setPhoneNo(e.target.value)} type="phone" className="form-control" placeholder="Company Phone No:" />
                                                    <i className="ti-mobile"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='company_address' onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Company Address" />
                                                    <i className="ti-map"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input name='location' onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" placeholder="Location" />
                                                    <i className="ti-map"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
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
                                        {!agentLoading ? <button disabled={agentLoading} onClick={e => handleSubmit(e)} type="submit" className="btn btn-md full-width pop-login">{agentLoading ? 'Loading ..' : `Create Account`} </button>
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