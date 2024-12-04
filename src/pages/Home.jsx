// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
    const events = [
        {
            id: 1,
            title: "Annual Education Drive",
            date: "December 15, 2024",
            image: "src/assets/event1.jpg",
            description: "Providing educational materials and support to underprivileged students.",
            location: "City Community Center"
        },
        {
            id: 2,
            title: "Healthcare Camp",
            date: "January 10, 2025",
            image: "src/assets/event2.jpg",
            description: "Free medical checkups and healthcare awareness program.",
            location: "Rural Health Center"
        },
        {
            id: 3,
            title: "Food Distribution Drive",
            date: "January 20, 2025",
            image: "src/assets/event3.jpg",
            description: "Distributing food packages to families in need.",
            location: "Multiple Locations"
        }
    ];

    const impactStats = [
        { number: "5000+", label: "Lives Impacted" },
        { number: "50+", label: "Active Projects" },
        { number: "100+", label: "Volunteers" },
        { number: "$1M+", label: "Funds Raised" }
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Inayat Charitable and Educational Trust</h1>
                    <p>Empowering communities through education and social welfare</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="donate-btn">Donate Now</Link>
                        <Link to="/about" className="learn-btn">Learn More</Link>
                    </div>
                </div>
            </section>

            {/* Impact Statistics */}
            <section className="impact">
                <h2>Our Impact</h2>
                <div className="impact-stats">
                    {impactStats.map((stat, index) => (
                        <div key={index} className="stat-box">
                            <h3>{stat.number}</h3>
                            <p>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest Events */}
            <section className="events">
                <h2>Latest Events</h2>
                <div className="events-grid">
                    {events.map(event => (
                        <div key={event.id} className="event-card">
                            <div className="event-image">
                                <img src={event.image} alt={event.title} />
                                <div className="event-date">{event.date}</div>
                            </div>
                            <div className="event-content">
                                <h3>{event.title}</h3>
                                <p className="event-location">📍 {event.location}</p>
                                <p>{event.description}</p>
                                {/*<Link to={`/event/${event.id}`} className="event-link">*/}
                                {/*    Learn More →*/}
                                {/*</Link>*/}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <h2>Our Mission</h2>
                <div className="mission-content">
                    <div className="mission-text">
                        <p>We are dedicated to creating positive change through:</p>
                        <ul>
                            <li>Supporting education initiatives</li>
                            <li>Providing healthcare assistance</li>
                            <li>Community development programs</li>
                            <li>Emergency relief efforts</li>
                        </ul>
                    </div>
                    <Link to="/contact" className="join-btn">Join Our Cause</Link>
                </div>
            </section>
        </div>
    );
}

export default Home;