import Images from "../components/Images";
import Credentials from "../components/Credentials";
import Home_Button from "../components/Home_Button";

export default function Home() {
  return (
    <div className="position-relative">
      <Images />
      {/*<div className="credential-container position-absolute">
        *<Credentials />
  </div>*/}
      <div className="position-absolute home-text-container">
        <hr className="home-line" />
        <p className="home-text">
          We Aim To Strenthen Ourselves and Our Community by Connecting With
          Those Around Us. Join the Program and Become Part of a Growing
          Community of Students and Teachers Made Up of Your Peers.
        </p>
        <div className="home-button">
          <Home_Button />
        </div>
        <hr className="home-line" />
      </div>
    </div>
  );
}
