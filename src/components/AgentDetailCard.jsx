import Axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';


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
                                    <Tooltip placement="topLeft" title={'Company Logo'}>
                                        <img style={{ width: '140px' }} src={val.logo_url} alt={val.company_name + ' logo'} />
                                    </Tooltip>
                                </Link>

                                <div className="agency-content">
                                    <div className="agency-name">
                                        <Tooltip placement="topLeft" title={'Company Name'}>
                                            <h4><Link to={`/agent/${val.name}`}>{val.name}</Link></h4>
                                        </Tooltip>
                                        <Tooltip placement="topLeft" title={'Company Address'}>
                                            <span><i className="lni-map-marker"></i>{val.location}</span>
                                        </Tooltip>
                                    </div>

                                    <div className="agency-desc">
                                        <p>{val.about}</p>
                                    </div>

                                    {/* <ul className="agency-detail-info">
                                        <li><i className="lni-phone-handset"></i>{val.company_phone_no}</li>
                                        <Tooltip placement="topLeft" title={'Email'}>
                                            <li><i className="lni-envelope"></i><a href="#c">contact@example.com</a></li>
                                        </Tooltip>
                                    </ul> */}

                                    {/* <ul className="social-icons">
                                        <li><a className="facebook" href="#c"><i className="lni-facebook"></i></a></li>
                                        <li><a className="twitter" href="#c"><i className="lni-twitter"></i></a></li>
                                        <li><a className="linkedin" href="#c"><i className="lni-instagram"></i></a></li>
                                        <li><a className="linkedin" href="#c"><i className="lni-linkedin"></i></a></li>
                                    </ul> */}
                                    <div className='social-icons'>
                                        <button className='btn btn-success btn-sm'>Request Agent Information</button>
                                    </div>
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

