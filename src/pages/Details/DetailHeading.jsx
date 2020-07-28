import React from 'react'

export default ({val}) => {
    return (
        <section className="spd-wrap">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12 col-md-12">

                        <div className="slide-property-detail">

                            <div className="slide-property-first">
                                <div className="pr-price-into">
                                    <h2>₦ {val.price} <i>/ {val.paymentplan}</i> <span className="prt-type rent">{val.status}</span></h2>
                                    <span><i className="lni-map-marker"></i> {val.street}</span>
                                </div>
                            </div>

                            <div className="slide-property-sec">
                                <div className="pr-all-info">

                                    {/* <div className="pr-single-info">
                                        <div className="share-opt-wrap">
                                            <button type="button" className="btn-share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-original-title="Share this">
                                                <i className="lni-share"></i>
                                            </button>
                                            <div className="dropdown-menu animated flipInX">
                                                <a href="#c" className="cl-facebook"><i className="lni-facebook"></i></a>
                                                <a href="#c" className="cl-twitter"><i className="lni-twitter"></i></a>
                                                <a href="#c" className="cl-gplus"><i className="lni-google-plus"></i></a>
                                                <a href="#c" className="cl-instagram"><i className="lni-instagram"></i></a>
                                            </div>
                                        </div>

                                    </div> */}

                                    {/* <div className="pr-single-info">
                                        <a href="JavaScript:Void(0);" data-toggle="tooltip" data-original-title="Get Print"><i className="ti-printer"></i></a>
                                    </div> */}

                                    {/* <div className="pr-single-info">
                                        <a href="JavaScript:Void(0);" className="compare-button" data-toggle="tooltip" data-original-title="Compare"><i className="ti-control-shuffle"></i></a>
                                    </div> */}

                                    {/* <div className="pr-single-info">
                                        <a href="#c" className="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i className="lni-heart-filled"></i></a>
                                    </div> */}

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
