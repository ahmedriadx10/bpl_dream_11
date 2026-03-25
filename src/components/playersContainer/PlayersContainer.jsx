import { use, useState } from "react";
import Available from "./available/Available";
import Selected from "./selected/Selected";


const PlayersContainer = ({promiseJson}) => {
 const playersData=use (promiseJson)




  const [containerState, setContainerState] = useState("available");

  return (
    <main className="max-w-7xl mx-auto  w-[90%]">
      <div className="flex flex-wrap justify-center  sm:justify-between   items-center py-5 gap-2.5">
        <div className="font-bold text-xl sm:text-2xl    md:text-3xl">
          {containerState === "available" ? (
            <h2>Available Players</h2>
          ) : (
            <h2>Selected Player (0/{playersData.length})</h2>
          )}
        </div>
        <div className=" ">
          <button
            onClick={() => setContainerState("available")}
            className={`btn  rounded-r-none rounded-lg ${containerState === "available" ? "bg-[#E7FE29]" : "bg-base-100"}`}
          >
            Available
          </button>
          <button
            onClick={() => setContainerState("selected")}
            className={`btn  rounded-l-none rounded-lg ${containerState === "selected" ? "bg-[#E7FE29]" : "bg-base-100"}`}
          >
            Selected (0)
          </button>
        </div>
      </div>

{containerState==='available'? <Available playersData={playersData}  /> : <Selected />}



    </main>




  );
};

export default PlayersContainer;
