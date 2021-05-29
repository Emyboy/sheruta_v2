import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MetaTags from 'react-meta-tags';

export const Request = (props) => {
    localStorage.setItem('after_login', '/requests')
    return (
        <>
            <MetaTags>
                <title>Requests | Sheruta NG</title>
                <meta name="description" content={"Make apartment requests so everyone can see it"} />
                <meta property="og:title" content={'Requests | Sheruta NG'} />
                <meta property="og:description" content={'Make apartment requests so everyone can see it'} />
            </MetaTags>
        <div className='container bg-white pt-5 pb-5'>
            <Link to='/requests/create'>
                <div className='border text-center rounded mt-3 agency agency-list'>
                    <div className='card-body'>
                        <h5>Create Request</h5>
                    </div>
                </div>
            </Link>
            <Link to='/requests/all'>
                <div className='border text-center rounded mt-3 agency agency-list'>
                    <div className='card-body'>
                        <h5>View All Requests</h5>
                    </div>
                </div>
            </Link>
        </div>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Request)
