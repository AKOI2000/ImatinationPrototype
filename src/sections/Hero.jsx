import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero-box">
      
      <h1 className="hero-text">
        <span className="main">Step Into the Spotlight, <br /> Forever.</span>
      </h1>
      <Link to="/portfolio" className="btn btn-sub">See portfolio</Link>
    </div>
  );
}
