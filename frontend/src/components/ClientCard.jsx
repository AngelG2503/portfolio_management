import React from "react";
const DEFAULT_IMAGE =
    "https://ui-avatars.com/api/?background=3498db&color=fff&name=Client";


function ClientCard({ client }) {
    const { name, description, designation, image } = client;

    return (
        <div className="client-card">
            <img
                src={image || DEFAULT_IMAGE}
                alt={name || "Client"}
                loading="lazy"
                onError={(e) => {
                    e.target.src = DEFAULT_IMAGE;
                }}
            />

            <p className="client-description">{description}</p>
            <h4>{name}</h4>
            <p className="client-designation">{designation}</p>
        </div>
    );
}

export default ClientCard;
