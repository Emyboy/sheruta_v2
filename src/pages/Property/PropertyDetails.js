import { notification } from 'antd';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import PageLoader from '../../components/PageLoader';
import { Spinner } from 'react-activity';

export default props => {
    console.log('props ---', props);

    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState(null);
    const [image_urls, setImage_urls] = useState([]);
    const [agentData, setAgentData] = useState(null);


    const getAgentDat = (agent_id) => {
        Axios(`${process.env.REACT_APP_BASE_URL}/agent/${agent_id}`)
            .then(agent => {
                console.log('Agent data --', agent);
                if (typeof agent.data.account) {
                    setAgentData(agent.data.account[0])
                } else {
                    notification.error({ message: 'Error Loading Agent Info' })
                }
            })
            .catch(err => {
                notification.error({ message: 'Error Loading Agent Info' })
            })
    }


    const getApartmentDetails = () => {
        const { agent_id, property_id } = props.match.params;
        getAgentDat(agent_id);
        Axios(`${process.env.REACT_APP_BASE_URL}/property/${property_id}/${agent_id}`)
            .then(res => {
                console.log(res);
                setQuery(res.data[0]);
                setImage_urls(Object.values(res.data[0].image_urls))
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        if (props.location.query) {
            getAgentDat(props.match.params.agent_id);
            setQuery(props.location.query);
            setIsLoading(false);
            setImage_urls(Object.values(props.location.query.image_urls));
        } else {
            getApartmentDetails();

        }
    }, []);

    if (isLoading) {
        return <PageLoader />
    } else {
        console.log('query --', query, Object.values(query.image_urls));
        return (
            <section className="gray">
                <div className='container'>
                    <div className='row'>






                        <div className='col-lg-8 col-md-12 col-sm-12'>
                            <div className="slide-property-first mb-4">
                                <div className="pr-price-into">
                                    <h1 className='h3'>{query.title}</h1>
                                    <h2>₦ {query.price} <i>/ monthly</i> <span className="prt-type rent">{query.status}</span></h2>
                                    <span><i className="lni-map-marker"></i> {query.location}</span>
                                </div>
                            </div>

                            <div class="property3-slide single-advance-property mb-4">
                                {/* <ImageViewer imageurl1={imageurl1} imageurl2={imageurl2} imageurl3={imageurl3} imageurl4={imageurl4} /> */}
                                <Carousel>
                                    {
                                        image_urls.map((val, i) => {
                                            console.log('URLS ---', val);
                                            return (
                                                <Carousel.Item>
                                                    <span aria-hidden="true" className="carousel-control-next-icon" />
                                                    <span id='image-viewer' style={{ height: "610px", position: "relative" }}>
                                                        <Image
                                                            // onClick={() => props.toggleLightBox(props.showLightBox, 0)}
                                                            fluid
                                                            className="item-slick  slick-current slick-active"
                                                            src={val}
                                                            alt={"slide" + i}
                                                        />

                                                    </span>
                                                </Carousel.Item>
                                            )
                                        })
                                    }
                                </Carousel>

                            </div>

                            <div className="block-wrap">

                                <div className="block-header">
                                    <h4 className="block-title">Property Info</h4>
                                </div>

                                <div className="block-body">
                                    <ul className="dw-proprty-info">
                                        <li><strong>Bedrooms</strong>{query.bedrooms}</li>
                                        <li><strong>Bathrooms</strong>2</li>
                                        <li><strong>Sitting Rooms</strong>{query.sittingrooms}</li>
                                        <li><strong>Toilets</strong>{query.toilets}</li>
                                        {/* <li><strong>Price</strong>$53264</li>
                                        <li><strong>City</strong>New York</li>
                                        <li><strong>Build On</strong>2007</li> */}
                                    </ul>
                                </div>

                            </div>


                            {
                                agentData ? <div className="block-wrap">

                                    <div className="block-header">
                                        <h4 className="block-title">Agent Info</h4>
                                    </div>

                                    <div className="block-body">
                                        <div class="agent-title">
                                            <div class="agent-photo">
                                                <img src={agentData.company_logo} alt={'agent company logo'} />
                                            </div>
                                            <div class="agent-details"><h4>
                                                <a href="#c">{agentData.company_name}</a>
                                            </h4>
                                                {/* <a href="tel:" className='btn btn-theme'>{phoneNo}</a> */}
                                                <a href="tel:">
                                                    <i class="lni-phone-handset"></i>{agentData.company_phone_no}</a>
                                                    </div><div class="clearfix"></div></div>
                                    </div>

                                </div> :
                                    <div className='text-center'>
                                        <Spinner />
                                        <p className='h5'> Loading Agent Data</p>
                                    </div>
                            }


                            <div className="block-wrap">

                                <div className="block-header">
                                    <h4 className="block-title">Description</h4>
                                </div>

                                <div className="block-body">
                                    <p>{query.description}</p>
                                </div>

                            </div>


                            <div className="block-wrap">

                                <div className="block-header">
                                    <h4 className="block-title">Ameneties</h4>
                                </div>

                                <div className="block-body">
                                    <ul className="avl-features third">
                                        {
                                            Object.keys(query.features).map((val, i) => {
                                                return <li>{val}</li>
                                            })
                                        }
                                        {/*                                         
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
                                        <li>Spa &amp; Massage</li> */}
                                    </ul>
                                </div>

                            </div>


                        </div>










                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="page-sidebar">

                                <div className="slide-property-sec mb-4">
                                    <div className="pr-all-info">

                                        <div className="pr-single-info">

                                        </div>

                                        <div className="pr-single-info">
                                            <a href="#c" className="compare-button" data-toggle="tooltip" data-original-title="Compare"><i className="ti-share"></i></a>
                                        </div>

                                        <div className="pr-single-info">
                                            <a href="#c" className="compare-button" data-toggle="tooltip" data-original-title="Compare"><i className="ti-bookmark"></i></a>
                                        </div>

                                        <div className="pr-single-info">
                                            <a href="#c" className="add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i className="lni-heart"></i></a>
                                        </div>

                                        <div className="pr-single-info">
                                            <a href="#c" className="like-bitt add-to-favorite" data-toggle="tooltip" data-original-title="Add To Favorites"><i className="lni-heart-filled"></i></a>
                                        </div>

                                    </div>
                                </div>

                                <div className="agent-widget">
                                    <div className="agent-title">
                                        <div className="agent-photo"><img src="assets/img/user-6.jpg" alt="" /></div>
                                        <div className="agent-details">
                                            <h4><a href="#c">Shivangi Preet</a></h4>
                                            <span><i className="lni-phone-handset"></i>(91) 123 456 7895</span>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Phone" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control">I'm interested in this property.</textarea>
                                    </div>
                                    <button className="btn btn-theme full-width">Send Message</button>
                                </div>

                                <div className="sidebar-widgets">

                                    <h4>Find New Property</h4>

                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <input type="text" className="form-control" placeholder="Neighborhood" />
                                            <i className="ti-search"></i>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input type="text" className="form-control" placeholder="Minimum" />
                                                    <i className="ti-money"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="input-with-icon">
                                                    <input type="text" className="form-control" placeholder="Maximum" />
                                                    <i className="ti-money"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <select id="bedrooms" className="form-control select2-hidden-accessible" data-select2-id="bedrooms" tabindex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="2">&nbsp;</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style="width: 370px;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-bedrooms-container"><span className="select2-selection__rendered" id="select2-bedrooms-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Bedrooms</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span> */}
                                            <i className="fas fa-bed"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <select id="bathrooms" className="form-control select2-hidden-accessible" data-select2-id="bathrooms" tabindex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="4">&nbsp;</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="3" style="width: 370px;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-bathrooms-container"><span className="select2-selection__rendered" id="select2-bathrooms-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Bathrooms</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span> */}
                                            <i className="fas fa-bath"></i>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-with-icon">
                                            <select id="cities" className="form-control select2-hidden-accessible" data-select2-id="cities" tabindex="-1" aria-hidden="true">
                                                <option value="" data-select2-id="6">&nbsp;</option>
                                                <option value="1">Los Angeles, CA</option>
                                                <option value="2">New York City, NY</option>
                                                <option value="3">Chicago, IL</option>
                                                <option value="4">Houston, TX</option>
                                                <option value="5">Philadelphia, PA</option>
                                                <option value="6">San Antonio, TX</option>
                                                <option value="7">San Jose, CA</option>
                                            </select>
                                            {/* <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style="width: 370px;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-cities-container"><span className="select2-selection__rendered" id="select2-cities-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">All Cities</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span> */}
                                            <i className="ti-briefcase"></i>
                                        </div>
                                    </div>

                                    <button className="btn btn-theme full-width">Find New Home</button>

                                </div>


                                <div className="sidebar-widgets">

                                    <h4>Featured Property</h4>

                                    <div className="sidebar-property-slide slick-initialized slick-slider"><button type="button" data-role="none" className="slick-prev slick-arrow" aria-label="Previous" style={{ display: "block" }}>Previous</button>

                                        <div aria-live="polite" className="slick-list draggable"><div className="slick-track" role="listbox" style={{ opacity: 1, width: "1450px", transform: "translate3d(-580px, 0px, 0px)" }}><div className="single-items slick-slide slick-cloned" tabindex="-1" aria-describedby="slick-slide02" style={{ width: "290px" }} data-slick-index="-1" aria-hidden="true">
                                            <div className="property-listing property-1">

                                                <div className="listing-img-wrapper">
                                                    <a href="single-property-2.html" tabindex="-1">
                                                        <img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" />
                                                    </a>
                                                    <div className="listing-like-top">
                                                        <i className="ti-heart"></i>
                                                    </div>
                                                    <div className="listing-rating">
                                                        <i className="ti-star filled"></i>
                                                        <i className="ti-star filled"></i>
                                                        <i className="ti-star filled"></i>
                                                        <i className="ti-star filled"></i>
                                                        <i className="ti-star"></i>
                                                    </div>
                                                    <span className="property-type">For Sale</span>
                                                </div>

                                                <div className="listing-content">

                                                    <div className="listing-detail-wrapper">
                                                        <div className="listing-short-detail">
                                                            <h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Luxury Home in Manhattan</a></h4>
                                                            <span className="listing-location"><i className="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
                                                        </div>
                                                        <div className="list-author">
                                                            <a href="#c" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                                                        </div>
                                                    </div>

                                                    <div className="listing-features-info">
                                                        <ul>
                                                            <li><strong>Bed:</strong>3</li>
                                                            <li><strong>Bath:</strong>2</li>
                                                            <li><strong>Sqft:</strong>2,400</li>
                                                        </ul>
                                                    </div>

                                                    <div className="listing-footer-wrapper">
                                                        <div className="listing-price">
                                                            <h4 className="list-pr">$182,880</h4>
                                                        </div>
                                                        <div className="listing-detail-btn">
                                                            <a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div><div className="single-items slick-slide" tabindex="-1" aria-describedby="slick-slide00" style={{ width: "290px" }} data-slick-index="0" aria-hidden="true">
                                                <div className="property-listing property-1">

                                                    <div className="listing-img-wrapper">
                                                        <a href="single-property-2.html" tabindex="-1">
                                                            <img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" />
                                                        </a>
                                                        <div className="listing-like-top">
                                                            <i className="ti-heart"></i>
                                                        </div>
                                                        <div className="listing-rating">
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star"></i>
                                                        </div>
                                                        <span className="property-type">For Sale</span>
                                                    </div>

                                                    <div className="listing-content">

                                                        <div className="listing-detail-wrapper">
                                                            <div className="listing-short-detail">
                                                                <h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Resort Valley Ocs</a></h4>
                                                                <span className="listing-location"><i className="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
                                                            </div>
                                                            <div className="list-author">
                                                                <a href="#c" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                                                            </div>
                                                        </div>

                                                        <div className="listing-features-info">
                                                            <ul>
                                                                <li><strong>Bed:</strong>2</li>
                                                                <li><strong>Bath:</strong>1</li>
                                                                <li><strong>Sqft:</strong>3,700</li>
                                                            </ul>
                                                        </div>

                                                        <div className="listing-footer-wrapper">
                                                            <div className="listing-price">
                                                                <h4 className="list-pr">$632,580</h4>
                                                            </div>
                                                            <div className="listing-detail-btn">
                                                                <a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div><div className="single-items slick-slide slick-current slick-active" tabindex="-1" aria-describedby="slick-slide01" style={{ width: "290px" }} data-slick-index="1" aria-hidden="false">
                                                <div className="property-listing property-1">

                                                    <div className="listing-img-wrapper">
                                                        <a href="single-property-2.html" tabindex="0">
                                                            <img src="assets/img/p-2.jpg" className="img-fluid mx-auto" alt="" />
                                                        </a>
                                                        <div className="listing-like-top">
                                                            <i className="ti-heart"></i>
                                                        </div>
                                                        <div className="listing-rating">
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star"></i>
                                                        </div>
                                                        <span className="property-type">For Rent</span>
                                                    </div>

                                                    <div className="listing-content">

                                                        <div className="listing-detail-wrapper">
                                                            <div className="listing-short-detail">
                                                                <h4 className="listing-name"><a href="single-property-2.html" tabindex="0">New Clue Apartment</a></h4>
                                                                <span className="listing-location"><i className="ti-location-pin"></i>127, Quice Market, New York</span>
                                                            </div>
                                                            <div className="list-author">
                                                                <a href="#c" tabindex="0"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                                                            </div>
                                                        </div>

                                                        <div className="listing-features-info">
                                                            <ul>
                                                                <li><strong>Bed:</strong>2</li>
                                                                <li><strong>Bath:</strong>2</li>
                                                                <li><strong>Sqft:</strong>2,900</li>
                                                            </ul>
                                                        </div>

                                                        <div className="listing-footer-wrapper">
                                                            <div className="listing-price">
                                                                <h4 className="list-pr">$3,570</h4>
                                                            </div>
                                                            <div className="listing-detail-btn">
                                                                <a href="single-property-2.html" className="more-btn" tabindex="0">More Info</a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div><div className="single-items slick-slide" tabindex="-1" aria-describedby="slick-slide02" style={{ width: "290px" }} data-slick-index="2" aria-hidden="true">
                                                <div className="property-listing property-1">

                                                    <div className="listing-img-wrapper">
                                                        <a href="single-property-2.html" tabindex="-1">
                                                            <img src="assets/img/p-3.jpg" className="img-fluid mx-auto" alt="" />
                                                        </a>
                                                        <div className="listing-like-top">
                                                            <i className="ti-heart"></i>
                                                        </div>
                                                        <div className="listing-rating">
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star"></i>
                                                        </div>
                                                        <span className="property-type">For Sale</span>
                                                    </div>

                                                    <div className="listing-content">

                                                        <div className="listing-detail-wrapper">
                                                            <div className="listing-short-detail">
                                                                <h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Luxury Home in Manhattan</a></h4>
                                                                <span className="listing-location"><i className="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
                                                            </div>
                                                            <div className="list-author">
                                                                <a href="#c" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                                                            </div>
                                                        </div>

                                                        <div className="listing-features-info">
                                                            <ul>
                                                                <li><strong>Bed:</strong>3</li>
                                                                <li><strong>Bath:</strong>2</li>
                                                                <li><strong>Sqft:</strong>2,400</li>
                                                            </ul>
                                                        </div>

                                                        <div className="listing-footer-wrapper">
                                                            <div className="listing-price">
                                                                <h4 className="list-pr">$182,880</h4>
                                                            </div>
                                                            <div className="listing-detail-btn">
                                                                <a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div><div className="single-items slick-slide slick-cloned" tabindex="-1" aria-describedby="slick-slide00" style={{ width: "290px" }} data-slick-index="3" aria-hidden="true">
                                                <div className="property-listing property-1">

                                                    <div className="listing-img-wrapper">
                                                        <a href="single-property-2.html" tabindex="-1">
                                                            <img src="assets/img/p-1.jpg" className="img-fluid mx-auto" alt="" />
                                                        </a>
                                                        <div className="listing-like-top">
                                                            <i className="ti-heart"></i>
                                                        </div>
                                                        <div className="listing-rating">
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star filled"></i>
                                                            <i className="ti-star"></i>
                                                        </div>
                                                        <span className="property-type">For Sale</span>
                                                    </div>

                                                    <div className="listing-content">

                                                        <div className="listing-detail-wrapper">
                                                            <div className="listing-short-detail">
                                                                <h4 className="listing-name"><a href="single-property-2.html" tabindex="-1">Resort Valley Ocs</a></h4>
                                                                <span className="listing-location"><i className="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
                                                            </div>
                                                            <div className="list-author">
                                                                <a href="#c" tabindex="-1"><img src="assets/img/add-user.png" className="img-fluid img-circle avater-30" alt="" /></a>
                                                            </div>
                                                        </div>

                                                        <div className="listing-features-info">
                                                            <ul>
                                                                <li><strong>Bed:</strong>2</li>
                                                                <li><strong>Bath:</strong>1</li>
                                                                <li><strong>Sqft:</strong>3,700</li>
                                                            </ul>
                                                        </div>

                                                        <div className="listing-footer-wrapper">
                                                            <div className="listing-price">
                                                                <h4 className="list-pr">$632,580</h4>
                                                            </div>
                                                            <div className="listing-detail-btn">
                                                                <a href="single-property-2.html" className="more-btn" tabindex="-1">More Info</a>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div></div></div><button type="button" data-role="none" className="slick-next slick-arrow" aria-label="Next" style={{ display: "block" }}>Next</button></div>

                                </div>

                            </div>
                        </div>





                    </div>
                </div>
            </section>
        )
    }
}

