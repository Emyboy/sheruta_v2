import { notification } from 'antd';
import Axios from 'axios';
import { v4 as uuid } from 'uuid'
import {
    SET_AGENT_PROPERTIES,
    AGENT_LOADING,
    SET_AGENT_LIST,
    UPDATE_AGENT_PROGRESS
} from '.';
import { storage } from '../../Firebase';

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
    dispatch({ type: AGENT_LOADING, payload: true });
    const id = uuid();
    const image_urls = {};
    const list = [];

    data.image_files.map((val, i) => {
        const uploadTask = storage.child(`properties/${data.user_id}/${id}/image_${i + 1}`).put(val)
        uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + Number.parseInt(progress) + '% done');
            dispatch({ type: UPDATE_AGENT_PROGRESS, payload: progress })
        }, (error) => {
            // Handle unsuccessful uploads
            notification.error({ message: 'Error Uploading Image(s) ' });
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                // console.log('File available at', downloadURL);
                list.push(downloadURL);
                list.map(val => {
                    image_urls[`image_url_${i + 1}`] = val;
                });
                console.log(list, list.length)
                if (list.length === data.image_files.length) {
                    Axios(`${process.env.REACT_APP_BASE_URL}/property`, {
                        method: 'POST',
                        data: { ...data, uuid: id, image_urls }
                    })
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            }).catch(err => {
                dispatch({ type: AGENT_LOADING, payload: false });
                dispatch({ type: UPDATE_AGENT_PROGRESS, payload: 0 });
                console.log('error ---', err);
            });
        });
    })
};


export const getAgentsProperties = agent_id => dispatch => {
    Axios(`${process.env.REACT_APP_BASE_URL}/property/${agent_id}`)
        .then(res => {
            console.log(res);
            dispatch({ type: SET_AGENT_PROPERTIES, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: SET_AGENT_PROPERTIES, payload: [] })
            console.log(err);
        })
}
