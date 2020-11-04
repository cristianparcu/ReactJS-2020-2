import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-posts';
import * as errors from "../actions/error";

const startPostsLoading = () => {
    return {
        type: actionTypes.START_LOADING_POSTS
    }
}

const endPostsLoading = () => {
    return {
        type: actionTypes.END_LOADING_POSTS
    }
}

const storePost = post => {
    return {
        type: actionTypes.SAVE_POST,
        payload: {
            post: post
        }
    };
};

export const savePost = post => {
    return dispatch => {
        dispatch(startPostsLoading());

        axios.post('/posts.json', post)
            .then(response => {
                console.log(response);

                dispatch(storePost(post));
                dispatch(endPostsLoading());
            })
            .catch(error => {
                console.log(error);
                const lowerCaseerror = error.response.data.error.message.toLowerCase();
                const parsedError = lowerCaseerror.replace('_',' ');
                dispatch(errors.saveError(parsedError));
                dispatch(endPostsLoading());
            })
    }
};

const loadPosts = posts => {
    return {
        type: actionTypes.FETCH_POSTS,
        payload: {
            posts: posts
        }
    };
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(startPostsLoading());
        axios.get('/posts.json')
            .then(response => {
                console.log(response);

                const posts = Object.values(response.data).map((post) => {
                    return {...post};
                });

                dispatch(loadPosts(posts));
                dispatch(endPostsLoading());
            })
            .catch(error => {
                console.log(error);
                const lowerCaseerror = error.response.data.error.message.toLowerCase();
                const parsedError = lowerCaseerror.replace('_',' ');
                dispatch(errors.saveError(parsedError));
                dispatch(endPostsLoading());
            })
    }
}
