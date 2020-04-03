import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { Radio, notification } from 'antd';

import { UploadToDatabase, handdleImageUpload } from '../redux/actions/Featured.action';
import FeatureModal from './FeatureModal';

const date = new Date();

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: {},
            email: {},
            phoneno: {},
            imageurl1: null,
            imageurl2: null,
            imageurl3: null,
            imageurl4: null,
            imageurl5: null,
            bedrooms: null,
            sittingrooms: null,
            toilets: null,
            date_added: date,
            type: null,
            address: null,
            state: null,
            price: null,
            payment_plan: null,
            area: null,
            amenities: {
                wifi: true,
                gym: false,
            },
            showModal: false,
            showAmenities: false,
        };
    }

    componentDidMount() {
        if (this.props.auth.isLoggedIn) {
            this.setState({
                user_id: this.props.auth.user.id,
                email: this.props.auth.user.email,
                phoneno: this.props.auth.user.phoneno,
            })
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault();
        console.log('sumitting....')
        const { imageurl1, imageurl2, imageurl3, imageurl4 } = this.state;
        const imageData = [imageurl1, imageurl2, imageurl3, imageurl4];
        this.props.handdleImageUpload(imageData, this.state.email);
        setTimeout(() => {
            console.log(this.props.featured.imageDone)
        }, 10000);
        if (this.props.featured.imageDone) {
            console.log('image is done ooo, i\'m sending ', this.state)
            this.props.UploadToDatabase()
        } else {
            console.log('image to reach ooo')
        }
    }

    render() {
        if (this.props.auth.isLoggedIn) {
            return (
                <section className='submit'>
                    <FeatureModal />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">

                                {localStorage.getItem('token') ? null : <div className="alert alert-info" role="alert">
                                    <p>If you don't have an account you can create one by <Link to="/login">Click Here</Link></p>
                                    <small>https://www.hosteleleven.com/wp-content/uploads/2019/05/Hostel_Brno_Eleven_Room_33_1.jpg</small><br />
                                    <small>https://upload.wikimedia.org/wikipedia/commons/e/e8/Hostel_Dormitory.jpg</small>
                                </div>}

                            </div>

                            <div className="col-lg-12 col-md-12">

                                <form onSubmit={(e) => this.handleSubmit(e)} className="submit-page">

                                    <div className="form-submit">
                                        <h3>Basic Information</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-6">
                                                    <label>Area</label>
                                                    <input name='area' type="text" className="form-control" onChange={(e) => this.handleInputChange(e)} />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Address</label>
                                                    <input name='address' type="text" className="form-control" onChange={(e) => this.handleInputChange(e)} />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Price</label>
                                                    <input name='price' type="text" className="form-control" onChange={(e) => this.handleInputChange(e)} />
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Bedrooms</label>
                                                    <div className="form-group">
                                                        <select onChange={(e) => this.handleInputChange(e)} name="bedrooms" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
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
                                                        <select onChange={(e) => this.handleInputChange(e)} name="sittingrooms" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
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
                                                        <select onChange={(e) => this.handleInputChange(e)} name="toilets" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
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
                                                    <label>State</label>
                                                    <select onChange={(e) => this.handleInputChange(e)} name="state" className="form-control select2-selection select2-selection--single" id="exampleFormControlSelect1">
                                                        <option>Lagos</option>
                                                        <option>Abuja</option>
                                                        <option>Anambra</option>
                                                        <option>Enugu</option>
                                                    </select>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="form-submit">
                                        <h3>Gallery</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-12">
                                                    <label>Upload Gallery</label>
                                                    <form className="row dropzone dz-clickable primary-dropzone">
                                                        <div className="">
                                                            <label>1. </label>
                                                            <input type='file' onChange={(e) => this.setState({ imageurl1: e.target.files[0] })} />
                                                        </div>
                                                        <div className="">
                                                            <label>2. </label>
                                                            <input type='file' onChange={(e) => this.setState({ imageurl2: e.target.files[0] })} />
                                                        </div>
                                                        <div className="">
                                                            <label>3. </label>
                                                            <input type='file' onChange={(e) => this.setState({ imageurl3: e.target.files[0] })} />
                                                        </div>
                                                        <div className="">
                                                            <label>4. </label>
                                                            <input type='file' onChange={(e) => this.setState({ imageurl4: e.target.files[0] })} />
                                                        </div>
                                                    </form>
                                                </div>
                                                <hr />

                                                {/* <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                                                    {({ getRootProps, getInputProps }) => (
                                                        <section>
                                                            <div {...getRootProps()}>
                                                                <input {...getInputProps()} />
                                                                <Button>
                                                                    <Icon id='imageurl1' type="upload" /> Click to Upload
                                                                </Button>
                                                            </div>
                                                        </section>
                                                    )}
                                                </Dropzone> */}

                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="form-submit">
                                        <h3>Types &amp; Plans </h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-6">
                                                    <label>Types</label> <br />
                                                    <Radio.Group name='type' onChange={(e) => this.handleInputChange(e)} buttonStyle="solid">
                                                        <Radio.Button style={{ fontSize: '180%' }} value="apartment">Apartment</Radio.Button>
                                                        <Radio.Button style={{ fontSize: '180%' }} value="shared">For Shared</Radio.Button>
                                                        <Radio.Button style={{ fontSize: '180%' }} value="short-let">Short Let</Radio.Button>
                                                        <Radio.Button style={{ fontSize: '180%' }} value="hostel">Hostel</Radio.Button>
                                                    </Radio.Group>
                                                </div>

                                                <div className="form-group col-md-6">
                                                    <label>Plan</label> <br />
                                                    <Radio.Group name='payment_plan' onChange={(e) => this.handleInputChange(e)} buttonStyle="solid">
                                                        <Radio.Button style={{ fontSize: '180%' }} value="apartment">Per Month</Radio.Button>
                                                        <Radio.Button style={{ fontSize: '180%' }} value="shared">Per Year</Radio.Button>
                                                    </Radio.Group>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="form-submit">
                                        <h3>Detailed Information</h3>
                                        <div className="submit-section">
                                            <div className="form-row">

                                                <div className="form-group col-md-12 mb-3">
                                                    <label>Description</label>
                                                    <textarea name="bio" onChange={(e) => this.handleInputChange(e)} className="form-control h-120 mb-4"></textarea>
                                                </div>

                                                <hr />

                                                {/* <h3>Features</h3> */}
                                                {/* <div className="form-group col-md-12">
                                                    <label>Other Features (optional)</label>
                                                    <div className="o-features">
                                                        <ul className="no-ul-list third-row">
                                                            <li>
                                                                <input id="a-1" className="checkbox-custom" name="a-1" type="checkbox" />
                                                                <label htmlFor="a-1" className="checkbox-custom-label">Wfi</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-2" className="checkbox-custom" name="a-2" type="checkbox" />
                                                                <label for="a-2" className="checkbox-custom-label">Water Supply</label>
                                                            </li>
                                                            <li>
                                                                <input id="a-3" className="checkbox-custom" name="a-3" type="checkbox" />
                                                                <label for="a-3" className="checkbox-custom-label">Furnished</label>
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
                                                </div> */}

                                            </div>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className="form-group col-lg-12 col-md-12">
                                        <button className="btn btn-theme" type="submit">Submit &amp; Preview</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </section>
            )
        } else {
            return <Redirect to='/login' />
        }
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    user: state.user,
    featured: state.featured
});

const mapActionsToProps = {
    UploadToDatabase,
    handdleImageUpload
}

export default connect(mapStateToProps, mapActionsToProps)(Submit);
