import React from "react";
import "./discuss.css";

const Discuss = () => {
  return <div className="discuss">
    <header className="header">Let's Discuss <span>Your Next Project</span></header>
    <section>
      <p className="one">Fill out the form or call us to<span>set up a free in-home consultation</span></p>
      <header className="service-areas">Service Areas:</header>
      <p className="two">San Francisco, Santa Clara, Alameda, San Mateo</p>
      <p className="three">500 Terry Francine Street San </p>
      <p className="four">info@mysite.com</p>
      <p className="five">123-456-7890</p>
    </section>
  </div>;
};

export default Discuss;