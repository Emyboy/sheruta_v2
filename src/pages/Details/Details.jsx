import React, { Component, useEffect, useState } from 'react'
import DetailHeading from './DetailHeading'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight';
import Pageloader from '../../components/PageLoader';
import Axios from 'axios'
import AppLoading from '../../components/PageLoader'

import { connect } from 'react-redux';
import { getApartmentById } from '../../redux/actions/apartment.actions';
import { getSharedById } from '../../redux/actions/shared.actions';
import { MetaTags } from 'react-meta-tags';

export default props => {
    const [data, setData] = useState(null);
    const [state, setState] = useState({
        loading: true
    })
    const { type, id } = props.match.params;

    const getApartmentData = () => {
        setState({ ...state, loading: true })
        Axios(`${process.env.REACT_APP_BASE_URL}/${type === 'apartment' ? 'hostels' : type}/${id}`)
            .then(res => {
                setState({ ...state, loading: false })
                switch (type) {
                    case 'apartment':
                        setData(res.data.hostel[0])
                        break;
                    case 'shared':
                        setData(res.data.shared[0])
                        break;
                    default:
                        break;
                }
            })
            .catch(err => {
                setState({ ...state, loading: false })
            })
    }

    useEffect(() => {
        getApartmentData();
    }, [])

    if (!data) {
        return <AppLoading />
    } else {
        return (
            // <div>
            //     <h1>hi</h1>
            //     <h1>{data.area}</h1>
            // </div>
            <section>
                <MetaTags>
                    <title>{`Sheruta - ${data.title}`}</title>
                    <meta name="description" content={data.bio} />
                    <meta property="og:title" content={`Sheruta - ${data.title}`} />
                    <meta name="keyword" content={`Sheruta - ${data.title}`} />
                </MetaTags>
                <div className='jumbotron'>
                    <h1 className='h2'>{data.title}</h1>
                </div>
                <DetailHeading val={data} />
                <div className="gray">
                    <div className="container">
                        <div className="row">
                            <DetailLeft val={data} />
                            <DetailRight val={data} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

// class Details extends Component {
//     componentDidMount() {
//         const { type, id } = this.props.match.params;
//         switch (type) {
//             case "apartment":
//                 this.props.getApartmentById(id)
//                 break;
//             case "shared":
//                 this.props.getSharedById(id);
//                 break;
//             default:
//                 break;
//         }
//     }
//     render() {
//         const { type } = this.props.match.params;
//         const { sharedLoading, shared } = this.props.shared;
//         const { getApartmentLoading, apartments } = this.props.apartment;
//         if (type === 'apartment') {
//             if (this.props.view.detailLoading) {
//                 return (<Pageloader />)
//             } else {
//                 return (
//                     <section>
//                         <MetaTags>
//                             <title>{`Sheruta - ${type === "apartment" ? apartments.title : shared.title}`}</title>
//                             <meta name="description" content={type === "apartment" ? apartments.bio : shared.bio} />
//                             <meta property="og:title" content={`Sheruta - ${type === "apartment" ? apartments.title : shared.title}`} />
//                             <meta name="keyword" content={`Sheruta - ${type === "apartment" ? apartments.title : shared.title}`} />
//                         </MetaTags>
//                         <DetailHeading val={data} />
//                         <div className="gray">
//                             <div className="container">
//                                 <div className="row">
//                                     <DetailLeft val={data} />
//                                     <DetailRight val={data} />
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 )
//             }
//         }else {
//             if (this.props.view.detailLoading) {
//                 return (<Pageloader />)
//             } else {
//                 return (
//                     <section>
//                         <DetailHeading val={data} />
//                         <div className="gray">
//                             <div className="container">
//                                 <div className="row">
//                                     <DetailLeft val={data} />
//                                     <DetailRight val={data} />
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 )
//             }
//         }

//     }
// }

// const mapStateToProps = state => ({
//     shared: state.shared,
//     apartment: state.apartment,
//     view: state.view
// })

// const mapActionsToProps = {
//     getApartmentById,
//     getSharedById
// }

// export default connect(mapStateToProps, mapActionsToProps)(Details);
