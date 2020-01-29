import React, { useEffect } from 'react'
import HorizontalProductCard from './HorizontalProductCard'
import DetailRight from '../pages/Details/DetailRight';
import SearchBox from './SearchBox';
import PageLoader from '../components/PageLoader';
import { connect } from 'react-redux';
import { search } from '../redux/actions/user.action';



// export default connect(mapStateToProps, mapActionToPros)((props) => {
//     console.log(props);
//     const { area, bedrooms, sittingrooms, price, type } = props.match.params;
//     const { search, user } = props;
//     const { searchLoading, searchResults } = user;
//     useEffect(() => {
//         search({ area, bedrooms, sittingrooms, price, type })
//     }, [area, bedrooms, price, search, sittingrooms, type]);

// });

class searchResults extends React.Component {
    componentDidMount() {
        const { search } = this.props;
        const { area, bedrooms, sittingrooms, price, type } = this.props.match.params;
        search({ area, bedrooms, sittingrooms, price, type });
    }
    render() {
        const { searchLoading, searchResults } = this.props.user;
        const { type } = this.props.match.params;
        if (searchLoading) {
            return <PageLoader />
        } else {
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
                                        <h3>Found <span className="theme-cl">{searchResults.length}</span> Results</h3>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-12 col-sm-12 list-layout">
                                    <div className="row">
                                        {
                                            searchResults.length > 0 && !searchLoading ?
                                                searchResults.map((val, i) => {
                                                    return <HorizontalProductCard val={val} key={i} />
                                                }) :
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
                                        }
                                    </div>
                                </div>
                                <DetailRight val={type} />
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

const mapActionToPros = {
    search
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, mapActionToPros)(searchResults);
