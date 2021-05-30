import React from 'react'
import Btn from '../../components/Btn'
import Select from 'react-select'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { v4 as Uid } from 'uuid'
import { notification } from 'antd';
import { Link } from 'react-router-dom';
import TextInput from '../../components/TextInput'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const uid = Uid();

const CraeteRequest = (props) => {
    localStorage.setItem('after_login', '/requests/create')
    const [state, setState] = React.useState({
        categories: [],
        services: [],
        loading: false,
        done: false
    });

    const [data, setData] = React.useState({
        heading: null,
        body: null,
        uuid: uid,
        category: null,
        service: null,
        users_permissions_user: props.auth.user ? props.auth.user.user.id : null,
        budget: null,
        location: null,
        google_location: null
    })


    const getAllCategories = () => {
        axios(process.env.REACT_APP_BASE_URL + '/categories')
            .then(res => {
                setState({ ...state, categories: res.data })
            })
            .catch(err => {
            })
    }

    const getAllServices = () => {
        axios(process.env.REACT_APP_BASE_URL + '/services')
            .then(res => {
                setState({ ...state, services: res.data })
            })
            .catch(err => {
            })
    }

    React.useEffect(() => {
        if (state.categories.length === 0) {
            getAllCategories();
        }
        if (state.services.length === 0) {
            getAllServices();
        }
    }, [state])

    const handleSubmit = e => {
        // e.priventDefault();
        if (!state.categories) {
            notification.error({ message: 'Please select a category' });
            return
        }
        setState({ ...state, loading: true })
        axios(process.env.REACT_APP_BASE_URL + "/property-requests", {
            method: 'POST',
            data: { ...data, body_html: `<p>${data.body}</p>` },
            headers: {
                Authorization:
                    `Bearer ${props.auth.user.jwt}`,
            },
        })
            .then(res => {
                setState({ ...state, loading: false, done: true })
            })
            .catch(err => {
                setState({ ...state, loading: false });
                notification.error({ message: 'Error creating request' })
            })
    }


    if (state.done) {
        return <div className='mt-5 mb-5'>
            <div className='container bg-white text-center'>
                <div className='pt-5 pb-5'>
                    <div className='text-center'>
                        <h1><b>Request Created</b></h1>
                    </div>
                    <div className="comment-box submit-form">
                        {/* <h3 className="reply-title">Post Request</h3> */}
                        <div className="comment-form">
                            <Link to={`/request/${uid}/${props.auth.user.user.id}`}>
                                <Btn text='View Request' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    } else if (!props.auth.user) {
        return <Redirect to='/login' />
    } else
        return (
            <div className='mt-5 mb-5'>
                <div className='container bg-white'>
                    <div className='pt-5 pb-5'>
                        <div className='text-center'>
                            <h2>Create Request</h2>
                        </div>
                        <div className="comment-box submit-form">
                            {/* <h3 className="reply-title">Post Request</h3> */}
                            <div className="comment-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6 col-sm-12">
                                            <TextInput
                                                label='Request Heading'
                                                placeholder="Eg. I need a shared apartment in Ikeja"
                                                onChange={e => setData({ ...data, heading: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Select Category</label>
                                                <Select
                                                    placeholder='Select Category'
                                                    options={state.categories.map(val => ({ label: val.name, value: val.id }))}
                                                    onChange={e => {
                                                        setData({ ...data, category: e.value })
                                                    }}
                                                    className='border rounded'
                                                    disabled={state.loading}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Select Service</label>
                                                <Select
                                                    placeholder='Select Service'
                                                    onChange={e => {
                                                        setData({ ...data, service: e.value })
                                                    }}
                                                    options={state.services.map(val => ({ label: val.name, value: val.id }))}
                                                    className='border rounded'
                                                    disabled={state.loading}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Location</label>
                                                <GooglePlacesAutocomplete
                                                    apiKey={process.env.REACT_APP_GOOGLE_PLACES_API_KEY}
                                                    apiOptions={{ language: 'en', region: 'ng' }}
                                                    selectProps={{
                                                        // props.state.location,
                                                        className: 'border',
                                                        onChange: e => {
                                                            console.log(e)
                                                            setData({ ...data, google_location: e, location: e.label })
                                                        },
                                                        placeholder:
                                                            'Start typing your address',
                                                    }}
                                                    autocompletionRequest={{
                                                        componentRestrictions: {
                                                            country: ['ng'],
                                                        },
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Budget / Price</label>
                                                <input
                                                    style={{ height: '40px' }}
                                                    className='form-control'
                                                    type='number'
                                                    placeholder='Eg. 300000'
                                                    onChange={e => setData({ ...data, budget: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <label>Request Body</label>
                                                <textarea onChange={e => {
                                                    setData({
                                                        ...data,
                                                        body_html: e.target.value,
                                                        body: e.target.value,
                                                    })
                                                }} disabled={state.loading} required name="body" className="form-control" cols="30" rows="6" placeholder="Type your request...."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <Btn onClick={handleSubmit} type='button' text='Post Request' className='w-100 shadow' loading={state.loading} />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CraeteRequest)
