import Axios from 'axios';
import { 
    ADD_AGENT,
    AGENT_LOADING
} from '.'
// import {  } from '../../Firebase';

export const crate_agent_account = data => dispatch => {
    dispatch({ type: AGENT_LOADING, payload: true });
    Axios(`${process.env.REACT_APP_BASE_URL}/agent`,{
        method: 'POST',
        data
    })
        .then(account => {
            console.log(account);
            dispatch({ type: AGENT_LOADING, payload: false })
        })
        .catch(err => {
            console.log(err)
        })
}
