import React from "react";
import vg from "../assets/2.webp";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Itec</h1>
          <p>Solution for all problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            We are your one and only soultion to tech problems you face every
            day. we are leading tech company whose aim is to to increase the
            problem solving abiltiy in children
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
