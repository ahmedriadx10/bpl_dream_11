import { Suspense, useState } from "react";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Nav from "./components/navbar/Nav";
import PlayersContainer from "./components/playersContainer/PlayersContainer";

const dataPromise=async ()=>{
  const res=await fetch('/players.json')
  return res.json()
}
const App = () => {
   const promiseJson=dataPromise()
const [coins,setCoins]=useState(50000)


  return (
   <>
   <Nav coins={coins}/>
   <Hero/>
  <Suspense fallback={<h2>Data is loading...</h2>}>
     <PlayersContainer promiseJson={promiseJson} coins={coins} setCoins={setCoins}/>
  </Suspense>
   <Footer/>
   </>
  );
};

export default App;