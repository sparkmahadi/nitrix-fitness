import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Feed = () => {
    const [exercises, setExercises] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setExercises(data))
    } , [])

    return (
        <div className='grid grid-cols-3 gap-10 p-24'>
            {
                exercises.map(exercise => <Card key={exercise.name} exercise={exercise}></Card>)
            }
        </div>
    );
};

export default Feed;