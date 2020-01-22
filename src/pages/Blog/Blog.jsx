import React, { Component } from 'react'
import BlogCard from '../../components/BlogCard'

export default class Blog extends Component {
    render() {
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
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}
