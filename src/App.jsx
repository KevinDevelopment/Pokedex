import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Pokemon } from "./Components/Pokemon/Pokemon"



function Home() {
  return (
    <div>
      <Navbar />  
      <Pokemon />   
    </div>
  );
}

export default Home;