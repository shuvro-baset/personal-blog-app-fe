import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs';
import Programming from '../../components/Programming/Programming';

const Home = () => {
    return (
        <>
            <Banner />
            <Programming />
            <LatestBlogs />

        </>
    );
};

export default Home;