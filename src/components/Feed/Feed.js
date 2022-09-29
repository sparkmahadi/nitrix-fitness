import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Card from '../Card/Card';

const Feed = ({eventHandler}) => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } , [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10 p-3 lg:p-8 xl:p-24'>
            {
                exercises.map(exercise => <Card key={exercise.name} eventHandler={eventHandler} exercise={exercise}></Card>)
            }
            
            
        </div>
        <div>
            <Blog></Blog>
        </div>
        </div>
    );
};

export default Feed;