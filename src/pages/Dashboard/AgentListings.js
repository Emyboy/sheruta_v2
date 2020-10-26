import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AgentListingCard from '../../components/AgentListingCard'
import { getAgentsProperties } from '../../redux/actions/agent.actions';

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
        <>
            {/* <div className="form-submit">
                <h4>My Property</h4>
            </div> */}
            <table className="property-table-wrap responsive-table bg-white">
                <tbody>
                    <tr>
                        <th><i className="fa fa-file-text"></i> Property</th>
                        <th className="expire-date"><i className="fa fa-calendar"></i> Views</th>
                        <th></th>
                    </tr>
                    {
                       agent.agentProperties.length === 0 ?
                            <label className='h4 text-center m-5'>No Property Yet</label>: <>
                                {
                                    agent.agentProperties.map((val, i) => {
                                        return <AgentListingCard
                                            key={i}
                                            data={val}
                                        />
                                    })
                                }</>
                    }
                    
                </tbody>
            </table>



        </>
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
