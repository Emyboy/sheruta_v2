import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AgentCard from '../../components/AgentCard'
import SectionHeading from '../../components/SectionHeading';
import AppLoading from '../../components/PageLoader';
import { getAllAgents } from '../../redux/actions/agent.actions';

const AgentList = (props) => {
    const { agent } = props;
    const { loading, agentList } = agent;

    useEffect(() => {
        props.getAgents();
    }, []);


    // if (loading) {
    //     return <AppLoading />
    // } else {
        return (
            <div className='container mt-5 mb-5'>
                <SectionHeading
                    heading='Agent List'

                />
                <div className='row'>
                    {
                        agentList.map((val, i) => {
                            return <AgentCard 
                                key={i}
                                val={val}
                            />
                        })
                    }
                </div>
            </div>
        )
    // }
}

const mapStateToProps = (state) => ({
    agent: state.agent
})

const mapDispatchToProps = {
    getAgents: getAllAgents
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentList)
