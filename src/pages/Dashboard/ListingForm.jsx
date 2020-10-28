import React from 'react'
import { connect } from 'react-redux'
import TextInput from '../../components/TextInput';
import DropDownSellect from '../../components/DropdownSelect';
import TextArea from '../../components/TextArea';
import Btn from '../../components/Btn';
import FileUplaod from '../../components/FileUplaod';
import { addNewProperty } from '../../redux/actions/agent.actions';
import { Modal, ProgressBar } from 'react-bootstrap';

class ListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agent_id: props.auth.agentData.id,
            user_id: props.auth.user.id,
            location: null,
            bedrooms: 1,
            sittingrooms: 1,
            title: null,
            toilets: 1,
            image_urls: null,
            description: null,
            price: null,
            type: null,
            status: null,
            features: {
                wifi: true,
                heading: false
            },
            image_files: null,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileSellect = this.handleFileSellect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    };

    handleFileSellect(files) {
        this.setState({
            image_files: files
        })
        console.log(this.state)
    };

    onSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state);
    }

    render() {
        const { view, agent } = this.props;
        console.log('PROPS -------', this.props);
        const { handleInputChange, handleFileSellect, onSubmit } = this;

        const typesOptions = [
            { key: 'Houses', value: 'house' },
            { key: 'Lands', value: 'land' },
            { key: 'Self Contain', value: 'flat-apartment/self-contain' },
            { key: 'Shop', value: 'commercial-property/shop' },
            { key: 'Office Spaces', value: 'commercial-property/office-space' },
            { key: 'Flats and Apartments', value: 'flat-apartment' },
            { key: 'Semi Detached Bungalow', value: 'house/semi-detached-bungalow' },
            { key: 'Semi Detached Duplex', value: 'house/semi-detached-duplex' },
            { key: 'Co-working Space', value: 'co-working-space' },
            { key: 'Detached Bungalow', value: 'house/detached-bungalow' },
            { key: 'Warehouse', value: 'commercial-property/warehouse' },
            { key: 'Shop In A Mall', value: 'commercial-property/shop-in-a-mall' },
            { key: 'Mini Flats', value: 'flat-apartment/mini-flat' },
            { key: 'Detached Duplex', value: 'house/detached-duplex' },
            { key: 'Terraced Bungalow', value: 'house/terraced-bungalow' },
            { key: 'Commercial Properties', value: 'commercial-property' },
            { key: 'Terraced Duplex', value: 'house/terraced-duplex' },
        ]

        return (
            <div className="dashboard-wraper bg-white">
                <Modal show={agent.uploadLoading} onHide={() => { }}>
                    <Modal.Body>
                        <div className='text-center'>
                            {
                                agent.uploadStatus === 'loading' ?
                                    <>
                                        <h4 className='mb-5'>Uploading Property</h4>
                                        <ProgressBar now={agent.uploadProgress} label={`${agent.uploadProgress}%`} />
                                        {/* <h6>{agent.uploadProgress}</h6> */}
                                        <div>
                                            <Btn
                                                className='mt-4'
                                                onClick={() => { }}
                                                text={'Cancel'}
                                            />
                                        </div>
                                    </> : null
                            }
                            {
                                agent.uploadStatus === 'error' ?
                                    <>
                                        <i className='h1 ti-close'></i>
                                        <h4><b>Upload Error</b></h4>
                                        <h6>Please Try Again</h6>
                                    </> : null
                            }
                            {
                                agent.uploadStatus === 'success' ?
                                    <>
                                        <i className='h1 ti-check'></i>
                                        <h4>Upload Done!</h4>
                                        <div>
                                            <Btn
                                                className='mt-4'
                                                onClick={() => { }}
                                                text={'View Property'}
                                            />
                                        </div>
                                    </>
                                    : null
                            }

                        </div>
                    </Modal.Body>
                </Modal>
                <div className="row">
                    <div className="col-lg-12 col-md-12 p-0">
                        <form onSubmit={onSubmit} className="submit-page">
                            <div className="form-submit">
                                <h3>Basic Information</h3>
                                <div className="submit-section">
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <TextInput
                                                name='title'
                                                label={'Title'}
                                                onChange={e => { handleInputChange(e) }}
                                                placeholder={'Property Title'}
                                            />
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <DropDownSellect
                                                name='sittingrooms'
                                                options={[
                                                    { key: 1, value: 1 },
                                                    { key: 2, value: 2 },
                                                    { key: 3, value: 3 },
                                                    { key: 4, value: 4 },
                                                    { key: 5, value: 5 }
                                                ]}
                                                label={'Sitting Rooms'}
                                                onChange={e => { handleInputChange(e) }}
                                            />
                                        </div>

                                        <div className='form-group col-md-6'>
                                            <DropDownSellect
                                                name='toilets'
                                                options={[
                                                    { key: 1, value: 1 },
                                                    { key: 2, value: 2 },
                                                    { key: 3, value: 3 },
                                                    { key: 4, value: 4 },
                                                    { key: 5, value: 5 }
                                                ]}
                                                label={'Toilets'}
                                                onChange={e => { handleInputChange(e) }}
                                            />
                                        </div>
                                        <div className='form-group col-md-6'>
                                            <DropDownSellect
                                                name='bedrooms'
                                                options={[
                                                    { key: 1, value: 1 },
                                                    { key: 2, value: 2 },
                                                    { key: 3, value: 3 },
                                                    { key: 4, value: 4 },
                                                    { key: 5, value: 5 }
                                                ]}
                                                label={'Bedrooms'}
                                                onChange={e => { handleInputChange(e) }}
                                            />
                                        </div>

                                        <div className="form-group col-md-6">
                                            {/* <label>Property Type</label> */}
                                            <DropDownSellect
                                                name='type'
                                                options={typesOptions}
                                                onChange={e => { handleInputChange(e) }}
                                                label={'Property Type'}
                                            />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <DropDownSellect
                                                name='status'
                                                options={[
                                                    { key: 'For Sale', value: 'for_sale' },
                                                    { key: 'For Rent', value: 'for_rent' },
                                                    { key: 'Soled', value: 'soled' },
                                                ]}
                                                onChange={e => { handleInputChange(e) }}
                                                label={'Status'}
                                            />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <TextInput
                                                name='location'
                                                label={'Location'}
                                                placeholder={'Location'}
                                                onChange={e => { handleInputChange(e) }}
                                            />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <TextInput
                                                name='price'
                                                label={'Price'}
                                                placeholder={'150,000'}
                                                onChange={e => { handleInputChange(e) }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="form-submit">
                                <h3>Gallery</h3>
                                <div className="submit-section">
                                    <div className="form-row">

                                        <div className="form-group col-md-12">
                                            <label>Upload Images</label>
                                            <FileUplaod
                                                onChange={e => handleFileSellect(e)}
                                                placeholder={'Select Images'}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="form-submit">

                            </div>

                            <div className="form-submit">
                                <h3>Detailed Information</h3>
                                <div className="submit-section">
                                    <div className="form-row">

                                        <div className="form-group col-md-12">
                                            <TextArea
                                                name='description'
                                                placeholder={'Description'}
                                                label={'Description'}
                                                onChange={e => { handleInputChange(e) }}
                                            />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <h3>Amenities</h3>
                                            <div className="o-features">
                                                <ul className="no-ul-list third-row">
                                                    <li>
                                                        <input id="a-1" className="checkbox-custom" name="a-1" type="checkbox" />
                                                        <label for="a-1" className="checkbox-custom-label">Air Condition</label>
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

                            {/* <div className="form-submit">
                                <h3>Contact Information</h3>

                            </div> */}

                            {/* <div className="form-group col-lg-12 col-md-12">
                            <label>GDPR Agreement *</label>
                            <ul className="no-ul-list">
                                <li>
                                    <input id="aj-1" className="checkbox-custom" name="aj-1" type="checkbox" />
                                    <label for="aj-1" className="checkbox-custom-label">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                                </li>
                            </ul>
                        </div> */}
                            <hr />
                            <div className="form-group col-lg-12 col-md-12">
                                <Btn
                                    text={'Submit'}
                                    type='submit'
                                    className='w-100'
                                    onClick={() => { }}
                                />
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    agent: state.agent,
    view: state.view
})

const mapDispatchToProps = {
    submit: addNewProperty
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm)
