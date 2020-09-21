import React, { useState, useCallback } from 'react'
import { Link, Redirect } from 'react-router-dom';
import loadingGif from '../../img/loading.gif';
import { signup } from '../../redux/actions/auth.action';
import { connect } from 'react-redux';
import { useDropzone } from 'react-dropzone'

const AgentForm = () => {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log('file ----', acceptedFiles);
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [logo, setLogo] = useState('');

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
                                                <div {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    {
                                                        isDragActive ?
                                                            <p>Drop the files here ...</p> :
                                                            <a href="#c" class="btn btn-theme-2 w-100 mt-1">Upload Logo</a>
                                                    }
                                                </div>
                                                {/* <a href="#c" class="btn btn-theme-2 w-100 mt-1">Upload Logo</a> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* <h5>company_logo</h5> */}

                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-md full-width pop-login">Create Account</button>
                                </div>

                            </form>
                        </div>
                        {/* <div className="modal-divider"><span>Or login via</span></div> */}
                        {/* <div className="social-login mb-3">
                                <ul>
                                    <li><a href="#" className="btn connect-fb"><i className="ti-facebook"></i>Facebook</a></li>
                                    <li><a href="#" className="btn connect-twitter"><i className="ti-twitter"></i>Twitter</a></li>
                                </ul>
                            </div> */}
                        <div className="text-center">
                            <p className="mt-5"><i className="ti-user mr-1"></i>Already Have An Account? <Link to="/login" className="link">Go For LogIn</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AgentForm)