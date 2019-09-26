export const initialState = {
    searchParam: ""
};

export const playerReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH_PLAYER": {
            console.log("SEARCH_PLAYER ACTION");
            return {
                searchParam: action.payload
            }
        }
        default: return state;
    }
};