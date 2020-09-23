import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default ({ val }) => {
    const {
        company_logo,
        company_name,
        company_phone_no,
        company_address
    } = val;

    const [showDetails, setShowDetails ] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="agents-grid">

                <div className="jb-bookmark"><a href="/" data-toggle="tooltip" data-original-title="Bookmark"><i className="ti-bookmark"></i></a></div>
                <div className="agent-call"><a href="#"><i className="lni-phone-handset"></i></a></div>
                <div className="agents-grid-wrap">

                    <div className="fr-grid-thumb">
                        <a href="http://themezhub.com/">
                            <div className="overall-rate">4.4</div>
                            <img src={company_logo} className="img-fluid mx-auto" alt={company_name} />
                        </a>
                    </div>
                    <div className="fr-grid-deatil">
                        <h5 className="fr-can-name"><a href="#">{company_name}</a></h5>
                        <span className="fr-position"><i className="lni-map-marker"></i>{company_address}</span>
                        <br />
                        {/* <div className="fr-can-rating">
                            <i className="ti-star filled"></i>
                            <i className="ti-star filled"></i>
                            <i className="ti-star filled"></i>
                            <i className="ti-star filled"></i>
                            <i className="ti-star"></i>
                        </div> */}
                        <a href='#c' className='text-success' onClick={toggleDetails}>{showDetails ? "Hide Details" : 'Show Details'}</a>
                    </div>

                </div>

                <div className={`fr-grid-info ${showDetails ? null : 'hide'}`}>
                    <ul>
                        {/* TODO: SET property amount */}
                        <li>Property<span>306</span></li>
                        <li>Email<span><a href="#c" className="__cf_email__" data-cfemail="4c2f232025220c2b212d2520622f2321">[email&nbsp;protected]</a></span></li>
                        <li>Phone<span>{company_phone_no}</span></li>
                    </ul>
                </div>

                <div className="fr-grid-footer">
                    <Link to={`/agent/${company_name}`} className="btn-success btn btn-outline-theme full-width">View Profile<i className="ti-arrow-right ml-1"></i></Link>
                </div>

            </div>
        </div>
    )
}

