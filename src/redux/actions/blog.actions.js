import { GET_ALL_BLOG_ERROR, GET_ALL_BLOG_SUCCESS, BLOG_LOADING } from '.';
import Axios from 'axios';
import { notification } from 'antd';

const blogLoading = () => {
    return {
        type: BLOG_LOADING,
    }
}
const getBlogError = error => {
    return {
        type: GET_ALL_BLOG_ERROR,
        payload: error
    }
}

const getAllBlogs = data => {
    return {
        type: GET_ALL_BLOG_SUCCESS,
        payload: data
    }
}

export const getAllBlog = () => dispatch => {
    dispatch(blogLoading());
    return Axios(`${process.env.REACT_APP_BASE_URL}/blogs/all`)
        .then(res => {
            if(res.data.length > 0){
                dispatch(getAllBlogs(res.data));
            }else {
                notification.error({message: 'No Blog Post Loaded'})
            }
            console.log(res);
        })
        .catch(err => {
            dispatch(getBlogError(err));
            console.log(err);
        })
    
}
