import React from "react";
import "./Angular.css";

function Angular() {
  return (
    <div className="ang-container">

     
      <div className="ang-hero">
        <h1>🔥 Become an Angular Developer</h1>
        <p>Master the most powerful front-end framework with hands-on real projects.</p>
      </div>

  
      <section className="ang-section">
        <h2 className="ang-title">📘 Skills You Will Learn</h2>

        <div className="ang-skill-grid">
          <div className="ang-skill-card">Angular Components</div>
          <div className="ang-skill-card">TypeScript Mastery</div>
          <div className="ang-skill-card">Routing & Navigation</div>
          <div className="ang-skill-card">Dependency Injection</div>
          <div className="ang-skill-card">Reactive Forms</div>
          <div className="ang-skill-card">Working with APIs</div>
          <div className="ang-skill-card">RxJS Observables</div>
          <div className="ang-skill-card">Angular Pipes</div>
        </div>
      </section>

   
      <section className="ang-section">
        <h2 className="ang-title">🧩 Hands-On Real Projects</h2>

        <div className="ang-project-grid">
          <div className="ang-project-card">
            <h3>✔ Admin Dashboard</h3>
            <p>Role-based UI + Charts + API Integration</p>
          </div>

          <div className="ang-project-card">
            <h3>✔ E-Commerce Frontend</h3>
            <p>Cart, Filters, Sorting, Authentication</p>
          </div>

          <div className="ang-project-card">
            <h3>✔ Online Learning App</h3>
            <p>Routing + Lazy Loading + Services</p>
          </div>

          <div className="ang-project-card">
            <h3>✔ Movie Finder App</h3>
            <p>Angular + API + Search + Filters</p>
          </div>
        </div>
      </section>

      
      <section className="ang-section">
        <h2 className="ang-title">💼 Career Opportunities</h2>
        <ul className="ang-list">
          <li>Angular Developer</li>
          <li>Frontend Developer</li>
          <li>UI Developer</li>
          <li>Web Application Engineer</li>
        </ul>

        <h2 className="ang-title">📅 Duration</h2>
        <p className="ang-duration">3 Months – Fully Practical Training</p>
      </section>

    </div>
  );
}

export default Angular;
