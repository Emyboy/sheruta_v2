import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import EachRequest from '../Request/EachRequest'

export const RequestList = (props) => {

    const [state, setState] = React.useState({
        list: []
    })

    React.useEffect(() => {
        axios(process.env.REACT_APP_BASE_URL + '/property-requests/recent/6')
            .then(res => {
                setState({ ...state, list: res.data })
            })
            .catch(err => {
            })
    }, []);

    return (
        <section>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="sec-heading center">
                            <h3 className='h2'>Recent Requests</h3>
                            <p>This are the most recent request we have.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="format-standard container-fluid">

                <div className="comment-area">
                    <div className="all-comments">
                        <div className="comment-list container-fluid ">
                            <div className='row justify-content-center'>
                                {
                                    state.list.map((val, i) => {
                                        return <EachRequest key={i} val={val} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="text-center mt-4">
                            <Link to='/requests/all' className="btn btn-theme-2">View All Requests</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList)
