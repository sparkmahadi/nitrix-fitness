import React from 'react';

const Header = () => {
    return (

        <div className=' bg-blue-300 py-2'>
            <div className='lg:px-8 xl:px-24 flex justify-center lg:justify-start items-center'>
                <img src="favicon.png" alt="" />
                <h3 className='text-3xl font-semibold text-violet-700 pl-2'>NiTriX Fitness</h3>
            </div>
        </div>
    );
};

export default Header;