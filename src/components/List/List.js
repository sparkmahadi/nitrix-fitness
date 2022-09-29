import React, { useEffect, useState } from 'react';
import './List.css'
const List = ({timeRequired}) => {
    const [breakTime, setBreakTime] = useState(0);
    const savedTime = localStorage.getItem('breakTime');
    useEffect(() => {
        if(savedTime){
            setBreakTime(savedTime)
        }
    } , [])
    const addBreak = (value) =>{
        if(savedTime){
            const newTime = parseInt(savedTime) + value;
            setBreakTime(newTime)
            localStorage.setItem('breakTime', newTime);
        }
        else{
            setBreakTime(value)
            localStorage.setItem('breakTime', value)
        }
    }
    return (
        <div className='bg-slate-200 px-2 lg:px-5 xl:px-5 2xl:px-10 py-2 md:py-5 w-36 md:w-full text-center md:text-left relative'>
            <div className='sticky top-0'>
                <div className='xl:flex 2xl:px-10 text-center items-center justify-center gap-5 py-2 md:py-5'>
                    <div className='bg-sky-300 rounded-lg mx-7 md:mx-14 xl:mx-0'>
                        <img className='mx-auto' src="profile.png" alt="" />
                    </div>
                    <div className='text-violet-700'>
                        <h2 className='font-semibold text-lg md:text-xl'>Md. Mahadi Hasan</h2>
                        <p>Chittagong, Bangladesh</p>
                    </div>
                </div>

                <div className='table-container py-2 md:py-5'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                            <tr className='t-headings'>
                                <th>Points</th>
                                <th>Value</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <td>Height</td>
                                <td>5'6" <small>ft</small></td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr>
                                <td>Weight</td>
                                <td>80 <small>KG</small></td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <td>Age</td>
                                <td>25 <small>Yrs</small></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                </div>

                <div className='pt-2 md:pt-5'>
                <h2 className='uppercase font-semibold md:text-xl'>Add a Break</h2>
                <div className='grid grid-cols-3 xl:grid-cols-5 gap-2 justify-around items-center bg-slate-300 p-2 md:p-3 2xl:p-5 rounded-xl my-5'>
                    <p onClick={()=>addBreak(10)} className='bg-slate-500 hover:bg-blue-500 lg:px-2 2xl:px-4 md:py-2 py-1 rounded-xl md:font-semibold md:text-md 2xl:text-lg text-white text-center'>10s</p>
                    <p onClick={()=>addBreak(20)} className='bg-slate-500 hover:bg-blue-500 lg:px-2 2xl:px-4 md:py-2 py-1 rounded-xl md:font-semibold md:text-md 2xl:text-lg text-white text-center'>20s</p>
                    <p onClick={()=>addBreak(30)} className='bg-slate-500 hover:bg-blue-500 lg:px-2 2xl:px-4 md:py-2 py-1 rounded-xl md:font-semibold md:text-md 2xl:text-lg text-white text-center'>30s</p>
                    <p onClick={()=>addBreak(40)} className='bg-slate-500 hover:bg-blue-500 lg:px-2 2xl:px-4 md:py-2 py-1 rounded-xl md:font-semibold md:text-md 2xl:text-lg text-white text-center'>40s</p>
                    <p onClick={()=>addBreak(50)} className='bg-slate-500 hover:bg-blue-500 lg:px-2 2xl:px-4 md:py-2 py-1 rounded-xl md:font-semibold md:text-md 2xl:text-lg text-white text-center'>50s</p>
                </div>
                </div>

                <div className='py-2 md:py-5'>
                <h2 className='uppercase font-semibold md:text-xl'>Exercise Details</h2>
                <div className='xl:flex items-center justify-around bg-slate-300 p-2 md:p-5 rounded-xl my-5 text-center'>
                    <h3 className='uppercase md:text-lg font-semibold'>Exercise Time</h3>
                    <p className='bg-slate-500 hover:bg-blue-500 md:px-4 py-1 md:py-2 rounded-xl font-semibold md:text-lg text-white'>{timeRequired} Seconds</p>
                </div>

                <div className='xl:flex items-center justify-around bg-slate-300 p-2 md:p-5 rounded-xl my-5 text-center'>
                    <h3 className='uppercase md:text-lg font-semibold'>Break Time</h3>
                    <p className='bg-slate-500 hover:bg-blue-500 md:px-4 py-1 md:py-2 rounded-xl font-semibold md:text-lg text-white'>{breakTime} Seconds</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default List;