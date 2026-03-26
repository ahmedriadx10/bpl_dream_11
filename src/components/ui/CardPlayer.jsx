import { use, useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import {  FaUser } from "react-icons/fa";
import { PiRabbit } from "react-icons/pi";
import { toast } from "react-toastify";

const CardPlayer = ({setSelectedPlayers,selectedPlayers,card,coins,setCoins}) => {

 const {id,player_img,name,country,batting_style,price,rating,role}=card
 const [selected,setSelected]=useState(false)

const findPlayerCardItSelf=selectedPlayers.find((x)=>x.id===id)

const handleChoose=()=>{

if(coins<price){
  
toast.error(`Insufficient balance, you also need $${price - coins}`)
  return
}


setSelected(true);
setCoins(coins - price);
setSelectedPlayers([...selectedPlayers,card])
toast.success(`Successfully choosed Successfully purchased player ${name} for a cost of $${price}`)
}



  return (
  <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={player_img}
      alt={name} className="h-60" />
  </figure>
  <div className="card-body">

<div className="space-y-2 font-semibold">    <h2 className="card-title  items-center"> <FaUser/> {name}  </h2>
<div className=""><div className="flex gap-1.5 items-center justify-between "><CiFlag1 style={{fontSize:'20px',}}/> <p className="">{country}</p> <span className="badge text-white  bg-linear-[90deg,#EC7A3B,#F14749]">{role}</span> </div></div>
<div className="space-y-2">
  <div className="flex justify-between font-semibold "><p>Rating</p><p className="text-right">{rating}</p></div>
 <div className=" flex justify-between"><p>Batting Style</p> <span className="badge badge-info badge-soft">{batting_style}</span></div>
</div>

<p className="">Price: ${price}</p>

</div>

    <div className="card-actions justify-end">
      <button onClick={handleChoose} disabled={findPlayerCardItSelf?true:false} className="btn btn-primary btn-soft">{selected? 'Selected':'Choose Player'}</button>
    </div>
  </div>
</div>
  );
};

export default CardPlayer;