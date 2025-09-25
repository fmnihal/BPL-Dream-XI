import React, { useState } from 'react';
import { User, Flag } from 'lucide-react';

const PlayerCard=({player, balance, setBalance, purchasedPlayers, setPurchasedPlayers})=>{
    const [isSelected, setIsSelected]= useState(false);
    return(
        <div className="card bg-base-100 w-72 shadow-sm p-4">
            <figure className='h-40 overflow-hidden'>
                <img className='w-full h-full object-cover object-top'
                src={player.playerImg}
                alt={player.playerName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"><User /> {player.playerName}</h2>
                <div className='flex flex-wrap justify-between items-center border-b-1 border-gray-400 pb-2'>
                    <div className='flex'>
                        <Flag></Flag><span className='ml-1'>{player.playerCountry}</span>
                    </div>
                    <button className='btn btn-soft'>{player.playerRole}</button>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <span className='font-bold'>Rating</span>
                        <span>{player.rating}</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-bold'>{player.battingStyle}</span>
                        <span>{player.bowlingStyle}</span>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div>
                        <span className='font-bold mr-1'>Price: </span><span><b>$</b>{player.price}</span>
                    </div>
                    <div className="card-actions">
                        <button disabled={isSelected} onClick={()=>{
                            if(balance>= player.price){
                                setBalance(balance- player.price);
                                setIsSelected(!isSelected);
                                setPurchasedPlayers([...purchasedPlayers, player]);
                            }
                            else{
                                alert(`You can't spend more coins than you have!!!`);
                            }
                        }} className="btn">{isSelected? "Selected" : "Choose Player"}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PlayerCard;