export const SEARCH_PLAYER = "SEARCH_PLAYER";

export const searchPlayer = (player) => {
    return {
        type: SEARCH_PLAYER,
        payload: player
    }
}