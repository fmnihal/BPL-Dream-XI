import React, {Suspense, useState} from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/selectedPlayers/SelectedPlayers';
import {ToastContainer} from 'react-toastify';

const fetchPlayers= async ()=>{
  const res= await fetch('/players.json');
  return res.json();
}
const playersPromise= fetchPlayers();

function App() {
  const [toggle, setToggle]= useState(true);
  const [balance, setBalance]= useState(6000000000);
  const [purchasedPlayers, setPurchasedPlayers]= useState([]);
  
  const removePlayer=(p)=>{
    const filteredData= purchasedPlayers.filter(ply=> ply.playerName!==p.playerName);
    setPurchasedPlayers(filteredData);
    setBalance(balance+p.price);
  }

  return (
    <>
      <Navbar balance={balance}></Navbar>

      <div className='border-2 border-red-500 max-w-5/6 mx-auto flex justify-between items-center'>
        <h1 className='text-3xl'>{toggle? "Available Players":`Selected Players (${purchasedPlayers.length}/6)`}</h1>
        <div className='flex'>
          <button onClick={()=>setToggle(true)} className={`py-2 px-4 border-l-1 border-gray-400 rounded-l-xl hover:cursor-pointer ${toggle? "bg-yellow-400":""}`}>Available</button>
          <button onClick={()=>setToggle(false)} className={`py-2 px-4 border-l-1 border-gray-400 rounded-l-xl hover:cursor-pointer ${toggle? "":"bg-yellow-400"}`}>Selected (<span>{purchasedPlayers.length}</span>)</button>
        </div>
      </div>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        {
          toggle? <AvailablePlayers balance={balance} setBalance={setBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} playersPromise={playersPromise}></AvailablePlayers> : <SelectedPlayers playersPromise={playersPromise} removePlayer={removePlayer}></SelectedPlayers>
        }
        {/* <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers> */}
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  )
}

export default App;