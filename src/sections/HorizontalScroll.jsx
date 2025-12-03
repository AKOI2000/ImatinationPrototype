import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const totalWidth =
      wrapperRef.current.scrollWidth - containerRef.current.offsetWidth;

    gsap.to(wrapperRef.current, {
      x: -totalWidth,
      ease: "ease-in",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: () => `+=${totalWidth}`,
      },
    });
  });

  return (
    <section className="horizontal-container" ref={containerRef}>
      <div ref={wrapperRef} className="horizontal-wrapper">
        <div className="panel">
          <Link className="inner-box" to="/portfolio/headshot-photography">
            <div className="black-overlay"></div>
            <div className="panel-text">Headshot</div>
            {/* <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_1200/v1764170365/_E7A9748_u7y2u7.jpg" alt="" loading="lazy"/> */}
            <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416301/Fisayo2_tj1hb5" alt="" loading="lazy"/>
          </Link>
        </div>
        <div className="panel">
          <Link className="inner-box" to="/portfolio/fashion-photography">
            <div className="black-overlay"></div>
            <div className="panel-text">Fashion</div>
            <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764171090/_HQ_0521_copy_tynx2i" alt="" loading="lazy"/>
          </Link>
        </div>
        <div className="panel">
          <Link className="inner-box" to="/portfolio/couples-photography">
            <div className="black-overlay"></div>
            <div className="panel-text">Couples</div>
            {/* <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764171469/_E7A0952_qf7q1f.jpg" alt="" loading="lazy"/> */}
            <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416306/Couples_b7r5ep" alt="" loading="lazy"/>
          </Link>
        </div>
        <div className="panel">
          <Link className="inner-box" to="/portfolio/beauty-photography">
            <div className="black-overlay"></div>
            <div className="panel-text">Beauty</div>
            <img src="https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764171780/_E7A0232_copy_qw2tqu" alt="" loading="lazy"/>
          </Link>
        </div>
      </div>
    </section>
  );
}
