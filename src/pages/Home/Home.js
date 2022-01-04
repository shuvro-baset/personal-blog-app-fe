import React from 'react';
import Banner from '../../components/Banner/Banner';
import LatestBlogs from '../../components/LatestBlogs/LatestBlogs';
import Programming from '../../components/Programming/Programming';
import Subscribe from '../../components/Subscribe/Subscribe';
import Tech from '../../components/Tech/Tech';

const Home = () => {
    return (
        <>
            <Banner />
            <Programming />
            <LatestBlogs />
            <Tech />
            <Subscribe />
        </>
    );
};

export default Home;