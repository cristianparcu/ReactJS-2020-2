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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_POST: return savePost(state, action);
        default: return state;
    }
}

export default reducer;