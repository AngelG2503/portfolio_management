import React, { useState, useEffect } from 'react';
import { getContacts } from '../services/api';

function ContactsTable() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        try {
            const res = await getContacts();
            setContacts(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="data-view">
            <h2>Contact Form Submissions</h2>
            {contacts.length === 0 ? (
                <p>No contact submissions yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>City</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact._id}>
                                <td>{contact.fullName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.mobile}</td>
                                <td>{contact.city}</td>
                                <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default ContactsTable;
