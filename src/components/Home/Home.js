import React from 'react';
import Feed from '../Feed/Feed';
import List from '../List/List';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container lg:gap-5'>
            <Feed></Feed>
            <List></List>
        </div>
    );
};

export default Home;