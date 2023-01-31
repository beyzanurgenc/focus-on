import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const mockData = useLoaderData();
    console.log(mockData);
    return (
        <div>
            Home Page
        </div>
    )
}

export default Home;