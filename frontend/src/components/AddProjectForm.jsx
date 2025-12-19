import React, { useState } from 'react';
import { addProject } from '../services/api';

function AddProjectForm() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: ''   // will hold URL
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // DELETE this block:
        // if (!formData.image) {
        //   alert('Please enter an image URL.');
        //   return;
        // }

        try {
            await addProject(formData);
            alert('Project added successfully!');
            setFormData({ name: '', description: '', image: '' });
        } catch (err) {
            console.error('Submit error:', err);
            alert('Error adding project');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="admin-form">
            <h2>Add New Project</h2>

            <input
                type="text"
                placeholder="Project Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />

            <textarea
                placeholder="Project Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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

            <button type="submit">Add Project</button>
        </form>
    );
}

export default AddProjectForm;
