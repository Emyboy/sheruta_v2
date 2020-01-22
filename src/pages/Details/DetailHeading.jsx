import React from 'react'

export default ({val}) => {
    return (
        <section class="spd-wrap">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12 col-md-12">

                        <div class="slide-property-detail">

                            <div class="slide-property-first">
                                <div class="pr-price-into">
                                    <h2>${val.price} <i>/ monthly</i> <span class="prt-type rent">{val.status}</span></h2>
                                    <span><i class="lni-map-marker"></i> {val.street}</span>
                                </div>
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
                                        <a href="JavaScript:Void(0);" data-toggle="tooltip" data-original-title="Get Print"><i class="ti-printer"></i></a>
                                    </div>

                                    <div class="pr-single-info">
                                        <a href="JavaScript:Void(0);" class="compare-button" data-toggle="tooltip" data-original-title="Compare"><i class="ti-control-shuffle"></i></a>
                                    </div>

                                    <div class="pr-single-info">
                                        <a href="JavaScript:Void(0);" class="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i class="lni-heart-filled"></i></a>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
