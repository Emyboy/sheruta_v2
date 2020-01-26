import React from 'react';

export default function BlogCard(props) {
    const { title, imageUrl, readmore, date } = props.val;
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog-wrap-grid">

                <div className="blog-thumb">
                    <a href={`/blog/${title}`}>
                        <img src={imageUrl} className="img-fluid" alt=""/>
                    </a>
                </div>

                    <div className="blog-info">
                        <span className="post-date"><i className="ti-calendar"></i>{date}</span>
                    </div>

                    <div className="blog-body">
                        
                        <h4 className="bl-title"><a href={`/blog/${title}`}>{title}</a></h4>
                        <p>{readmore}</p>
                        <a href={`/blog/${title}`} className="bl-continue">Continue</a>
                    </div>

                </div>
            </div>
    )
}
