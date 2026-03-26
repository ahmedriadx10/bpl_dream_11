import { BsEmojiFrown } from "react-icons/bs";
import CardSelected from "../../ui/CardSelected";


const Selected = ({ selectedPlayers,setSelectedPlayers,coins,setCoins}) => {
  if (selectedPlayers.length === 0) {
    return (
      <section className="py-20">
        <div className="flex flex-col items-center gap-5">
          <BsEmojiFrown style={{ fontSize: "60px", color: "#F14749" }} />
          <h2 className="font-bold text-center text-3xl text-neutral-600">
            No players selected
          </h2>
        </div>
      </section>
    );
  }
  return <section className="py-10 space-y-5">

{selectedPlayers.map((player)=><CardSelected  key={player.id} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coins={coins} setCoins={setCoins}/>)}
  </section>;
};

export default Selected;
