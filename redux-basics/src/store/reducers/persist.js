import * as actionTypes from '../actions';

const initialState ={
    value: []
};

const reducer = (state = initialState, action) => {
   
    const {type, payload}=action;
    const {SAVE}=actionTypes;
    switch (type) {
       
        case SAVE:
            const updateValues=[
                ...state.values
            ];
            updateValues.push(payload.value);
            return {
                ... state,
                values:updateValues
            }
    
        default:
            return state;
    }
}

export default reducer;