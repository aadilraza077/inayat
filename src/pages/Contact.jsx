import React, { useState } from 'react';
import '../styles/Contact.css';
import * as emailjs from 'emailjs-com';

// Initialize EmailJS globally
emailjs.init('vU4CnF4WtLFcGF6hv');

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState({ success: null, message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await emailjs.send(
                'service_5wf647b',
                'template_irj0yda',
                formData,
                'vU4CnF4WtLFcGF6hv'
            );
            console.log('Email sent successfully!', response.status, response.text);
            setFormStatus({ success: true, message: 'Message sent successfully!' });
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setFormStatus({ success: false, message: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <div className="contact">
            <div className="contact-wrapper">
                <h1>Contact Us</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button className="submit-button" type="submit">Send</button>
                </form>
                {formStatus.success !== null && (
                    <div className={`form-status ${formStatus.success ? 'success' : 'error'}`}>
                        <p>{formStatus.message}</p>
                    </div>
                )}
            </div>
        </div>

    );
}

export default Contact;


