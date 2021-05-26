import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import PageLoader from '../../components/PageLoader';

const RequestDetails = (props) => {
    const { user_id, uid } = props.match.params;
    console.log(user_id, uid);

    const [state, setState] = useState({
        loading: true
    })
    const [request, setRequest] = useState(null)

    const getRequestData = () => {
        setState({ ...state, loading: true })
        axios(process.env.REACT_APP_BASE_URL + "/property-requests/?uuid=" + uid)
            .then(res => {
                console.log(res)
                setRequest(res.data[0])
                setState({ ...state, loading: false })
            })
            .catch(err => {
                setState({ ...state, loading: false })
                console.log(err)
            })
    }

    useEffect(() => {
        getRequestData()
    }, [])

    if (state.loading) {
        return <PageLoader />
    } else
        return (
            <div>
                <div className='d-flex justify-content-center mt-5'>
                    <div className='col-lg-8 col-md-12 col-sm-12 col-12'>
                        <div className="pt-4 pl-3 pr-3 blog-details single-post-item format-standard shadow bg-dark" style={{ borderRadius: 10 }}>
                            <div className=''>
                                <a href={`tel:${request.users_permissions_user.phone_number}`}><i style={{ fontSize: '25px' }} className='fa fa-phone text-theme'></i></a>
                            </div>
                            <div className="posts-author">
                                {
                                    request.users_permissions_user ?
                                        <>
                                            <span className="img"><img className="img-fluid" src={request.users_permissions_user.avatar_url} alt="" /></span>
                                            <h6 className="pa-name text-white">{`${request.users_permissions_user.first_name} ${request.users_permissions_user.last_name}`}</h6>
                                        </> : null
                                }
                                <div className='d-flex justify-content-center border-0'>
                                    {request.category ? <div className='badge badge-warning shadow'>{request.category.name}</div> : null}
                                    {request.service ? <div className='badge badge-success shadow ml-2'>{request.service.name}</div> : null}
                                </div>
                                <hr />
                                <h2 className='text-white' style={{ fontSize: '20px' }}><b>{request.heading}</b></h2>
                                <p className="pa-text text-white" style={{ textAlign: 'start' }}>{request.body}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RequestDetails)
