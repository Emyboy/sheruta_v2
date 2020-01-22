import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

class Submit extends Component {
    render() {
        if(!this.props.auth.isLoggedIn){
            return (
                <section className='submit'>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">

                                {localStorage.getItem('token') ? null : <div className="alert alert-info" role="alert">
                                    <p>If you don't have an account you can create one by <Link to="/login">Click Here</Link></p>
                                </div>}

                            </div>

                            <div className="col-lg-12 col-md-12">

                                <div className="submit-page">

                                    <div className="form-submit">
                                        <h3>Basic Information</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-6">
                                                    <label>Property Title<a href="#c" className="tip-topdata" data-tip="Property Title"><i className="ti-help"></i></a></label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Area</label>
                                                    <input name='area' type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Street</label>
                                                    <input name='street' type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Full Street</label>
                                                    <input name='fullstreet' type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Price</label>
                                                    <input name='price' type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Bedrooms</label>
                                                    <div className="form-group">
                                                        <select name="bedrooms" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Sitting Rooms</label>
                                                    <div className="form-group">
                                                        <select name="sittingrooms" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Bathrooms</label>
                                                    <div className="form-group">
                                                        <select name="toilets" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <h3>Gallery</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-12">
                                                    <label>Upload Gallery</label>
                                                    <form action="https://codeminifier.com/upload-target" className="dropzone dz-clickable primary-dropzone">
                                                        <div className="dz-default dz-message">
                                                            <i className="ti-gallery"></i>
                                                            <span>Drag &amp; Drop To Change Logo</span>
                                                        </div>
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <h3>Location</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-6">
                                                    <label>Address</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>City</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>State</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Zip Code</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <h3>Detailed Information</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-12">
                                                    <label>Description</label>
                                                    <textarea className="form-control h-120"></textarea>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label>Building Age (optional)</label>
                                                    <select id="bage" className="form-control select2-hidden-accessible" data-select2-id="bage" tabindex="-1" aria-hidden="true">
                                                        <option value="" data-select2-id="14">&nbsp;</option>
                                                        <option value="1">0 - 5 Years</option>
                                                        <option value="2">0 - 10Years</option>
                                                        <option value="3">0 - 15 Years</option>
                                                        <option value="4">0 - 20 Years</option>
                                                        <option value="5">20+ Years</option>
                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="13" style={{ width: '363px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-controls="" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-bage-container"><span className="select2-selection__rendered" id="select2-bage-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select An Option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label>Garage (optional)</label>
                                                    <select id="garage" className="form-control select2-hidden-accessible" data-select2-id="garage" tabindex="-1" aria-hidden="true">
                                                        <option value="" data-select2-id="12">&nbsp;</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="11" style={{ width: '363px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-controls="" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-garage-container"><span className="select2-selection__rendered" id="select2-garage-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Choose Rooms</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label>Rooms (optional)</label>
                                                    <select id="rooms" className="form-control select2-hidden-accessible" data-select2-id="rooms" tabindex="-1" aria-hidden="true">
                                                        <option value="" data-select2-id="10">&nbsp;</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="9" style={{ width: '363px' }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-controls="" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-rooms-container"><span className="select2-selection__rendered" id="select2-rooms-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Choose Rooms</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                </div>

                                                <div className="form-group col-md-12">
                                                    <label>Other Features (optional)</label>
                                                    <div className="o-features">
                                                        <ul className="no-ul-list third-row">
                                                            <li>
                                                                <input id="a-1" className="checkbox-custom" name="a-1" type="checkbox" />
                                                                <label htmlFor="a-1" className="checkbox-custom-label">Air Condition</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-2" className="checkbox-custom" name="a-2" type="checkbox" />
                                                                <label for="a-2" className="checkbox-custom-label">Bedding</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-3" className="checkbox-custom" name="a-3" type="checkbox" />
                                                                <label for="a-3" className="checkbox-custom-label">Heating</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-4" className="checkbox-custom" name="a-4" type="checkbox" />
                                                                <label for="a-4" className="checkbox-custom-label">Internet</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-5" className="checkbox-custom" name="a-5" type="checkbox" />
                                                                <label for="a-5" className="checkbox-custom-label">Microwave</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-6" className="checkbox-custom" name="a-6" type="checkbox" />
                                                                <label for="a-6" className="checkbox-custom-label">Smoking Allow</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-7" className="checkbox-custom" name="a-7" type="checkbox" />
                                                                <label for="a-7" className="checkbox-custom-label">Terrace</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-8" className="checkbox-custom" name="a-8" type="checkbox" />
                                                                <label for="a-8" className="checkbox-custom-label">Balcony</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-9" className="checkbox-custom" name="a-9" type="checkbox" />
                                                                <label for="a-9" className="checkbox-custom-label">Icon</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-10" className="checkbox-custom" name="a-10" type="checkbox" />
                                                                <label for="a-10" className="checkbox-custom-label">Wi-Fi</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-11" className="checkbox-custom" name="a-11" type="checkbox" />
                                                                <label for="a-11" className="checkbox-custom-label">Beach</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-12" className="checkbox-custom" name="a-12" type="checkbox" />
                                                                <label for="a-12" className="checkbox-custom-label">Parking</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-submit">
                                        <h3>Contact Information</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-4">
                                                    <label>Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label>Email</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                                <div className="form-group col-md-4">
                                                    <label>Phone (optional)</label>
                                                    <input type="text" className="form-control" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-lg-12 col-md-12">
                                        <button className="btn btn-theme" type="submit">Submit &amp; Preview</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </section>
            )
        }else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Submit);
