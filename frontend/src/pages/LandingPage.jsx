import React, { useState, useEffect } from 'react';
import { getProjects, getClients } from '../services/api';
import Hero from '../components/Hero.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import AboutUs from '../components/AboutUs.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ClientsSection from '../components/ClientsSection.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Newsletter from '../components/Newsletter.jsx';
import './LandingPage.css';

function LandingPage() {
    const [projects, setProjects] = useState([]);
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [projectsRes, clientsRes] = await Promise.all([
                getProjects(),
                getClients()
            ]);
            setProjects(projectsRes.data.data);
            setClients(clientsRes.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="landing-page">
            <Hero />
            <WhyChooseUs />
            <AboutUs />
            <ProjectsSection projects={projects} />
            <ClientsSection clients={clients} />
            <ContactForm />
            <Newsletter />
        </div>
    );
}

export default LandingPage;
