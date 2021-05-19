import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AgentListingCard from '../../components/AgentListingCard'
import { getAgentsProperties } from '../../redux/actions/agent.actions';
import HorizontalCard from '../../components/HorizontalProductCard';

export const AgentListings = ({
    getProperties,
    agent,
    auth
}) => {

    useEffect(() => {
        getProperties(auth.agentData.id);
    }, [])

    return (
        <div className='bg-white'>
            {/* <div className="form-submit">
                <h4>My Property</h4>
            </div> */}
            {/* <table className="property-table-wrap responsive-table bg-white">
                <tbody>
                    <tr>
                        <th><i className="fa fa-file-text"></i> Property</th>
                        <th className="expire-date"><i className="fa fa-calendar"></i> Views</th>
                        <th></th>
                    </tr>
                    
                </tbody>
            </table> */}
            <div className="col-lg-12 col-md-12">
                <div className="filter-fl">
                    <h4>Total Property: <span className="theme-cl">{agent.agentProperties.length}</span></h4>
                    <div className="btn-group custom-drop">
                        <button type="button" className="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Short By<i className="ti-angle-down"></i>
                        </button>
                        <div className="dropdown-menu pull-right animated flipInX">
                            <a href="#c">Latest</a>
                            <a href="#c">Most View</a>
                            <a href="#c">Most Popular</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row m-3 pb-5' style={{ justifyContent: 'center' }}>
                {
                    agent.agentProperties.length === 0 ?
                        <label className='h4 text-center m-5'>No Property Yet</label> : <>
                            {
                                agent.agentProperties.map((val, i) => {
                                    // return <AgentListingCard
                                    //     key={i}
                                    //     data={val}
                                    // />
                                    return <HorizontalCard val={val} key={i} />
                                })
                            }</>
                }
            </div>



        </div>
    )
}

const mapStateToProps = (state) => ({
    agent: state.agent,
    auth: state.auth
})

const mapDispatchToProps = {
    getProperties: getAgentsProperties
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentListings)
