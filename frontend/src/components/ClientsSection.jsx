import React, { useRef, useEffect } from "react";
import ClientCard from "./ClientCard";
import "./Clients.css";

function ClientsSection({ clients }) {
    const scrollRef = useRef(null);
    const scrollInterval = useRef(null);

    const startScroll = (direction) => {
        stopScroll();
        scrollInterval.current = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft += direction * 10;
            }
        }, 16);
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
        const zone = rect.width * 0.25;

        if (x < zone) {
            startScroll(-1);
        } else if (x > rect.width - zone) {
            startScroll(1);
        } else {
            stopScroll();
        }
    };

    useEffect(() => {
        return () => stopScroll();
    }, []);

    return (
        <section className="clients-section">
            <h2>Happy Clients</h2>

            <div
                className="clients-grid hover-scroll"
                ref={scrollRef}
                onMouseMoveCapture={handleMouseMove}
                onMouseLeave={stopScroll}
            >
                {clients.map((client) => (
                    <ClientCard key={client._id} client={client} />
                ))}
            </div>
        </section>
    );
}

export default ClientsSection;
