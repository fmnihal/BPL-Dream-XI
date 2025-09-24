import React, { use } from 'react';
import { User, Flag } from 'lucide-react';

const AvailablePlayers=({playersPromise})=>{
    const playersData= use(playersPromise);
    // console.log(playersData);
    return(
        <div className='max-w-5/6 mx-auto grid justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                playersData.map(player=>{
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
                                    <button className="btn">Choose Player</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    )
                })
            }
            
            

        </div>
    )
}
export default AvailablePlayers;