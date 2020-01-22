import React from 'react'

export default function BlogCard({title}) {
    return (
        <div class="col-lg-4 col-md-6">
            <div class="blog-wrap-grid">

                <div class="blog-thumb">
                    <a href={`/blog/${title}`}><img src="assets/img/p-11.jpg" class="img-fluid" alt=""/></a>
								</div>

                    <div class="blog-info">
                        <span class="post-date"><i class="ti-calendar"></i>30 july 2018</span>
                    </div>

                    <div class="blog-body">
                        <h4 class="bl-title"><a href={`/blog/${title}`}>Why people choose listio for own properties</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        <a href="http://themezhub.com/" class="bl-continue">Continue</a>
                    </div>

                </div>
            </div>
    )
}
