import React from 'react';
const SelectedCard=({player, removePlayer})=>{
    const handleRemove=()=>{
        removePlayer(player);
    }
    return(
        <div className='border-2 border-red-500 flex justify-between items-center rounded-xl'>
            <div className='flex items-center'>
                <img src={player.playerImg} alt="" className='w-[50px] h-[50px] rounded-lg object-cover' />
                <div className='ml-2'>
                    <h1>{player.playerName}</h1>
                    <p className='text-xs'>{player.playerRole}</p>
                </div>
            </div>
            <span onClick={handleRemove}><Trash2 /></span>
        </div>
    )
}
export default SelectedCard;