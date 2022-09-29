import React, { useState } from 'react';
import Feed from '../Feed/Feed';
import List from '../List/List';
import './Home.css'

let time = 0;
const Home = () => {
    const [timeRequired, setTime] = useState(0);
    const addToListHandler = (exercise) =>{
        time = time + exercise.time;
        setTime(time)
    }
    return (
        <div className='home-container lg:gap-5'>
            <Feed eventHandler={addToListHandler}></Feed>
            <List timeRequired={timeRequired}></List>
        </div>
    );
};

export default Home;