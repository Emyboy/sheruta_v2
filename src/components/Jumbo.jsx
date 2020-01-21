import React from 'react';
import cityImage from '../img/city.svg';

export default () => {
    return (
        <div class="image-cover hero-banner" style={{background: `url(${cityImage}) no-repeat`}} data-overlay="4">
            <div class="container">

                <h1 class="big-header-capt">Find Your Property</h1>
                <div class="full-search-2 eclip-search italian-search hero-search-radius">
                    <div class="hero-search-content" data-select2-id="4">

                        <div class="row">

                            <div class="col-lg-3 col-md-3 col-sm-12 small-padd">
                                <div class="form-group">
                                    <div class="input-with-icon">
                                        <input type="text" class="form-control b-r" placeholder="Neighborhood"/>
                                            <i class="ti-search"></i>
										</div>
                                    </div>
                                </div>


                                <div class="col-lg-3 col-md-3 col-sm-12 small-padd">
                                    <div class="form-group">
                                        <div class="input-with-icon">
                                            <select id="ptypes" class="form-control select2-hidden-accessible" data-select2-id="ptypes" tabindex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="2">&nbsp;</option>
                                                <option value="1" data-select2-id="6">Any Type</option>
                                                <option value="2" data-select2-id="7">Apartment</option>
                                                <option value="3" data-select2-id="8">Villas</option>
                                                <option value="4" data-select2-id="9">Commercial</option>
                                                <option value="5" data-select2-id="10">Offices</option>
                                                <option value="6" data-select2-id="11">Garage</option>
                                            </select><span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id="1" style={{width: '218px'}}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ptypes-container"><span class="select2-selection__rendered" id="select2-ptypes-container" role="textbox" aria-readonly="true"><span class="select2-selection__placeholder">Property Types</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <i class="ti-briefcase"></i>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-2 col-md-2 col-sm-6 small-padd">
                                    <div class="form-group">
                                        <div class="input-with-icon">
                                            <input type="text" class="form-control b-l" placeholder="Minimum"/>
                                                <i class="ti-money"></i>
										</div>
                                        </div>
                                    </div>

                                    <div class="col-lg-2 col-md-2 col-sm-6 small-padd">
                                        <div class="form-group">
                                            <div class="input-with-icon">
                                                <input type="text" class="form-control b-l" placeholder="Minimum"/>
                                                    <i class="ti-money"></i>
										</div>
                                            </div>
                                        </div>

                                        <div class="col-lg-2 col-md-2 col-sm-12 small-padd">
                                            <div class="form-group">
                                                <div class="form-group">
                                                    <a href="#" class="btn search-btn">Search</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
            )
        }
