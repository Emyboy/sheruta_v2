import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard(props) {
    const { title, imageUrl, readmore, date } = props.val;
    return (
        <div className="col-lg-4 col-md-6">
            <div className="blog-wrap-grid">

                <div className="blog-thumb">
                    <Link to={`/blog/${title}`}>
                        <img src={imageUrl} className="img-fluid" alt=""/>
                    </Link>
                </div>

                    <div className="blog-info">
                        <span className="post-date"><i className="ti-calendar"></i>{date}</span>
                    </div>

                    <div className="blog-body">
                        
                        <h4 className="bl-title"><Link to={`/blog/${title}`}>{title}</Link></h4>
                        <p>{readmore}</p>
                        <Link to={`/blog/${title}`} className="bl-continue">Continue</Link>
                    </div>

                </div>
            </div>
    )
}
