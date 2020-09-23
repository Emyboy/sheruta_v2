import { notification } from 'antd';
import Axios from 'axios';
import {
    AGENT_LOADING,
    SET_AGENT_LIST
} from '.';

export const getAllAgents = () => dispatch => {
    console.log('getting agents')
    dispatch({ type: AGENT_LOADING, payload: true });
    Axios(`${process.env.REACT_APP_BASE_URL}/agent/all`)
        .then(agents => {
            console.log(agents);
            dispatch({ type: SET_AGENT_LIST, payload: agents.data.list })
            dispatch({ type: AGENT_LOADING, payload: false });
        })
        .catch(err => {
            notification.error({ message: 'Agent List Failed' })
        })
}
