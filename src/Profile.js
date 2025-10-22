import React from "react";
import "./Profile.css";
import rose from "./images/rose.jpg";


export default function Profile() {
  return (
    <section className="profile-section">
      <h2>₊˚ ✧ ━━━━⊱⋆ Profile ⋆⊰━━━━ ✧ ₊˚</h2>
      <div className="profile-content">
        <div className="profile-left">
          <h3>Hello, I'm Rose Jore Hermosilla</h3>
          <h4>UI/UX Designer & Front-End Developer</h4>
          <p>
            I am a passionate UI/UX Designer and Front-End Developer specializing
            in crafting visually stunning, user-centric digital experiences. My
            goal is to transform complex ideas into intuitive and delightful
            products.
          </p>
        </div>
        <div className="profile-right">
          <img src={rose} alt="profile" className="profile-img" />
        </div>
      </div>
    </section>
  );
}