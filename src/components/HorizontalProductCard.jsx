import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export default React.memo((props) => {
    const { val } = props;
    console.log('val --', val);
    const [state, setState] = useState({
        category: null,
        service: null,
        status: null
    })

    const getCategory = () => {
        axios(process.env.REACT_APP_BASE_URL + '/categories?id=' + val.categorie)
            .then(res => {
                // console.log('CAT --', res);
                setState({
                    ...state,
                    category: res.data[0].name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getStatus = () => {
        axios(process.env.REACT_APP_BASE_URL + '/status?id=' + val.statu)
            .then(res => {
                console.log('CAT --', res);
                setState({
                    ...state,
                    status: res.data[0].name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getService = () => {
        axios(process.env.REACT_APP_BASE_URL + '/services?id=' + val.service)
            .then(res => {
                console.log('CAT --', res);
                setState({
                    ...state,
                    service: res.data[0].name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        if (val.categorie && !state.category) {
            getCategory()
        }
    }, [state.category])
    useEffect(() => {
        if (val.statu && !state.status) {
            getStatus()
        }
    }, [state.status])
    useEffect(() => {
        if (val.service && !state.service) {
            getService()
        }
    }, [state.service])

    useEffect(() => {
        console.log('HORIZONTAL CARD RENDERED --------------------');
    }, [])

    return (
        <div className="col-lg-12 col-md-12">
            <div className="property-listing property-1">

                <div className="listing-img-wrapper">
                    <a href="single-property-2.html">
                        <img src={val.image_urls[0]} className="img-fluid mx-auto" alt="" />
                    </a>
                    <div className="listing-like-top">
                        <span className='text-white'><b style={{ textShadow: "0 0 12px black" }}>{state.service}</b></span>
                    </div>
                    <div className="listing-rating rounded text-white">
                        <b>{state.category}</b>
                    </div>
                    {state.status && <span className="property-type shadow"><b>{state.status}</b></span>}
                </div>

                <div className="listing-content">

                    <div className="listing-detail-wrapper">
                        <div className="listing-short-detail">
                            <h4 className="listing-name"><a href="single-property-2.html">{val.name}</a></h4>
                            <span className="listing-location"><i className="ti-location-pin"></i>{val.location}</span>
                        </div>
                        {/* <div className="list-author">
                            <a href="#"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                        </div> */}
                    </div>

                    <div className="listing-features-info">
                        <ul>
                            <li><strong>Bed:</strong>{val.bedroom}</li>
                            <li><strong>Bath:</strong>{val.bathroom}</li>
                            <li><strong>Sittingroom:</strong>{val.sittingroom}</li>
                        </ul>
                    </div>

                    <div className="listing-footer-wrapper">
                        <div className="listing-price">
                            <h4 className="list-pr">₦ {window.renderPrice(val.price)}</h4>
                        </div>
                        <div className="listing-detail-btn">
                            <a href="single-property-2.html" className="more-btn">More Info</a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
});
