import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export default React.memo((props) => {
    const { val } = props;
    console.log('val --', val);
    return (
        // <div className="col-lg-3 col-md-12 col-sm-6">
        <div className="m-2">
            <div className="property-listing property-1">

                <div className="listing-img-wrapper">
                    <Link to={{
                        pathname: `/property/${val.name}/${val.id}`,
                        state: val
                    }}
                    >
                        <img style={{
                            maxHeight: '200px'
                        }} src={val.image_urls[0]} className="img-fluid mx-auto" alt={val.name} />
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
                                pathname: `/property/${val.name}/${val.id}`,
                                state: val
                            }}
                            >{val.name}</Link></h4>
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
                            <li><strong>Bed:</strong>{val.bedroom}</li>
                            <li><strong>Bath:</strong>{val.bathroom}</li>
                            {/* {val.categorie ? <li><strong>Category:</strong>{val.categorie.name}</li> : null} */}
                            {/* <li><strong>Sqft:</strong>3,700</li> */}
                        </ul>
                    </div>

                    <div className="listing-footer-wrapper">
                        <div className="listing-price">
                            <h4 className="list-pr">₦ {window.renderPrice(val.price)}</h4>
                        </div>

                        {/* <div className="listing-detail-btn">
                            <a href="single-property-2.html" className="more-btn">More Info</a>
                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    )
});
