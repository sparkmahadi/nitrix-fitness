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
            <h2 className='bg-slate-200 text-md text-center my-2 md:text-lg md:text-left md:my-5 xl:mt-16 lg:text-2xl mx-3 lg:mx-8 xl:mx-24 font-semibold rounded-lg px-2 py-1'>Select Today's Exercise Plan</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-10 px-3 lg:px-8 xl:px-24 py-3 lg:py-10'>
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