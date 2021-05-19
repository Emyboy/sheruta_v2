import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-activity';
import axios from 'axios';
import HorizontalProductCard from './HorizontalProductCard';
import { notification } from 'antd';

const SearchResults = (props) => {
    const [state, setState] = useState({
        loading: true,
        results: []
    })
    const { category, service, location } = props.match.params;

    const getSearchResults = () => {
        axios(process.env.REACT_APP_BASE_URL + `/properties/search/${category}/${location}/${service}`)
            .then(res => {
                setState({
                    loading: false,
                    results: res.data
                })
            })
            .catch(err => {
                notification.error({ message: 'Application Error' })
            })
    }

    useEffect(() => {
        getSearchResults();
    }, []);

    return (
        <div>
            <section>
                {
                    state.results.map((val, i) => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 list-layout">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="filter-fl">
                                                    <h4>{val.heading}: <span className="theme-cl">{val.length}</span></h4>
                                                    <div className="btn-group custom-drop bg-white">
                                                        <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span>Short By</span><i className="ti-angle-down"></i>
                                                        </button>
                                                        <div className="dropdown-menu pull-right animated flipInX">
                                                            <a href="#">Latest</a>
                                                            <a href="#">Most View</a>
                                                            <a href="#">Most Popular</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {
                                                [...val.data].map(data => {
                                                    return <HorizontalProductCard val={data} key={i} />
                                                })
                                            }




                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </section>

        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
