import React from 'react'

const Player = (props) => {
    return (
        <div className="player-card">
            <h2>{props.player.first_name + " " + props.player.last_name}</h2>
            <p>{props.player.team.full_name} | {props.player.team.abbreviation}</p>
        </div>
    )
}

export default Player;