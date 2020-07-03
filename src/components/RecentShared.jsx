import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import { getRecentSharedApartments } from '../redux/actions/shared.actions';
// import loadingGif from '../img/loading.gif';
import Axios from "axios";
import { notification } from 'antd';
import { Link } from 'react-router-dom';
// import ProductCard from './ProductCard';
const ProductCard = React.lazy(() => import('./ProductCard'));

class RecentShared extends Component {
    state = {
        sharedList: []
    };

    getSharedApartment(){
        Axios.get(`${process.env.REACT_APP_BASE_URL}/shared`)
            .then(res => {
                if(res.status === 200){
                    this.setState({
                        sharedList: res.data.shared
                    })
                }else {
                    notification.error({message: 'Error Loading Shared'})
                }
            })
            .catch(err => {
                notification.error({message: 'Error Loading Shared'})
            })
    }

    componentDidMount() {
        this.getSharedApartment();
    }

    render() {
        const { sharedLoading } = this.props.shared;
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
                            
                            this.state.sharedList.map((val, i) => {
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
                                <Link to="/shared" className="btn btn-theme-2">Browse More</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}

// const mapStateToProps = state => ({
//     shared: state.shared
// })
// const mapActionsToProps = {
//     getRecentApartments: getRecentSharedApartments
// }

export default RecentShared;
