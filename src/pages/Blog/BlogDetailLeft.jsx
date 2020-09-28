import React from 'react';

// export default function BlogDetailLeft({val}) {
//     return (

//     )
// }

export default class BlogDetailLeft extends React.Component {
    componentWillReceiveProps(newProps) {
        // document.getElementById('blog-body').innerHTML += val.body
        console.log('new Props .......', newProps);
    }
    componentDidMount() {
        const { val } = this.props;
        document.getElementById("blog-body").innerHTML += val.body;
    }
    render() {
        const { val } = this.props;
        return (
            <article className='col-lg-8 col-md-12 col-sm-12 col-12'>

                <div className="wrapper">
                    
                    <div className="content"> Some Content </div>
                </div>


                <div className="blog-details single-post-item format-standard">
                    <div className="post-details">

                        <div className="post-featured-img">
                            <img className="img-fluid" src={val.imageUrl} alt="" />
                        </div>

                        <div className="post-top-meta">
                            <ul className="meta-comment-tag">
                                {/* <li><a href="#c"><span className="icons"><i className="ti-user"></i></span>by Rosalina Doe</a></li>
                                <li><a href="#c"><span className="icons"><i className="ti-comment-alt"></i></span>45 Comments</a></li> */}
                            </ul>
                        </div>
                        <h1 className="post-title">{val.title}</h1>
                        <div id='blog-body'>
                            {/* {
                                document.getElementById('blog-body').innerHTML = val.body
                            } */}

                        </div>
                        {/*                         
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
                        </div> */}

                    </div>
                </div>



            </article>
        )
    }
}
