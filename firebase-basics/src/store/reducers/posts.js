import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    posts: []
}

const savePost = (state, action) => {
    const updatedPosts = [...state.posts];

    updatedPosts.push(action.payload.post);

    return updateObject(state, { posts: updatedPosts});
}

const fetchPosts = (state, action) => {
    return updateObject(state, { posts: action.payload.posts})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_POST: return savePost(state, action);
        case actionTypes.FETCH_POSTS: return fetchPosts(state, action);
        default: return state;
    }
}

export default reducer;
