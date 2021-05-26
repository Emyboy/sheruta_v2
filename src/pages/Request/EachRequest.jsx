import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Eachval = ({
    val
}) => {
    return (
        <div className='col-lg-4 col-md-6'>
            <article className="m-2 single-comment bg-dark  card shadow" style={{ borderRadius: '10px' }}>
                <Link className='text-theme' to={`/request/${val.uuid}/${val.users_permissions_user.id}`}>
                    <div className="comment-details p-2">
                        {
                            val.users_permissions_user ?
                                <div className="comment-meta row card-body pb-1 pt-1">
                                    <div className="comment-author">
                                        <img style={{ width: '50px', borderRadius: '50%' }} className='img-fluid mr-2' src={val.users_permissions_user.avatar_url} alt={val.users_permissions_user.first_name + " 's Avatar"} />
                                    </div>
                                    <div className="comment-left-meta">
                                        <h4 className="author-name text-white mb-1">{`${val.users_permissions_user.first_name}`}</h4>
                                        <div className="comment-date text-white">{new Date(val.created_at).toDateString()}</div>
                                    </div>
                                    {/* <div className="comment-reply">
                            <a href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</a>
                        </div> */}
                                </div> : null
                        }
                        <div className='d-flex justify-content-start mt-2 ml-5'>
                            {val.category ? <div className='badge badge-warning shadow'>{val.category.name}</div> : null}
                            {val.service ? <div className='badge badge-success shadow ml-2'>{val.service.name}</div> : null}
                        </div>
                        <hr className='mt-0' />
                        <div className="comment-text">
                            <p className='text-white mb-0'>{val.body.length > 90 ? val.body.slice(0, 90) + "..." : val.body}</p>
                        </div>
                    </div>
                </Link>
                <div className='card-footer d-flex justify-content-between'>
                    <a href={`tel:${val.users_permissions_user.phone_number}`}><i className='fa fa-phone text-theme'></i></a>
                    <Link className='text-theme' to={`/request/${val.uuid}/${val.users_permissions_user.id}`}>View More Details</Link>
                </div>
            </article>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Eachval)
