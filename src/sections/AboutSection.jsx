import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="about-section container">
      <div className="section-heading">About</div>

      <div className="about-text">
        <p>I blend creativity with technique, using clean direction, perfect lighting, and carefully composed visuals to make every shot unforgettable. Whether it’s fashion, beauty, or bridal, your story deserves to shine.</p>
        <Link to="/about" className="btn btn-sub">see more about me</Link>
      </div>
      
    </div>
  );
}

export default AboutSection;
