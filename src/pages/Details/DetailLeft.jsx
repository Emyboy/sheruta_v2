import React from 'react'
import ImageViews from './ImageViews'

export default (props) => {
    const { val } = props;
    return (
        <div class="col-lg-8 col-md-12 col-sm-12">
            <ImageViews val={val} />
            <div class="block-wrap">

                <div class="block-header">
                    <h4 class="block-title">Property Info</h4>
                </div>

                <div class="block-body">
                    <ul class="dw-proprty-info">
                        <li><strong>Bedrooms</strong>{val.bedrooms}</li>
                        <li><strong>Bathrooms</strong>{val.toilets}</li>
                        <li><strong>Sitting Rooms</strong>{val.sittingrooms}</li>
                        <li><strong>Garage</strong>No</li>
                        <li><strong>Area</strong>... sq ft</li>
                        <li><strong>Type</strong>{val.type}</li>
                        <li><strong>Price</strong>${val.price}</li>
                        <li><strong>Location</strong>{val.area}</li>
                    </ul>
                </div>

            </div>

            <div class="block-wrap">

                <div class="block-header">
                    <h4 class="block-title">Description</h4>
                </div>

                <div class="block-body">
                    <p>{val.bio}</p>
                </div>

            </div>

            <div class="block-wrap">

                <div class="block-header">
                    <h4 class="block-title">Ameneties</h4>
                </div>

                <div class="block-body">
                    <ul class="avl-features third">
                        <li>Air Conditioning</li>
                        <li>Swimming Pool</li>
                        <li>Central Heating</li>
                        <li>Laundry Room</li>
                        <li>Gym</li>
                        <li>Alarm</li>
                        <li>Window Covering</li>
                        <li>Internet</li>
                        <li>Pets Allow</li>
                        <li>Free WiFi</li>
                        <li>Car Parking</li>
                        <li>Spa &amp; Massage</li>
                    </ul>
                </div>

            </div>

            <div class="block-wrap">

                <div class="block-header">
                    <h4 class="block-title">Floor Plan</h4>
                </div>

                <div class="block-body">
                    <div class="accordion" id="floor-option">
                        <div class="card">
                            <div class="card-header" id="firstFloor">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link" data-toggle="collapse" data-target="#firstfloor">First Floor<span>740 sq ft</span></button>
                                </h2>
                            </div>
                            <div id="firstfloor" class="collapse" aria-labelledby="firstFloor" data-parent="#floor-option">
                                <div class="card-body">
                                    <img src="assets/img/floor.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="seconfFloor">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#secondfloor">Second Floor<span>710 sq ft</span></button>
                                </h2>
                            </div>
                            <div id="secondfloor" class="collapse" aria-labelledby="seconfFloor" data-parent="#floor-option">
                                <div class="card-body">
                                    <img src="assets/img/floor.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="third-garage">
                                <h2 class="mb-0">
                                    <button type="button" class="btn btn-link collapsed" data-toggle="collapse" data-target="#garages">Garage<span>520 sq ft</span></button>
                                </h2>
                            </div>
                            <div id="garages" class="collapse" aria-labelledby="third-garage" data-parent="#floor-option">
                                <div class="card-body">
                                    <img src="assets/img/floor.jpg" class="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="block-wrap">

                <div class="block-header">
                    <h4 class="block-title">Location</h4>
                </div>

                <div class="block-body">
                    <div class="map-container">
                        <div id="singleMap" data-latitude="40.7427837" data-longitude="-73.11445617675781" data-maptitle="Our Location"></div>
                    </div>

                </div>

            </div>



        </div>
    )
}
