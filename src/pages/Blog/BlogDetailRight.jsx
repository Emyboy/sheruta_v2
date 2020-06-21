import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRecentApartments } from '../../redux/actions/apartment.actions';
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({
    apartment: state.apartment
});

const mapActionsToProps = {
    getRecentApartments
}

export default connect(mapStateToProps, mapActionsToProps)((props) => {
    const { getRecentApartments, apartment } = props;
    useEffect(() => {
        getRecentApartments(5)
    }, []);
    return (
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">

            {/* <div className="single-widgets widget_search">
                <h4 className="title">Search</h4>
                <form action="#" className="sidebar-search-form">
                    <input type="search" name="search" placeholder="Search.." />
                    <button type="submit"><i className="ti-search"></i></button>
                </form>
            </div> */}

            {/* <div className="single-widgets widget_category">
                    <h4 className="title">Categories</h4>
                    <ul>
                        <li><a href="#c">Lifestyle <span>09</span></a></li>
                        <li><a href="#c">Travel <span>12</span></a></li>
                        <li><a href="#c">Fashion <span>19</span></a>
                        </li><li><a href="#c">Branding <span>17</span></a></li>
                        <li><a href="#c">Music <span>10</span></a></li>
                    </ul>
                </div> */}

            <div className="single-widgets widget_thumb_post">
                <h4 className="title">Trending Apartments</h4>
                <ul>
                    {
                        apartment.apartments.map((val, i) => {
                            return (
                                <li key={i}>
                                    <span className="left">
                                        <img src={val.imageurl1} alt="" className="" />
                                    </span>
                                    <span className="right">
                                        <Link className='feed-title' to={`/${String(val.type).toLowerCase()}/${val.id}`} tabindex="-1">{val.area}</Link>
                                        <span className="post-date"><i className="ti-calendar"></i>{val.price}</span>
                                    </span>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            {/* <div className="single-widgets widget_tags">
                <h4 className="title">Tags Cloud</h4>
                <ul>
                    <li><a href="#c">Lifestyle</a></li>
                    <li><a href="#c">Travel</a></li>
                    <li><a href="#c">Fashion</a></li>
                    <li><a href="#c">Branding</a></li>
                    <li><a href="#c">Music</a></li>
                </ul>
            </div> */}

        </div>
    )
})
