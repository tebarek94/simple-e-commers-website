import React from "react";
import "../assets/CSS/AboutUs.css";
import { Link } from "react-router-dom";
import user from "../assets/logo/user.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="hero">
        <h1
          style={{
            marginTop: "40px",
          }}
        >
          About company
        </h1>
        <p>
          Your trusted partner in The e-commerce industry encompasses the buying
          and selling of goods and services over the internet, utilizing various
          digital platforms such as online stores, mobile applications, and
          social media channels. This sector has revolutionized traditional
          commerce by enabling businesses to reach a global customer base,
          offering a wide array of products and services accessible at any time
          and from any location.
        </p>
      </section>

      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Founded in 4, XYZ shoping began with a simple mission: to provide
          high-quality products/services that solve a specific problem or
          fulfill customer a need. Our journey started with Certainly! Here's a
          randomly generated origin story, challenges faced, and milestones
          achieved for a fictional e-commerce company: **Origin Story:** In
          2015, Emma and Lucas, two college friends passionate about sustainable
          fashion, noticed a gap in the market for eco-friendly clothing that
          didn't compromise on style. They decided to launch "EcoThreads," an
          online boutique offering stylish, sustainable apparel. Starting from a
          small apartment with limited funds, they handcrafted their first
        </p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>
          We are committed to state your mission, e.g., delivering exceptional
          products, ensuring customer satisfaction, promoting sustainability.
          Every product we offer is describe unique selling points, e.g.,
          handcrafted, eco-friendly, sourced from local artisans.
        </p>
      </section>

      <section className="meet-the-team">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={user} alt="Abebe kebed" />
            <h3>Abebe Ayel</h3>
            <p>Sales Managemer</p>
          </div>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src={user} alt="Abebe kebed" />
            <h3>Abebe Ayel</h3>
            <p>Sales Managemer</p>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Have questions or feedback? We'd love to hear from you. Reach out to
          us at Email {<Link>Email xyx@gmail.com</Link>} or follow us on [social
          media platforms].
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
