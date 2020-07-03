import React, { Component } from 'react'
import Axios from 'axios';
import { notification } from 'antd';
// import ProductCard from '../../components/ProductCard';
const ProductCard = React.lazy(() => import('../../components/ProductCard'));


export default class ApartmentList extends Component {
    state = {
        apartmentList: []
    };

    getApartments() {
        Axios.get(`${process.env.REACT_APP_BASE_URL}/hostels`)
            .then(res => {
                if (res.data.message === 'success') {
                    this.setState({
                        apartmentList: res.data.apartment
                    })
                } else {
                    notification.error({ message: 'Error Loding Apartments' })
                }
            })
            .catch(err => {
                notification.error({ message: 'Error Loding Apartments' })
            })
    }

    componentWillMount() {
        this.getApartments()
    }
    
    render() {
        return (
            <div className='ml-2 row'>
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
        )
    }
}
