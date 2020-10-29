import Axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default props => {

    const { val } = props;    
    
    return (
        <>
            <div className="agency-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 p-0">
                            <div className="agency agency-list shadow-0 mb-2 mt-2">

                                <Link to={`/agent/${val.company_name}`} className="agency-avatar">
                                    <img src={val.company_logo} alt={val.company_name + ' logo'} />
                                </Link>

                                <div className="agency-content">
                                    <div className="agency-name">
                                        <h4><Link to={`/agent/${val.company_name}`}>{val.company_name}</Link></h4>
                                        <span><i className="lni-map-marker"></i>{val.company_address}</span>
                                    </div>

                                    <div className="agency-desc">
                                        <p>{val.about}</p>
                                    </div>

                                    <ul className="agency-detail-info">
                                        <li><i className="lni-phone-handset"></i>{val.company_phone_no}</li>
                                        <li><i className="lni-envelope"></i><a href="#c">contact@example.com</a></li>
                                    </ul>

                                    <ul className="social-icons">
                                        <li><a className="facebook" href="#c"><i className="lni-facebook"></i></a></li>
                                        <li><a className="twitter" href="#c"><i className="lni-twitter"></i></a></li>
                                        <li><a className="linkedin" href="#c"><i className="lni-instagram"></i></a></li>
                                        <li><a className="linkedin" href="#c"><i className="lni-linkedin"></i></a></li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

