// Newpage.js

import React, { useEffect, useState } from 'react';

const Newpage = () => {
    const [aboutInfo, setAboutInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('http://localhost:5002/aboutus')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('response is not OK');
                }
                return response.json();
            })
            .then((data) => {
                setAboutInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <p>error: {error.message}</p>;
    }

    return (
        <div>
            <h1>{aboutInfo.title}</h1>
            <p>{aboutInfo.welcomeMessage}</p>
            <p>{aboutInfo.description}</p>
            <img src={aboutInfo.imageUrl} alt="myphoto" />
        </div>
    );
};

export default Newpage;
