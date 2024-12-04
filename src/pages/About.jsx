import React from 'react';
import '../styles/About.css';
import { Link } from 'react-router-dom';
function About() {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-header">
                    <h1>About Us</h1>
                    <div className="underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-image">
                        <img src="/inayat/aboutimg.jpg" alt="Charity work in action" />
                    </div>

                    <div className="about-text">
                        <h2>Making a Difference Since 2024</h2>
                        <p>Our mission is to create lasting change in communities worldwide. Through dedication,
                            compassion, and the support of generous donors like you, we've been able to impact
                            thousands of lives.</p>

                        <div className="impact-stats">
                            <div className="stat-item">
                                <h3>1000+</h3>
                                <p>Lives Impacted</p>
                            </div>
                            <div className="stat-item">
                                <h3>50+</h3>
                                <p>Communities Served</p>
                            </div>
                            <div className="stat-item">
                                <h3>100%</h3>
                                <p>Commitment</p>
                            </div>
                        </div>

                        <div className="about-cta">
                          <Link to="/contact">  <button className="donate-button" >Join Our Cause</button> </Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
