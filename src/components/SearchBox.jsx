import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default () => {
    const [area, setArea] = useState("Area");
    const [price, setPrice] = useState("Price");
    const [bedrooms, setBedrooms] = useState('Bedrooms');
    const [sittingrooms, setSittingrooms] = useState('Bedrooms');
    const [type, setType] = useState('Apartment');
    const handleSubmit = (d) => {
        sessionStorage.setItem('keywords', JSON.stringify({area, price,bedrooms,sittingrooms,type}))
    }
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
                                <label>Area</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={area} onChange={(e) => setArea(e.target.value)}>
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
                                    <i className="ti-home"></i>
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
                                    <i className="lni-apartment"></i>
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
                                    <i className="fas fa-bed"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="form-group">
                                <label>Price Range</label>
                                <div className="input-with-icon">
                                    <select className="form-control" defaultValue={price} onChange={(e) => setPrice(e.target.value)}>
                                        <option>120,000 - 200,000</option>
                                        <option>5000,000 - 700,000</option>
                                        <option>1 Million - 2 Million</option>
                                        <option>Hostel</option>
                                    </select>
                                    <i className="fas fa-bed"></i>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <Link onClick={handleSubmit} to="/search/:area/:bedrooms/:bathrooms/:type/:price" className="btn search-btn">Search Result</Link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>



    )
}
