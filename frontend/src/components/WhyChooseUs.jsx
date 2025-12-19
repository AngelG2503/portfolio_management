import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="section-header">
                <p className="subtitle">Not Your Average Realtor</p>
                <h2>Why Choose Us?</h2>
            </div>

            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon">🏠</div>
                    <h3>Potential ROI</h3>
                    <p>We help you maximize your return on investment with strategic property selection and market insights.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">🎨</div>
                    <h3>Design</h3>
                    <p>Our team provides expert design consultation to enhance property value and appeal.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">📈</div>
                    <h3>Marketing</h3>
                    <p>Advanced marketing strategies to reach the right audience and close deals faster.</p>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
