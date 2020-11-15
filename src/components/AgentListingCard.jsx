import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Modal, ButtonGroup, Button } from 'react-bootstrap'
import Btn from './Btn';
import { Link } from 'react-router-dom';
import { deleteApartment } from '../redux/actions/agent.actions';

export const AgentListingCard = (props) => {
    const { data } = props;
    const [showDelete, setShowDelete] = useState(false);
    console.log('CARD DATA ---', data);

    return (
        <div className="col-lg-12 col-md-12">
            <div className="property-listing property-1">

                <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                        <img src={data.image_urls.image_url_1} className="img-fluid mx-auto" alt="" />
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
                                <h4 className="listing-name"><a href="single-property-2.html">Resort Valley Ocs</a></h4>
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
                        <div class="slide-property-sec">
                            <div class="pr-all-info">

                                <div class="pr-single-info">
                                    <div class="share-opt-wrap">
                                        <button type="button" class="btn-share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-original-title="Share this">
                                            <i class="lni-share"></i>
                                        </button>
                                        <div class="dropdown-menu animated flipInX">
                                            <a href="#" class="cl-facebook"><i class="lni-facebook"></i></a>
                                            <a href="#" class="cl-twitter"><i class="lni-twitter"></i></a>
                                            <a href="#" class="cl-gplus"><i class="lni-google-plus"></i></a>
                                            <a href="#" class="cl-instagram"><i class="lni-instagram"></i></a>
                                        </div>
                                    </div>

                                </div>

                                <div class="pr-single-info">
                                    <a href="#c" data-toggle="tooltip" data-original-title="Get Print"><i class="ti-printer"></i></a>
                                </div>

                                <div class="pr-single-info">
                                    <a href="#c" class="compare-button" data-toggle="tooltip" data-original-title="Compare"><i class="ti-control-shuffle"></i></a>
                                </div>

                                <div class="pr-single-info">
                                    <a href="#c" class="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i class="lni-heart-filled"></i></a>
                                </div>

                            </div>
                        </div>
                                <div className="listing-detail-btn">
                                    <a href="single-property-2.html" className="more-btn">More Info</a>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
        // <tr id={`${data.uuid}`}>
        //     <Modal show={showDelete} onHide={() => setShowDelete(!showDelete)} >
        //         <Modal.Body>
        //             <div className='text-center'>
        //                 <h3>Are you sure you want to delete?</h3>
        //                 <ButtonGroup aria-label="Basic example">
        //                     <Button variant="success" onClick={() => {
        //                         props.DeleteApartment(data);
        //                         setShowDelete(!showDelete)
        //                     }}>Yes</Button>
        //                     <Button variant="danger" onClick={() => setShowDelete(!showDelete)}>No</Button>
        //                 </ButtonGroup>
        //             </div>
        //         </Modal.Body>
        //     </Modal>
        //     <td className="property-container">
        //         <img src={data.image_urls.image_url_4} alt={`${data.title}`} />
        //         <div className="title">
        //             <h4><Link to={{
        //                 pathname: `/property/${data.id}/${data.agent_id}`,
        //                 query: data
        //             }} params={data}>{data.title}</Link></h4>
        //             <span>{data.location}</span>
        //             <span className="table-property-price">₦ {data.price}</span>
        //         </div>
        //     </td>
        //     <td className="expire-date">{data.moment}</td>x
        //     <td className="action">
        //         <a href="#c" className='text-warning'><i className="ti-pencil"></i> Edit</a>
        //         <a href="#c" className='text-success'><i className="ti-arrow-up"></i> Promote</a>
        //         <a href="#c" onClick={() => setShowDelete(!showDelete)} className="delete text-danger"><i className="ti-close"></i> Delete</a>
        //     </td>
        // </tr>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    DeleteApartment: deleteApartment
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentListingCard)
