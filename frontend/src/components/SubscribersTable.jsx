import React, { useState, useEffect } from 'react';
import { getSubscribers } from '../services/api';

function SubscribersTable() {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetchSubscribers();
    }, []);

    const fetchSubscribers = async () => {
        try {
            const res = await getSubscribers();
            setSubscribers(res.data.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="data-view">
            <h2>Newsletter Subscribers</h2>
            {subscribers.length === 0 ? (
                <p>No subscribers yet.</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Subscribed On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscribers.map((sub) => (
                            <tr key={sub._id}>
                                <td>{sub.email}</td>
                                <td>{new Date(sub.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default SubscribersTable;
