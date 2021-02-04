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
        // console.log(auth)
    },[])

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
            <div class="col-lg-12 col-md-12">
                <div class="filter-fl">
                    <h4>Total Property: <span class="theme-cl">{agent.agentProperties.length}</span></h4>
                    <div class="btn-group custom-drop">
                        <button type="button" class="btn btn-order-by-filt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Short By<i class="ti-angle-down"></i>
                        </button>
                        <div class="dropdown-menu pull-right animated flipInX">
                            <a href="#c">Latest</a>
                            <a href="#c">Most View</a>
                            <a href="#c">Most Popular</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div className='row m-3'>
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
