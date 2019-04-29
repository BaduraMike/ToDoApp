import {GET_TODOS, POST_TODO} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                items: action.payload
            };
        case POST_TODO:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}