import React from "react";
import "./Home.css";
import heroImage from "../assets/hero.png"; // Replace with your hero image
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Image */}
      <section className="hero-section">
        <img src={heroImage} alt="StrataCode Hero" className="hero-img" />
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <h1 className="main-title">StrataCode 💻🚀</h1>
        <p className="subtitle">
          Software Engineering | Web & Mobile Apps | Cloud | DevOps
        </p>
        <p className="tagline">
          Empowering Businesses & Individuals with Efficient Tech Solutions
        </p>
      </section>

      {/* Skilled Developers */}
      <section id="developers" className="section">
        <h2 className="section-title">Skilled Software Developers</h2>
        <p className="section-text">
          At StrataCode, we are a team of passionate and experienced software
          engineers dedicated to crafting powerful digital experiences. From
          frontend to backend, cloud systems to DevOps, we build intelligent,
          scalable, and future-ready software that meets your unique business
          needs.
        </p>
      </section>

      {/* Customers & Partners */}
      <section id="partners" className="section">
        <h2 className="section-title">Customers & Partners</h2>
        <p className="section-text">
          We’re proud to serve a diverse clientele — from startups to enterprises —
          across industries. Whether building your first app or scaling infrastructure,
          StrataCode is your trusted tech partner.
        </p>

        {/* Partner Logos */}
        <div className="partners-grid">
          <img src={partner1} alt="Partner 1" className="partner-logo" />
          <img src={partner2} alt="Partner 2" className="partner-logo" />
          <img src={partner3} alt="Partner 3" className="partner-logo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
