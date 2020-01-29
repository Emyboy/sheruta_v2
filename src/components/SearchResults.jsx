import React from 'react'
import HorizontalProductCard from './HorizontalProductCard'
import DetailRight from '../pages/Details/DetailRight';
import SearchBox from './SearchBox';

export default (props) => {
    console.log(props);
    const { area, bedrooms, bathrooms, price, type } = props.match.params;
    return (
        <div>
            <div style={{ height: "8vh", minHeight: '700px', backgroundImage: 'url(https://adorable-home.com/wp-content/uploads/2016/06/Modern-dark-interiors-5.jpg)' }} className="bg-dark image-cover hero-banner p-0 mb-5">
                <SearchBox />
            </div>
            <section>
                <div className="container mt-5">
                    <div className="row">

                        <div className="col-lg-12 col-md-12">
                            <div className="filter-fl">
                                <h3>Found <span className="theme-cl">207</span> Results</h3>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-12 col-sm-12 list-layout">
                            <div className="row">

                                <div className="container">
                                    <h4 class="col-lg-12 col-md-12 post-title">No Results Fount</h4>
                                    <div className="error-wrap mb-5">
                                        <div className="container">
                                            <div className="row justify-content-center">
                                                <div class="text-center">

                                                    <p>Didn't find what you are looking for ?</p>
                                                    <a class="btn btn-theme" href="index.html">Send Request</a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <HorizontalProductCard />
                                <HorizontalProductCard />
                                <HorizontalProductCard />
                                <HorizontalProductCard />
                                <HorizontalProductCard />
                                <HorizontalProductCard />
                            </div>
                        </div>
                        <DetailRight val={type} />
                    </div>
                </div>
            </section>
        </div>
    )
}
