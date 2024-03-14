import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
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
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            doloribus, quod dolores deserunt ut nam illum atque sint. Maiores
            minima exercitationem molestiae sapiente laboriosam nemo pariatur
            impedit iure repudiandae natus. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Eos earum quisquam architecto non unde
            maiores, molestiae eveniet, optio voluptates eum id. Nihil dolore
            omnis excepturi, nemo doloribus eligendi obcaecati aut! Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Laudantium iure
            adipisci eveniet voluptatibus praesentium ratione odio, quasi labore
            et dicta rem error, officiis obcaecati. Assumenda asperiores
            architecto quos minus ipsam!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
