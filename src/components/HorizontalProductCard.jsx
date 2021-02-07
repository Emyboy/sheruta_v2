import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export default (props) => {
    const { val } = props;
    console.log('val --', val);
    return (
        // <div className="col-lg-3 col-md-12 col-sm-6">
        <div className="w-100">
            <div className="property-listing property-1">

                <div className="listing-img-wrapper">
                    <Link to={{
                        pathname:`/property/${val.id}/${val.agent_id}`,
                        state: val
                    }}
                     >
                        <img style={{
                            maxHeight: '136px'
                        }} src={val.imageurl1} className="img-fluid mx-auto" alt="" />
                    </Link>
                    {/* <div className="listing-like-top">
                        <i className="ti-heart"></i>
                    </div> */}
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
                            <h4 className="listing-name"><Link to={{
                                pathname: `/property/${val.id}/${val.agent_id}`,
                                state: val
                            }}
                            >{val.title || val.area}</Link></h4>
                            <span className="listing-location"><i className="ti-location-pin"></i>{val.location}</span>
                        </div>
                        <div className="slide-property-sec">
                            <div className="pr-all-info">

                                {/* <div className="pr-single-info">
                                    <a href="#c" data-toggle="tooltip" data-original-title="Get Print"><i className="lni lni-pencil"></i></a>
                                </div> */}

                                {/* <div className="pr-single-info">
                                    <a href="#c" className="compare-button" data-toggle="tooltip" data-original-title="Compare"><i className="ti-control-shuffle"></i></a>
                                </div> */}

                                {/* <div className="pr-single-info">
                                    <a href="#c" className="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i className="lni lni-trash"></i></a>
                                </div> */}

                            </div>
                        </div>
                        <div className="list-author">
                            <a href="#c"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                        </div>
                    </div>

                    <div className="listing-features-info">
                        <ul>
                            <li><strong>Bed:</strong>{val.bedrooms}</li>
                            <li><strong>Bath:</strong>{val.toilets}</li>
                            <li><strong>Views:</strong>{val.views}</li>
                            {/* <li><strong>Sqft:</strong>3,700</li> */}
                        </ul>
                    </div>

                    <div className="listing-footer-wrapper">
                        <div className="listing-price">
                            <h4 className="list-pr">₦ {val.price}</h4>
                        </div>
                        
                        {/* <div className="listing-detail-btn">
                            <a href="single-property-2.html" className="more-btn">More Info</a>
                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    )
}
