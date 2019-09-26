import React, {useState} from 'react'
import {connect} from 'react-redux';
import {searchPlayer} from '../actions/';

const Search = (props) => {
    const [player, setPlayer] = useState("");
    console.log(player);
    return (
        <div>
            <input 
                type="text"
                value={player.name}
                placeholder="Search for a Player"
                onChange={(e) => setPlayer(e.target.value)}></input>
            <button onClick={() => props.searchPlayer(player)}>Search Player</button>
        </div>
    )
}
 export default connect(null, {searchPlayer: searchPlayer})(Search);