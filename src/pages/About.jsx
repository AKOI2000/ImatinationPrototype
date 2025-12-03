import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div id="about">
        <div className="page-heading">
          <h2>Imatinations story</h2>
        </div>
        <div className="about-image__img-box">
          <img
            className="main"
            src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416300/matin-landscape_yqg6nu"
            alt="Abdulmatin Jimoh"
            loading="lazy"
          />

          <img
            className="main-mobile"
            src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416297/Matin-portrait_c8gsjq"
            alt="Abdulmatin Jimoh"
            loading="lazy"
          />
        </div>

        <div className="about-paragraph">
          <p>
            I’m Matin Jimoh, a Lagos-based photographer who believes every
            moment has a story, every face has a rhythm, and every frame has a
            truth waiting to be seen.
          </p>
          <p>
            My work sits at the intersection of clarity, emotion, and
            intentional composition. Whether I’m shooting a corporate team, a
            creative talent, or an everyday Lagosian with a dream, my goal is
            simple: to make images that feel alive. Images that speak before the
            subject ever says a word.
          </p>
          <p>
            Over the years, I’ve photographed{" "}
            <strong>
              CEOs, founders, professionals across multiple industries, and
              hundreds of people{" "}
            </strong>{" "}
            who trust me to capture their best version. But beyond the gear,
            lights, and technicalities, what truly drives me is connection —
            that moment when someone settles into themselves, opens up, and lets
            the camera see the real story. .
          </p>
          <p>
            At <strong>Imatinations Studio</strong>, I specialize in portraits,
            headshots, lifestyle and commercial photography, bringing a polished
            yet natural style that elevates brands and individuals. My approach
            is calm, collaborative, and people-centered — making the process as
            smooth as the final images.
          </p>
          <p>
            For me, photography isn’t just what I do. It’s how I translate human
            stories into something timeless.
          </p>
        </div>

        <div className="about-quote">
          <h4>“Kini ona abayo”</h4>

          <h5> Abdulmatin Jimoh</h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
