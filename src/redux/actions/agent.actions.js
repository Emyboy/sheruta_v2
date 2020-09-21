import Axios from 'axios';
import { 
    ADD_AGENT,
    AGENT_LOADING
} from '.'
import { storage } from '../../Firebase';

export const crate_agent_account = data => dispatch => {
    dispatch({ type: AGENT_LOADING, payload: true });
    console.log('uploading data ---', data);

    const uploadTask = storage.child(`agent/${data.user_id}/company_logo`).put(data.company_logo)
    uploadTask.on('state_changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + Number.parseInt(progress) + '% done');
    }, (error) => {
        // Handle unsuccessful uploads
    }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            Axios(`${process.env.REACT_APP_BASE_URL}/agent`, {
                method: 'POST',
                data: { ...data, company_logo: downloadURL }
            })
                .then(account => {
                    console.log(account);
                    dispatch({ type: AGENT_LOADING, payload: false });
                    dispatch({ type: ADD_AGENT, payload: account.data.data[0] });
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log('error ---', err);
        });
    });


    
}
