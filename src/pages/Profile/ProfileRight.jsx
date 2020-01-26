import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function ProfileRight(props) {
    const { val } = props;
    console.log(val);
    
    return (
        // <BrowserRouter>
        //     <Switch>
        //         <Route path="/home" component={App} />
        //         <Redirect from="/" to="/home" />
        //     </Switch>
        // </BrowserRouter>
        <div className="col-lg-8 col-md-12">
            <div className="dashboard-wraper">

                <div className="form-submit">
                    <h4>My Account</h4>
                    <div className="submit-section">
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label>Full Name</label>
                                <input type="text" className="form-control" value={val.fullname} />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input disabled type="email" className="form-control" value={val.email} />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Phone</label>
                                <input type="text" className="form-control" value={val.phoneno} />
                            </div>
                            <div className="form-group col-md-6">
                                <label>Username</label>
                                <input type="text" className="form-control" value={val.username} />
                            </div>


                            {/* <div className="form-group col-md-6">
                                <label>Address</label>
                                <input type="text" className="form-control" value="522, Arizona, Canada" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>City</label>
                                <input type="text" className="form-control" value="Montquebe" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>State</label>
                                <input type="text" className="form-control" value="Canada" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Zip</label>
                                <input type="text" className="form-control" value="160052" />
                            </div> */}

                            <div className="form-group col-md-12">
                                <label>About</label>
                                <textarea className="form-control">{val.bio}</textarea>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="form-submit">
                    {/* <h4>Social Accounts</h4> */}
                    <div className="submit-section">
                        <div className="form-row">

                            {/* <div className="form-group col-md-6">
                                <label>Facebook</label>
                                <input type="text" className="form-control" value="https://facebook.com/" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Twitter</label>
                                <input type="email" className="form-control" value="https://twitter.com/" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Google Plus</label>
                                <input type="text" className="form-control" value="https://googleplus.com/" />
                            </div>

                            <div className="form-group col-md-6">
                                <label>LinkedIn</label>
                                <input type="text" className="form-control" value="https://linkedin.com/" />
                            </div> */}

                            <div className="form-group col-lg-12 col-md-12">
                                <button className="btn btn-theme" type="submit">Save Changes</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
