import React, { useState } from 'react';
import { addClient } from '../services/api';

function AddClientForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        designation: '',
        image: ''   // URL
    });
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { ...formData };
        if (!payload.image || payload.image.trim() === '') {
            delete payload.image; // let Mongoose apply default
        }

        try {
            await addClient(payload);
            alert('Client added successfully!');
            setFormData({ name: '', description: '', designation: '', image: '' });
        } catch (err) {
            console.error('Submit error:', err);
            alert('Error adding client');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="admin-form">
            <h2>Add New Client</h2>

            <input
                type="text"
                placeholder="Client Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />

            <textarea
                placeholder="Client Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
            />

            <input
                type="text"
                placeholder="Designation (e.g., CEO, Developer)"
                value={formData.designation}
                onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                required
            />

            <input
                type="text"
                placeholder="Image URL (e.g. https://...)"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}

            />

            {formData.image && (
                <img
                    src={formData.image}
                    alt="Preview"
                    className="image-preview"
                    style={{ maxWidth: '200px', marginTop: '10px' }}
                />
            )}

            <button type="submit">Add Client</button>
        </form>
    );
}

export default AddClientForm;
