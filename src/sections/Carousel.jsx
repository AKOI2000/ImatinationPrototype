import { useEffect, useRef } from "react";
import gsap from "gsap";
import TestimonialCard from "./TestimonialCard";
import { useGSAP } from "@gsap/react";

export default function Carousel() {
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  useGSAP(() => {
    const topRow = topRef.current;
    const bottomRow = bottomRef.current;

    // Set initial offset so animation looks continuous
    gsap.set(topRow, { x: "0%" });
    gsap.set(bottomRow, { x: "0%" });

    // top row: move left, pause, move back right
    gsap.to(topRow, {
      x: "-100%", // move left
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "ease.inOut",
    });

    // bottom row: move right, pause, move back left
    gsap.to(bottomRow, {
      x: "100%", // move right
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "ease.inOut",
    });
  });

  const testimonials = [
    {
      testimonial:
        "Matin made the entire process effortless. The energy was warm, the direction smooth, and the photos? Absolutely stunning — delivered faster than I expected",
      author: "Kaylah Oniwo",
      job: "Media Personality",
      img: "https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416295/kaylah_gwr5u9.jpg"
    },
    {
      testimonial:
        "Everything went so smoothly, and the photos were perfect, perfect, perfect! The best hypeman there is.",
      author: "Mofesola Olarewanju",
      job: "PR and AD Enthusiast",
      img: "https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416298/Mofe_dz66fz.jpg"
    },
    {
      testimonial:
        "Had the best time! Fun, easy, and professional. The edited pictures came so fast. Highly recommend Imatinations!",
      author: "Misturah Owolabi",
      job: "CEO, Mistaglam Agency",
      img: "https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416298/Misturah_gfr8qy.jpg"
    },
    {
      testimonial:
        "Extremely professional, always thinking outside the box, and exceeded my expectations with fast delivery.",
      author: "Runor",
      job: "Jounalist",
      img: "https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416299/Runor_k6mezk.jpg"
    },
    {
      testimonial:
        "A highlight of my month! Matin and his team made it fun, effortless, and the photos are stunning. I’ll definitely be back!",
      author: "Esther Ezinne",
      job: "Content Creator",
      img: "https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416293/Esther_ty4kaj.jpg"
    },
    {
      testimonial: "I enjoyed my photoshoot a lot, great photographer and the best service!",
      author: "Fisayo",
      job: "Tech Youtuber",
      img: "https://res.cloudinary.com/dbn6k7pg6/image/upload/f_auto,q_auto,w_auto,c_scale,dpr_auto/v1764416295/fisayo_nwzcij.jpg"
    }
  ];

  return (
    <div className="testimonial-section">
      {/* Top row */}
      <div ref={topRef} className="top-row">
        {testimonials.map((testimonial, i) => (
          // <div key={`top-${i}`}>{t}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial, i) => (
          // <div key={`top-dup-${i}`}>{t}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial, i) => (
          // <div key={`top-${i}`}>{t}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial, i) => (
          // <div key={`top-dup-${i}`}>{t}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}{" "}
        {/* duplicate for smooth looping */}
      </div>

      {/* Bottom row */}
      {/* <div ref={bottomRef} className="bottom-row">
        {testimonials.map((testimonial, index) => (
          // <div key={`bottom-${index}`}>{testimony}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial, index) => (
          // <div key={`bot
          tom-dup-${index}`}>{testimony}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial, index) => (
          // <div key={`bottom-${index}`}>{testimony}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {testimonials.map((testimonial, index) => (
          // <div key={`bottom-dup-${index}`}>{testimony}</div>
          <TestimonialCard testimonial={testimonial} />
        ))}
        {/* duplicate for smooth looping */}
      </div>
    // </div>
  );
}
