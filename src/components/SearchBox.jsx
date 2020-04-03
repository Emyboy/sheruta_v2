import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import {  search } from '../redux/actions/user.action';
// import { getAllAreas } from '../redux/actions/view.actions';
import Axios from 'axios';


const mapStateToProps = state =>({
    user: state.user
});

const mapActionsToProps = {
    search
}

export default connect(mapStateToProps, mapActionsToProps)(() => {
    const [area, setArea] = useState("Yaba");
    const [price, setPrice] = useState("120,000");
    const [bedrooms, setBedrooms] = useState('1');
    const [sittingrooms, setSittingrooms] = useState('1');
    const [type, setType] = useState('Apartment');
    const [areas, setAreas] = useState([]);

    const handleSubmit = (d) => {
        sessionStorage.setItem('keywords', JSON.stringify({area, price,bedrooms,sittingrooms,type}))
    }

    const getAllAreas = () => {
        Axios(`${process.env.REACT_APP_BASE_URL}/views/area`)
            .then(res => {
                setAreas(res.data);
            })
            .catch(err => console.log('.............',err))
    }

    useEffect(() => {
        getAllAreas();
    },[]);

    return (
        <div className="container">
            <div className="hero-search-wrap full-width">
            <div className="hero-search">
                    <h1>Find Your Dream</h1>
                </div>
                <div className="hero-search-content">

                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Location</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={area} onChange={(e) => setArea(e.target.value)}>
                                        
                                        {/* <option>Okota</option>
                                        <option>Isolo</option> */}
                                        {
                                            areas.map((val, i) => <option key={i}>{val}</option>)
                                        }
                                    </select>
                                    <i className="ti-map"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Bedrooms</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <i className="fas fa-bed"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Sittingrooms</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={sittingrooms} onChange={(e) => setSittingrooms(e.target.value)}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    <i className="ti-home"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="form-group">
                                <label>Type</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={type} onChange={(e) => setType(e.target.value)}>
                                        <option>Apartment</option>
                                        <option>Shared Apartment</option>
                                        <option>Hostel</option>
                                    </select>
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="form-group">
                                <label>Price Range</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={price} onChange={(e) => setPrice(e.target.value)}>
                                        <option>50,000 - 150,000</option>
                                        <option>150,000 - 250,000</option>
                                        <option>250,000 - 550,000</option>
                                        <option>550,000 - 1,050,000</option>
                                        <option>1,050,000 - 3 million</option>
                                        <option>3 mill and above</option>
                                    </select>
                                    <i className="fas fa-money"></i>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <Link onClick={handleSubmit} to={`/search/${area}/${bedrooms}/${sittingrooms}/${type}/${price}`} className="btn search-btn">Search Result</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
});
