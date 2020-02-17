import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">

                                <h2 className="ipt-title">Contact Us</h2>
                                <span className="ipn-subtitle">Lists of our all Popular agencies</span>

                            </div>
                        </div>
                    </div>
                </div>


                <section>

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-7 col-md-7">

                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" className="form-control simple" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control simple" />
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" className="form-control simple" />
                                </div> */}

                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control simple"></textarea>
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-theme" type="submit">Submit Request</button>
                                </div>

                            </div>

                            <div className="col-lg-5 col-md-5">
                                <div className="contact-info">

                                    <h2>Get In Touch</h2>
                                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}

                                    <div className="cn-info-detail">
                                        <div className="cn-info-icon">
                                            <i className="ti-home"></i>
                                        </div>
                                        <div className="cn-info-content">
                                            <h4 className="cn-info-title">Reach Us</h4>
                                            No: 181, <br />Ago Palace Way, <br /> Okota, Lagos.
                                            {/* 2512, New Market,<br/>Eliza Road, Sincher 80 CA,<br/>Canada, USA */}
                                        </div>
                                    </div>

                                    <div className="cn-info-detail">
                                        <div className="cn-info-icon">
                                            <i className="ti-email"></i>
                                        </div>
                                        <div className="cn-info-content">
                                            <h4 className="cn-info-title">Drop A Mail</h4>
                                            {/* support@Rikada.com<br/>Rikada@gmail.com */}
                                            info@sheruta.ng
									</div>
                                    </div>

                                    <div className="cn-info-detail">
                                        <div className="cn-info-icon">
                                            <i className="ti-mobile"></i>
                                        </div>
                                        <div className="cn-info-content">
                                            <h4 className="cn-info-title">Call Us</h4>
                                            {/* (41) 123 521 458<br/>+91 235 548 7548 */}
                                            +2348138154470
									</div>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        )
    }
}
