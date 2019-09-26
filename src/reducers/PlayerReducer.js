import {
    SEARCH_PLAYER,
    SEARCH_PLAYER_SUCCESS,
    SEARCH_PLAYER_FAIL
} from '../actions/index.js';

export const initialState = {
    searchParam: "",
    playerData: {},
    error: ""
};

export const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH_PLAYER: {
            console.log("SEARCH_PLAYER ACTION");
            return {
                state
            }
        }

        case SEARCH_PLAYER_SUCCESS: {
            console.log(state)
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