import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('https://api.sendgrid.com/v3/mail/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer YOUR_SENDGRID_API_KEY`,
                },
                body: JSON.stringify({
                    personalizations: [
                        {
                            to: [{ email: 'admin@example.com' }],
                        },
                    ],
                    from: { email: formData.email },
                    subject: 'Contact Form Submission',
                    content: [{ type: 'text/plain', value: formData.message }],
                }),
            });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
