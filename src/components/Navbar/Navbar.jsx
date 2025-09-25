import React from 'react';
import navImg from '../../assets/logo.png';
import {CirclePoundSterling} from 'lucide-react';

const Navbar=({balance})=>{
    return(
        <div className='max-w-5/6 mx-auto flex justify-between mb-5'>
            <div className="flex-1">
                <img src={navImg} className='h-[60px] w-[60px]' alt="" />
            </div>
            <div className="flex items-center">
                <span className='mr-1'>{balance}</span> <span className='mr-1'>Coin</span> <span><CirclePoundSterling /></span>
            </div>
        </div>
    )
}
export default Navbar;