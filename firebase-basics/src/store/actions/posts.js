import * as actionTypes from './actionTypes';

export const savePost = (post) => {
    return {
        type: actionTypes.SAVE_POST,
        payload: {
            post: post
        }
    };
};