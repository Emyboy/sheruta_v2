import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export const Request = (props) => {
    localStorage.setItem('after_login', '/requests')
    return (
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
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Request)
