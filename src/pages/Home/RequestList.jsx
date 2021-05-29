import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router'
import EachRequest from '../Request/EachRequest'

export const RequestList = (props) => {

    const [state, setState] = React.useState({
        list: []
    })

    React.useEffect(() => {
        axios(process.env.REACT_APP_BASE_URL + '/property-requests')
            .then(res => {
                setState({ ...state, list: res.data })
            })
            .catch(err => {
            })
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="sec-heading center">
                            <h3>Recent Requests</h3>
                            {/* <p>Find new & featured property for you.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="format-standard">

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

            </div>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RequestList)
