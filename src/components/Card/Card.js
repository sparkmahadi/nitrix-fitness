import React from 'react';
import './Card.css'

const Card = ({exercise, eventHandler}) => {
   const {name, time, description, img} = exercise;
   
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
           <div>
           <figure><img src={img} alt="Shoes" /></figure>
           </div>
            <div className="card-body p-2 xl:p-3 2xl:p-8 2xl:mb-7">
                <div className='relative'>
                    <h2 className="card-title xl:text-xl 2xl:text-2xl">
                    {name}
                    </h2>
                    <p><span className='font-semibold'>Tips:</span> {description}</p>
                    <h4 className='font-semibold'>Time Required: {time} Seconds</h4>
                </div>
            </div>
                <button onClick={()=>eventHandler(exercise)} className='bg-violet-500 p-1 md:p-2 rounded-bottom-lg md:text-xl font-semibold text-white w-full absolute bottom-0'>Add to List</button>
            </div>
        </div>
    );  
};

export default Card;