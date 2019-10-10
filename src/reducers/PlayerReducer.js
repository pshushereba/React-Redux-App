import {
    SEARCH_PLAYER_SUCCESS,
    SEARCH_PLAYER_FAIL
} from '../actions/index.js';

export const initialState = {
    searchParam: "",
    playerData: [],
    error: ""
};

export const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_PLAYER_SUCCESS: {
            return {
                ...state,
                playerData: action.payload
            }
        }

        case SEARCH_PLAYER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: return state;
    }
};