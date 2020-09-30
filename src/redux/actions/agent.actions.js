import { notification } from 'antd';
import Axios from 'axios';
import {
    ADD_AGENT,
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
};

export const addNewProperty = data => dispatch => {
    console.log('ADDDING ---', data);
    dispatch({ type: AGENT_LOADING, payload: true })
    Axios(`${process.env.REACT_APP_BASE_URL}/property`,{
        method: 'POST',
        data
    })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
}
