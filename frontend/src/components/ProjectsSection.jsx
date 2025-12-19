import React, { useRef, useEffect } from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function ProjectsSection({ projects }) {
    const scrollRef = useRef(null);
    const scrollInterval = useRef(null);

    const startScroll = (direction) => {
        stopScroll();
        scrollInterval.current = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += direction * 18; // speed
            }
        }, 16); // ~60fps
    };

    const stopScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
            scrollInterval.current = null;
        }
    };

    const handleMouseMove = (e) => {
        const container = scrollRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const zone = rect.width * 0.25; // 25% left/right zones

        if (x < zone) {
            startScroll(-1); // scroll left
        } else if (x > rect.width - zone) {
            startScroll(1); // scroll right
        } else {
            stopScroll(); // center → stop
        }
    };

    useEffect(() => {
        return () => stopScroll(); // cleanup
    }, []);

    return (
        <section className="projects-container">
            <div className="projects-header">
                <h2>Our Projects</h2>
                <p>
                    We know what buyers are looking for and suggest projects
                    that will bring clients top dollar.
                </p>
            </div>

            <div
                className="projects-grid hover-scroll"
                ref={scrollRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={stopScroll}
            >
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
