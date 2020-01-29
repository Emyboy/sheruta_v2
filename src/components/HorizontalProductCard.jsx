import React from 'react';


export default (props) => {
    console.log(props);
    return (
        <div className="col-lg-12 col-md-12">
            <div className="property-listing property-1">

                <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                        <img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" />
                    </a>
                    <div className="listing-like-top">
                        <i className="ti-heart"></i>
                    </div>
                    <div className="listing-rating">
                        <i className="ti-star filled"></i>
                        <i className="ti-star filled"></i>
                        <i className="ti-star filled"></i>
                        <i className="ti-star filled"></i>
                        <i className="ti-star"></i>
                    </div>
                    <span className="property-type">For Sale</span>
                </div>

                <div className="listing-content">

                    <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                            <h4 className="listing-name"><a href="single-property-2.html">area</a></h4>
                            <span className="listing-location"><i className="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
                        </div>
                        <div className="list-author">
                            <a href="#c"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                        </div>
                    </div>

                    <div className="listing-features-info">
                        <ul>
                            <li><strong>Bed:</strong>2</li>
                            <li><strong>Bath:</strong>1</li>
                            <li><strong>Sqft:</strong>3,700</li>
                        </ul>
                    </div>

                    <div className="listing-footer-wrapper">
                        <div className="listing-price">
                            <h4 className="list-pr">$632,580</h4>
                        </div>
                        <div className="listing-detail-btn">
                            <a href="single-property-2.html" className="more-btn">More Info</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
