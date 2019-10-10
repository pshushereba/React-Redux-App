import axios from 'axios';

// export const SEARCH_PLAYER = "SEARCH_PLAYER";
export const SEARCH_PLAYER_SUCCESS = "SEARCH_PLAYER_SUCCESS";
export const SEARCH_PLAYER_FAIL = "SEARCH_PLAYER_FAIL";

export const searchPlayer = (player) => (dispatch) => {
    const searchQuery = player.toLowerCase().replace(' ', '%20');
    return axios.get(`https://www.balldontlie.io/api/v1/players?search=${searchQuery}`)
            .then((res) =>
                dispatch({type: SEARCH_PLAYER_SUCCESS, payload: res.data.data}))
            .catch((err) => dispatch({type: SEARCH_PLAYER_FAIL, payload: err}));
        {
    }
}