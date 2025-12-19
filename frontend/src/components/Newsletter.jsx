import React, { useState } from 'react';
import './Newsletter.css';
import { subscribe } from '../services/api';


function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        try {
            await subscribe({ email });
            alert('Subscribed successfully!');
            setEmail('');
        } catch (err) {
            alert(err.response?.data?.error || 'Error subscribing');
        }
    };

    return (
        <section className="newsletter-section">
            <h2>Subscribe to Our Newsletter</h2>
            <form onSubmit={handleSubscribe}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
        </section>
    );
}

export default Newsletter;
