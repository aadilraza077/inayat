// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Inayat Charitable & Educational Trust</h3>
                    <p className="footer-description">
                        Dedicated to making a positive impact in our community through education and social welfare.
                    </p>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/contact">Donate</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>📍 123 Charity Street, City</li>
                        <li>📞 +1 (555) 123-4567</li>
                        <li>✉️ info@inayattrust.org</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect With Us</h4>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Inayat Charitable and Educational Trust. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
