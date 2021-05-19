import React, { Component } from 'react'
import { connect } from 'react-redux'
import PageLoader from '../../components/PageLoader';
import { getAllBlog } from '../../redux/actions/blog.actions';
// import BlogCard from '../../components/BlogCard'
const BlogCard = React.lazy(() => import('../../components/BlogCard'));

class Blog extends Component {
    state = {
        blogList: []
    }
    componentWillMount() {
        this.props.getAllBlog();
    }f

    componentWillReceiveProps(nextProps) {
        this.setState({
            blogList: nextProps.blog.blog
        })
    }

    render() {
        if (this.props.blog.blogLoading) {
            return <PageLoader />
        } else {
            return (
                <div>
                    <div className="page-title">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">

                                    <h2 className="ipt-title">Our Articles</h2>
                                    <span className="ipn-subtitle">See Our Latest Articles &amp; News</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <div className="sec-heading center">
                                        <h2>Latest Blog Post</h2>
                                        <p>We post regulary most powerful articles for help and support.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    this.state.blogList.map((val, i) => {
                                        return (
                                            <BlogCard val={val} key={i} />
                                        )
                                    })
                                }
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
