import { Suspense } from "react";
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
  return (
   <>
   <Nav/>
   <Hero/>
  <Suspense fallback={<h2>Data is loading...</h2>}>
     <PlayersContainer promiseJson={promiseJson}/>
  </Suspense>
   <Footer/>
   </>
  );
};

export default App;