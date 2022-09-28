import React from 'react';

const Card = (props) => {
   const exercise = props.exercise;
   const {name, time, description, img} = exercise;
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                {name}
                </h2>
                <p><span className='font-semibold'>Tips:</span> {description}</p>
                <h4 className='font-semibold'>Time Required: {time} Seconds</h4>
                <button className='bg-violet-500 p-2 rounded-lg text-xl font-semibold text-white'>Add to List</button>
            </div>
            </div>
        </div>
    );
};

export default Card;