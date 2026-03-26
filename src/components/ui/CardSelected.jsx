import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const CardSelected = ({player,selectedPlayers,setSelectedPlayers,coins,setCoins}) => {
  
 
const {player_img,name,batting_style,price,rating,role,id}=player


const deletedSelected=()=>{

setSelectedPlayers(selectedPlayers.filter(x=>x.id!==id))
setCoins(coins + price)
toast(`As a player ${name} selection has been canceled and $${price} refunded`)
}

  return (
 
        <div className="flex justify-between p-6 rounded-2xl shadow border-base-200">
      <div className="flex gap-4">
        <img src={player_img} alt={name} className="h-20 w-25 rounded-lg "/>
        <div>
          <h6 className="font-semibold text-2xl">{name}</h6>
       <div className="flex gap-5 py-2"> <p className="text-neutral/60">{batting_style}</p>
        <p className="badge badge-primary badge-soft font-semibold">Price {price}</p></div>
        </div>
      </div>
<button onClick={deletedSelected} className="btn btn-circle bg-warning"><MdDelete style={{fontSize:"30px"}}/></button>
    </div>
  );
};

export default CardSelected;