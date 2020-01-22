import React, { Component } from 'react'
import BlogCard from '../../components/BlogCard'
import { connect } from 'react-redux'
import PageLoader from '../../components/PageLoader';
import { getAllBlog } from '../../redux/actions/blog.actions';

class Blog extends Component {
    componentWillMount() {
        console.log(this.props);
        this.props.getAllBlog();
    }
    
    render() {
        if(this.props.blog.blogLoading){
            return <PageLoader />
        }else {
            return (
                <div>
                    <div class="page-title">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">

                                    <h2 class="ipt-title">Our Articles</h2>
                                    <span class="ipn-subtitle">See Our Latest Articles &amp; News</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div class="col text-center">
                                    <div class="sec-heading center">
                                        <h2>Latest News</h2>
                                        <p>We post regulary most powerful articles for help and support.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    {
                                        this.props.blog.blog.map((val, i) => {
                                            return (
                                                <BlogCard val={val} key={i} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    blog: state.blog
})

const mapActionsToProps = {
    getAllBlog
}

export default connect(mapStateToProps, mapActionsToProps)(Blog);
