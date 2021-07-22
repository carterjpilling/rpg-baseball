import React, {useState} from 'react';
let teams = require('../../teams.json');

export default function Game(){

    const [awayTeam, setAwayTeam] = useState();
    const [homeTeam, setHomeTeam] = useState();

    console.log(teams.Jackrabbits[1].Name);
    return (
        <div>
            Gamejs
        </div>
    )
};