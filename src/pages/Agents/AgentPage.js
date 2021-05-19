import { notification } from 'antd';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { Tab, Tabs } from 'react-bootstrap';
import { Tabs } from 'antd';

import AgentDetailCard from '../../components/AgentDetailCard';
import PageLoading from '../../components/PageLoader';
import PageNotFound from '../../components/PageNotFound';
const { TabPane } = Tabs;

export default props => {

    const [agentData, setAgentData] = useState(null);
    const [status, setStatus] = useState('loading');
    
    const getAgentData = () => {
        const companyName = props.match.params.company_name;
        Axios(`${process.env.REACT_APP_BASE_URL}/agent/name/${companyName}`)
            .then(data => {
                switch (data.status) {
                    case 200:
                        setAgentData(data.data[0])
                        setStatus('done');
                        break;
                    case 404:
                        setStatus('not found')
                        break;
                    default:
                        break;
                }
                setStatus('done')
            })
            .catch(err => {
                notification.error({ message: 'Failed to load data'});
            })
    };


    useEffect(() => {
        getAgentData();
    }, []);

    switch (status) {
        case 'loading':
            return <PageLoading />
        case 'done':
            return (
                <>
                    <div className="container mb-4">
                    <AgentDetailCard val={agentData} />
                        
                        <Tabs defaultActiveKey="1" onChange={() => {}} >
                            <TabPane tab="Properties" key="1">
                                Content of Tab Pane 1
    </TabPane>
                            <TabPane tab="Tab 2" key="2">
                                Content of Tab Pane 2
    </TabPane>
                            <TabPane tab="Tab 3" key="3">
                                Content of Tab Pane 3
    </TabPane>
                        </Tabs>
                    </div>
                </>
            )
        case 'not found':
            return (
                <PageNotFound />
            )
        default:
            break;
    }

    
}

