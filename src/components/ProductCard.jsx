import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToFavorite } from '../redux/actions/user.action';

const mapStateToProps = state => ({
    user: state.user,
    auth: state.auth
});

const mapActionsToProps = {
    addToFavorite
};

export default connect(mapStateToProps, mapActionsToProps)((props) => {
    // console.log(props);
    const { area, price, imageurl1, bedrooms, toilets, status, type, id, paymentplan, title } = props.val;
    const { addToFavorite, auth } = props;
    const { isLoggedIn } = props.auth;
    return (
        <div className="animate__animated animate__fadeIn single-items" tabIndex="1" role="option" aria-selected aria-describedby="slick-slide00" style={{ width: "360px", dataSlickIndex: 0, ariaHidden: "true" }}>
            <div className="property-listing property-2">

                <div className="listing-img-wrapper">
                    <div className="list-img-slide">
                        <div className="click slick-initialized slick-slider">
                            {/* <button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" style={{ display: 'block' }} tabIndex="1">
                                Previous
                            </button> */}
                            <div aria-live="polite" className="slick-list draggable">
                                <div className="slick-track" role="listbox" style={{ opacity: 1, width: '1020px', transform: 'translate3d(-340px, 0px, 0px)' }}>
                                    <div className="slick-slide" data-slick-index="0" aria-hidden="true"  role="option" aria-selected aria-describedby="slick-slide50" style={{ width: '340px', }}>
                                        <Link to={`${String(type).toLowerCase()}/${id}`} >
                                            <img src={imageurl1} className="img-fluid mx-auto" alt="" />
                                        </Link>
                                    </div>
                                    <div className="slick-slide" data-slick-index="1" aria-hidden="true"  role="option" aria-selected aria-describedby="slick-slide51" style={{ width: '340px' }}>
                                        <Link to={`${String(type).toLowerCase()}/${id}`} >
                                            <img src={imageurl1} className="img-fluid mx-auto" alt="" />
                                        </Link>
                                    </div>
                                    <div className="slick-slide" data-slick-index="2" aria-hidden="true"  role="option" aria-selected aria-describedby="slick-slide52" style={{ width: '340px' }}><Link to={`${String(type).toLowerCase()}/${id}`} >
                                        <img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" />
                                    </Link>
                                    </div>
                                </div>
                            </div>


                            {/* <button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" style={{ display: 'block' }} >
                                Next
                            </button> */}
                        </div>
                    </div>
                    <span className="property-type">{status}</span>
                </div>

                <div className="listing-detail-wrapper pb-0">
                    <div className="listing-short-detail">
                        <h1 className="listing-name sh-text"><Link to={`${String(type).toLowerCase()}/${id}`} >{title}</Link>
                        {/* <i className="list-status ti-check"></i> */}
                        </h1>
                    </div>
                </div>

                <div className="price-features-wrapper">
                    <div className="listing-price-fx">
                        <label className="">₦{price}<span className="price-suffix"> / {paymentplan}</span></label>
                    </div>
                    <div className="listing-like-top">
                        {/* <i onClick={() => addToFavorite({
                            hostelId:id,
                            userId: isLoggedIn ? auth.user.id : null,
                            imageurl1, type
                            })} className="ti-heart text-danger"></i> */}
                        {/* <i className="lni-heart-filled" style={{color:'red'}}></i> */}
                        {/* <i><img width='6%' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png' alt='icon' /></i> */}
                    </div>
                    <div className="list-fx-features">
                        <div className="listing-card-info-icon">
                            <span className="inc-fleat inc-bed">{bedrooms} Beds</span>
                        </div>
                        <div className="listing-card-info-icon">
                            <span className="inc-fleat inc-bath">{toilets} Bath</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
});
