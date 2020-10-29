import { notification } from 'antd';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import AgentDetailCard from '../../components/AgentDetailCard';
import PageLoading from '../../components/PageLoader';
import PageNotFound from '../../components/PageNotFound';

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
                console.log(data);
                setStatus('done')
            })
            .catch(err => {
                notification.error({ message: 'Failed to load data'});
                console.log(err);
            })
    };

    console.log('PROPS ---', props);

    useEffect(() => {
        getAgentData();
    }, []);

    switch (status) {
        case 'loading':
            return <PageLoading />
        case 'done':
            return (
                <>
                    <AgentDetailCard val={agentData} />
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

