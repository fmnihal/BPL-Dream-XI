import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const AvailablePlayers=({playersPromise, balance, setBalance, purchasedPlayers, setPurchasedPlayers})=>{
    const playersData= use(playersPromise);
    // console.log(playersData);
    return(
        <div className='max-w-5/6 mx-auto grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                playersData.map(player=><PlayerCard balance={balance} setBalance={setBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} player={player}></PlayerCard>)
            }
            
            

        </div>
    )
}
export default AvailablePlayers;