import React from "react";
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <WhatsHappening />
      <TuitsList />
    </div>
  );
};

export default Home;
