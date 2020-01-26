import React, { Component } from 'react'
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { getRecentSharedApartments } from '../redux/actions/shared.actions';
import loadingGif from '../img/loading.gif';
import { Link } from 'react-router-dom';

class RecentShared extends Component {
    componentWillMount() {
        this.props.getRecentApartments(6);
    }
    render() {
        const { sharedLoading, shared } = this.props.shared;
        return (
            <section>
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="sec-heading center">
                                <h2>New &amp; Shared Apartments</h2>
                                <p>Find new &amp; featured shared apartments for you.</p>
                            </div>
                        </div>
                    </div>

                    <div className={sharedLoading ? "center pt-5 pb-5" : "row pt-5"}>
                        {
                            
                            sharedLoading && shared.length > 0? <div className="center" style={{ textAlign: 'center' }}><img src={loadingGif} alt='loading-img' /></div> :
                                shared.map((val, i) => {
                                    return (
                                        <ProductCard
                                            key={i}
                                            val={val}
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

const mapStateToProps = state => ({
    shared: state.shared
})
const mapActionsToProps = {
    getRecentApartments: getRecentSharedApartments
}

export default connect(mapStateToProps, mapActionsToProps)(RecentShared);
