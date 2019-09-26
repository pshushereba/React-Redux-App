import axios from 'axios';

export const SEARCH_PLAYER = "SEARCH_PLAYER";
export const SEARCH_PLAYER_SUCCESS = "SEARCH_PLAYER_SUCCESS";
export const SEARCH_PLAYER_FAIL = "SEARCH_PLAYER_FAIL";

export const searchPlayer = (player) => (dispatch) => {
    return axios.get(`https://www.balldontlie.io/api/v1/players`)
                .then((res) =>
                    dispatch({type: SEARCH_PLAYER_SUCCESS, payload: res.data}))
                .catch((err) => dispatch({type: SEARCH_PLAYER_FAIL, payload: err}));
        {
    //     type: SEARCH_PLAYER,
    //     payload: player
    }
}