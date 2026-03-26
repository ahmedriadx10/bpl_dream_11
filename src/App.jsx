import { Suspense, useState } from "react";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/navbar/Nav";
import PlayersContainer from "./components/playersContainer/PlayersContainer";
import { Circles } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

const dataPromise = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const data = dataPromise();

const App = () => {
  const promiseJson = data;
  const [coins, setCoins] = useState(50000);

  return (
    <>
      <Nav coins={coins} />
      <Hero />
      <Suspense fallback={<div className="py-20 flex justify-center items-center"><Circles color='#F14749'/></div>}>
        <PlayersContainer
          promiseJson={promiseJson}
          coins={coins}
          setCoins={setCoins}
        />
      </Suspense>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
