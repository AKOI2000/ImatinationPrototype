import { Link } from "react-router-dom";
import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";

function Works() {
  return (
    <>
      <Navbar />
      <div className="works-section">
        <div className="container">
          <div className="page-heading">
            <h2>Portfolio</h2>
          </div>
          <div className="grid col-2-by-2">
            <Link to="/portfolio/headshot-photography" className="grid-cell">
              <div className="img-box">
              <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416301/Fisayo2_tj1hb5"alt="Imatinations Photography" />
              </div>
            <div className="text-box">Headshot</div>
            </Link>

            <Link to="/portfolio/fashion-photography" className="grid-cell">
              <div className="img-box">
                <img
                  src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764171090/_HQ_0521_copy_tynx2i"
                 alt="Imatinations Photography"
                />
              </div>
              <div className="text-box">Fashion</div>
            </Link>

            <Link to="/portfolio/couples-photography" className="grid-cell">
              <div className="img-box">
              <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416306/Couples_b7r5ep" alt="Imatinations Photography" />
              </div>
            <div className="text-box">Couples</div>
            </Link>

            <Link to="/portfolio/beauty-photography" className="grid-cell">
              <div className="img-box">
                <img
                  src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764171780/_E7A0232_copy_qw2tqu"
                 alt="Imatinations Photography"
                />
              </div>
              <div className="text-box">Beauty</div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Works;
