import React from 'react'
import {connect} from 'react-redux';

import Player from './Player.js';

const PlayerStats = (props) => {
    console.log("In PlayerStats", props);
    return (
        <div className="player-list">
            {props.players.map((player) => {
                return <Player key={player.id} player={player} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.playerData
    }
}

export default connect(mapStateToProps, {})(PlayerStats);