import React, { useState } from 'react';
import AddProjectForm from '../components/AddProjectForm';
import AddClientForm from '../components/AddClientForm';
import ContactsTable from '../components/ContactsTable';
import SubscribersTable from '../components/SubscribersTable';
import './AdminPanel.css';

function AdminPanel() {
    const [activeTab, setActiveTab] = useState('projects');

    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>

            <div className="tabs">
                <button
                    onClick={() => setActiveTab('projects')}
                    className={activeTab === 'projects' ? 'active' : ''}
                >
                    Add Project
                </button>
                <button
                    onClick={() => setActiveTab('clients')}
                    className={activeTab === 'clients' ? 'active' : ''}
                >
                    Add Client
                </button>
                <button
                    onClick={() => setActiveTab('contacts')}
                    className={activeTab === 'contacts' ? 'active' : ''}
                >
                    Contact Submissions
                </button>
                <button
                    onClick={() => setActiveTab('subscribers')}
                    className={activeTab === 'subscribers' ? 'active' : ''}
                >
                    Subscribers
                </button>
            </div>

            {activeTab === 'projects' && <AddProjectForm />}
            {activeTab === 'clients' && <AddClientForm />}
            {activeTab === 'contacts' && <ContactsTable />}
            {activeTab === 'subscribers' && <SubscribersTable />}
        </div>
    );
}

export default AdminPanel;
