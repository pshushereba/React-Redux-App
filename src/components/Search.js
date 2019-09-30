import React, {useState} from 'react'
import {connect} from 'react-redux';
import {searchPlayer} from '../actions/';

const Search = (props) => {
    const [player, setPlayer] = useState("");
    console.log("In Search.js", player);
    return (
        <div className="form-wrapper">
            <input 
                type="text"
                value={player}
                placeholder="SEARCH FOR A PLAYER e.g. LEBRON JAMES"
                onChange={(e) => setPlayer(e.target.value)}></input>
            <button onClick={() => props.searchPlayer(player)}>Search Player</button>
        </div>
    )
}

export default connect(null, {searchPlayer: searchPlayer})(Search);