import React from 'react';
import {Trash2} from 'lucide-react';
import SelectedCard from '../SelectedCard/SelectedCard';
const SelectedPlayers=({purchasedPlayers, removePlayer})=>{
    return(
        <div className='max-w-5/6 mx-auto'>
            {/* <SelectedCard></SelectedCard> */}
            purchasedPlayers.map(player=>{
                <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>
})
        </div>
    )
}
export default SelectedPlayers;