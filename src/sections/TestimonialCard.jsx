function TestimonialCard({testimonial}) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card_back-quote">
        <img src="../../public/backquoute.svg" alt="" />
      </div>
      <div className="testimonial-card_paragraph">
       {testimonial.testimonial}
      </div>
      <div className="testimonial-card_source">
        <div className="testimonial-source_img">
          <img src={testimonial.img} alt={`Imatinations for ${testimonial.author}`} />
        </div>
        <div className="testimonial-source-info">
          <h2>{testimonial.author}</h2>

          <p>{testimonial.job} </p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
