import React from 'react'
import BlogDetailLeft from './BlogDetailLeft'
import BlogDetailRight from './BlogDetailRight'
import { connect } from 'react-redux'

import { getBlogByName } from '../../redux/actions/blog.actions';
import PageLoader from '../../components/PageLoader';

class BlogDetails extends React.Component{
    componentDidMount() {
        this.props.getBlogByName(this.props.match.params.title)
    }
    
    render(){
        const { blog } = this.props.blog;
        if(this.props.blog.blogLoading){
            return <PageLoader />
        }else {
            return (
                <div>
                    <div class="page-title">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">

                                    <h2 class="ipt-title">Blog Detail</h2>
                                    <span class="ipn-subtitle">See Our Latest Articles &amp; News</span>

                                </div>
                            </div>
                        </div>
                    </div>

                    <section>
                        <div className="container">
                            <div className="row">
                                <BlogDetailLeft val={blog} />
                                <BlogDetailRight />
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

const mapActionToProps = {
    getBlogByName
}

export default connect(mapStateToProps, mapActionToProps)(BlogDetails)
