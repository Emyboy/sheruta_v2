import React, { Component } from 'react'
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { getRecentApartments } from '../redux/actions/apartment.actions';
import loadingGif from '../img/loading.gif';
import { Link } from 'react-router-dom';

class RecentApartments extends Component {
    componentWillMount() {
        this.props.getRecentApartments();
    }
    render() {
        const { getApartmentLoading, apartments } = this.props.apartment;
        return (
            <section>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="sec-heading center">
                                <h2>New &amp; featured Apartments</h2>
                                <p>Find new &amp; featured apartments for you.</p>
                            </div>
                        </div>
                    </div>

                    <div className={getApartmentLoading ? "center pt-5 pb-5" : "row pt-5"}>
                        {
                            getApartmentLoading && apartments.length > 0 ? <div className="center" style={{textAlign: 'center'}}><img src={loadingGif} alt='loading-img' /></div> :
                                apartments.map((val, i) => {
                                    return (
                                        <ProductCard
                                            key={i}
                                            id={val.id}
                                            price={val.price}
                                            type={val.type}
                                            area={val.area}
                                            bedrooms={val.bedrooms}
                                            toilets={val.toilets}
                                            imageurl1={val.imageurl1}
                                            status={val.status}
                                        />
                                    )
                                })
                        }

                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="text-center mt-4">
                                <Link to="/apartments" className="btn btn-theme-2">Browse More Apartments</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

const mapStateToProps = state =>({
    apartment: state.apartment
})
const mapActionsToProps = {
    getRecentApartments
}

export default connect(mapStateToProps,mapActionsToProps)(RecentApartments);
