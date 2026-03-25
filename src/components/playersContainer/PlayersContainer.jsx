import { useState } from "react";

const PlayersContainer = () => {
  const [containerState, setContainerState] = useState("available");

  return (
    <section className="max-w-7xl mx-auto w-[90%]">
      <div className="flex justify-between items-center py-5">
        <div className="font-bold text-3xl">
          {containerState === "available" ? (
            <h2>Available Players</h2>
          ) : (
            <h2>Selected Player (0/6)</h2>
          )}
        </div>
        <div className="">
          <button
            onClick={() => setContainerState("available")}
            className={`btn  rounded-r-none rounded-lg ${containerState === "available" ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setContainerState("selected")}
            className={`btn  rounded-l-none rounded-lg ${containerState === "selected" ? "bg-[#E7FE29]" : ""}`}
          >
            Selected
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlayersContainer;
