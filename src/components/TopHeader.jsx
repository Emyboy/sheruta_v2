import React from 'react';

export default () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-md-6">
                        <div className="cn-info">
                            <ul>
                                <li><i className="lni-phone-handset"></i>+2348138154470</li>
                                <li><i className="ti-email"></i>info@sheruta.ng</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <ul className="top-social">
                            <li><a target='_blank' rel="noopener noreferrer" href="http://fb.me/sheruta.ng"><i className="lni-facebook"></i></a></li>
                            <li><a target='_blank' rel="noopener noreferrer"  href="https://twitter.com/sheruta_ng"><i className="lni-twitter"></i></a></li>
                            <li><a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/sheruta_ng/"><i className="lni-instagram"></i></a></li>
                            {/* <li><a href="#c"><i className="lni-linkedin"></i></a></li> */}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
