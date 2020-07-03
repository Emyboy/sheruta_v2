import React, { Component } from 'react'
// import { getRecentApartments } from '../redux/actions/apartment.actions';
import Axios from "axios";
import { notification } from 'antd';
import { Link } from 'react-router-dom';
// import ProductCard from './ProductCard';
const ProductCard = React.lazy(() => import('./ProductCard'));

class RecentApartments extends Component {
    state = {
        apartmentList: []
    };

    getApartments(){
        Axios.get(`${process.env.REACT_APP_BASE_URL}/hostels/limit/${6}`)
            .then(res => {
                if(res.data.message === 'success'){
                    this.setState({
                        apartmentList: res.data.apartment
                    })
                }else {
                    notification.error({message: 'Error Loding Apartments'})
                }
            })
            .catch(err => {
                notification.error({message: 'Error Loding Apartments'})
            })
    }

    componentWillMount() {
        this.getApartments()
    }

    render() {
        const { getApartmentLoading } = this.props.apartment;
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
                            this.state.apartmentList.map((val, i) => {
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
                                <Link to="/apartments" className="btn btn-theme-2">Browse More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

// const mapStateToProps = state =>({
//     apartment: state.apartment
// })
// const mapActionsToProps = {
//     getRecentApartments
// }

export default RecentApartments;
