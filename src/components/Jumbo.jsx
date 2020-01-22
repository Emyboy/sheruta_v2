import React from 'react';
import { Link } from 'react-router-dom';

function formatAMPM(date) {
    var hours = date.getHours();
    // var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // minutes = minutes < 10 ? '0' + minutes : minutes;
    // var strTime = hours + ':' + minutes + ' ' + ampm;
    return ampm;
}


export default () => {
    return (
        <div className="image-cover hero-banner" style={{ background: `url(${formatAMPM(new Date()) === 'am' ? "https://cdn.dribbble.com/users/149082/screenshots/2331083/city-scroll.gif" : "https://i.giphy.com/media/plyXlAk5JjZeg/source.gif"}) no-repeat`}} data-overlay="4">
            <div className="container">

                <h1 className="big-header-capt">Find Your Property</h1>
                <div className="full-search-2 eclip-search italian-search hero-search-radius">
                    <div className="hero-search-content" data-select2-id="4">

                        <div className="row">

                            <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                                <div className="form-group">
                                    <div className="input-with-icon">
                                        <input type="text" className="form-control b-r" placeholder="Neighborhood"/>
                                            <i className="ti-search"></i>
										</div>
                                    </div>
                                </div>


                                <div className="col-lg-3 col-md-3 col-sm-12 small-padd">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <select id="ptypes" className="form-control select2-hidden-accessible" data-select2-id="ptypes" tabIndex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="2">&nbsp;</option>
                                                <option value="1" data-select2-id="6">Any Type</option>
                                                <option value="2" data-select2-id="7">Apartment</option>
                                                <option value="3" data-select2-id="8">Villas</option>
                                                <option value="4" data-select2-id="9">Commercial</option>
                                                <option value="5" data-select2-id="10">Offices</option>
                                                <option value="6" data-select2-id="11">Garage</option>
                                            </select><span className="select2 select2-container select2-container--default select2-container--below" dir="ltr" data-select2-id="1" style={{width: '218px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-controls="" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-ptypes-container"><span className="select2-selection__rendered" id="select2-ptypes-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Property Types</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <i className="ti-briefcase"></i>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-2 col-md-2 col-sm-6 small-padd">
                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="text" className="form-control b-l" placeholder="Minimum"/>
                                                <i className="ti-money"></i>
										</div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-2 col-sm-6 small-padd">
                                        <div className="form-group">
                                            <div className="input-with-icon">
                                                <input type="text" className="form-control b-l" placeholder="Minimum"/>
                                                    <i className="ti-money"></i>
										</div>
                                            </div>
                                        </div>

                                        <div className="col-lg-2 col-md-2 col-sm-12 small-padd">
                                            <div className="form-group">
                                                <div className="form-group">
                                                    <Link to="/search" className="btn search-btn">Search</Link>
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
