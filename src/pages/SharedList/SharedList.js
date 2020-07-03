import React from 'react';
import Axios from 'axios';
import { notification } from 'antd';
// import ProductCard from '../../components/ProductCard';
const ProductCard = React.lazy(() => import('../../components/ProductCard'));

export default class SharedList extends React.Component{
    state = {
        sharedList: []
    };

    getSharedApartment() {
        Axios.get(`${process.env.REACT_APP_BASE_URL}/shared`)
            .then(res => {
                console.log('res --', res);
                if (res.status === 200) {
                    this.setState({
                        sharedList: res.data.shared
                    })
                } else {
                    notification.error({ message: 'Error Loading Shared' })
                }
            })
            .catch(err => {
                console.log(err)
                notification.error({ message: 'Error Loading Shared' })
            })
    }

    componentDidMount() {
        this.getSharedApartment();
    }
    render(){
        return (
            <div className="row m-2">
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
        )
    }
}

