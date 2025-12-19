import React, { useState } from 'react';
import { submitContact } from '../services/api';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '', email: '', mobile: '', city: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitContact(formData);
            alert('Contact form submitted successfully!');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (err) {
            alert('Error submitting form');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="contact-section">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
