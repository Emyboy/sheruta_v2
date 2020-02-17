import React from 'react'

export default function BlogDetailLeft({val}) {
    document.getElementById('blog-body').innerHTML = val.body
    return (
        <div className='col-lg-8 col-md-12 col-sm-12 col-12'>


            <div className="blog-details single-post-item format-standard">
                <div className="post-details">

                    <div className="post-featured-img">
                        <img className="img-fluid" src={val.imageUrl} alt=""/>
									</div>

                        <div className="post-top-meta">
                            <ul className="meta-comment-tag">
                                <li><a href="#c"><span className="icons"><i className="ti-user"></i></span>by Rosalina Doe</a></li>
                                <li><a href="#c"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</a></li>
                            </ul>
                        </div>
                        <h2 className="post-title">{val.title}</h2>
                        <div id='blog-body'>
                            {/* {
                                document.getElementById('blog-body').innerHTML = val.body
                            } */}

                        </div>
                                        <div className="post-bottom-meta">
                                            <div className="post-tags">
                                                <h4 className="pbm-title">Related Tags</h4>
                                                <ul className="list">
                                                    <li><a href="#c">organic</a></li>
                                                    <li><a href="#c">Foods</a></li>
                                                    <li><a href="#c">tasty</a></li>
                                                </ul>
                                            </div>
                                            <div className="post-share">
                                                <h4 className="pbm-title">Social Share</h4>
                                                <ul className="list">
                                                    <li><a href="#c"><i className="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#c"><i className="fab fa-twitter"></i></a></li>
                                                    <li><a href="#c"><i className="fab fa-linkedin-in"></i></a></li>
                                                    <li><a href="#c"><i className="fab fa-vk"></i></a></li>
                                                    <li><a href="#c"><i className="fab fa-tumblr"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="single-post-pagination">
                                            <div className="prev-post">
                                                <a href="#c">
                                                    <div className="title-with-link">
                                                        <span className="intro">Prev Post</span>
                                                        <h3 className="title">Tips on Minimalist</h3>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="post-pagination-center-grid">
                                                <a href="#c"><i className="ti-layout-grid3"></i></a>
                                            </div>
                                            <div className="next-post">
                                                <a href="#c">
                                                    <div className="title-with-link">
                                                        <span className="intro">Next Post</span>
                                                        <h3 className="title">Less Is More</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
									
								</div>
							</div>


            
        </div>
    )
}
