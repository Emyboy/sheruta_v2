import React from 'react';
// import { Link } from 'react-router-dom';


export default (props) => {
    const { val } = props;
    return (
        <div className="col-lg-12 col-md-12">
            <div className="property-listing property-1">

                <div className="listing-img-wrapper">
                    <a href={`/${String(val.type).toLowerCase()}/${val.id}`}>
                        <img src={val.imageurl1} className="img-fluid mx-auto" alt="" />
                    </a>
                    <div className="listing-like-top">
                        <i className="ti-heart"></i>
                    </div>
                    {/* <div className="listing-rating">
                        <i className="ti-star filled"></i>
                        <i className="ti-star filled"></i>
                        <i className="ti-star filled"></i>
                        <i className="ti-star filled"></i>
                        <i className="ti-star"></i>
                    </div> */}
                    <span className="property-type">{val.status}</span>
                </div>

                <div className="listing-content">

                    <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                            <h4 className="listing-name">
                                <a href={`/${String(val.type).toLowerCase()}/${val.id}`}>{val.area}</a>
                            </h4>
                            <span className="listing-location"><i className="ti-location-pin"></i>{val.street}</span>
                        </div>
                        <div className="list-author">
                            <a href="#c"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                        </div>
                    </div>

                    <div className="listing-features-info">
                        <ul>
                            <li><strong>Bed:</strong>{val.bedrooms}</li>
                            <li><strong>Bath:</strong>{val.toilets}</li>
                            {/* <li><strong>Sqft:</strong>3,700</li> */}
                        </ul>
                    </div>

                    <div className="listing-footer-wrapper">
                        <div className="listing-price">
                            <h4 className="list-pr">₦ {val.price}</h4>
                        </div>
                        <div className="listing-detail-btn">
                            <a className="more-btn" href={`/${String(val.type).toLowerCase()}/${val.id}`} tabIndex="-1">
                                View <i className='fa fa-arrow-right'></i>
                        </a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
