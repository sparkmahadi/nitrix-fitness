import React from 'react';
import Feed from '../Feed/Feed';
import List from '../List/List';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <Feed></Feed>
            <List></List>
        </div>
    );
};

export default Home;