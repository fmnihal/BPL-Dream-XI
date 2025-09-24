import React, { use } from 'react';
import { User, Flag } from 'lucide-react';

const AvailablePlayers=({playersPromise})=>{
    const playersData= use(playersPromise);
    console.log(playersData);
    return(
        <div className='max-w-5/6 mx-auto'>
            {
                playersData.map(player=>{
                    return(
                        <div className="card bg-base-100 w-96 shadow-sm p-4">
                        <figure>
                            <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"><User /> Viral Kohli</h2>
                            <div className='flex justify-between border-b-1 border-gray-400 pb-2'>
                                <div className='flex'>
                                    <Flag></Flag><span className='ml-1'>India</span>
                                </div>
                                <button className='btn btn-soft'>Allrounder</button>
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>Rating</span>
                                    <span>5</span>
                                </div>
                                <div className='flex justify-between'>
                                    <span className='font-bold'>Left Hand Bat</span>
                                    <span>Right Hand Bowl</span>
                                </div>
                            </div>

                            <div className='flex justify-between items-center'>
                                <div>
                                    <span className='font-bold mr-1'>Price: $</span>
                                    <span>15000000</span>
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