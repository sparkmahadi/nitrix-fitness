import React from 'react';
import './List.css'
const List = () => {
    return (
        <div className='bg-slate-200 px-10 py-5 relative'>
            <div className='sticky top-0'>
                <div className='flex items-center justify-center gap-5 py-5'>
                    <div className='bg-sky-300 rounded-lg'>
                        <img src="profile.png" alt="" />
                    </div>
                    <div className='text-violet-700'>
                        <h2 className='text-2xl'>Md. Mahadi Hasan</h2>
                        <p>Chittagong, Bangladesh</p>
                    </div>
                </div>

                <div className='table-container py-5'>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                            <tr>
                                <th>Parametres</th>
                                <th>Value</th>
                                <th>Unit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <td>Height</td>
                                <td>5'6"</td>
                                <td>Feet,Inch</td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr>
                                <td>Weight</td>
                                <td>80</td>
                                <td>KG</td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <td>Age</td>
                                <td>25</td>
                                <td>Years</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>

                </div>

                <div className='pt-5'>
                <h2 className='uppercase font-semibold text-xl'>Add a Break</h2>
                <div className='flex justify-around items-center bg-slate-300 p-5 rounded-xl my-5'>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>10s</p>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>20s</p>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>30s</p>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>40s</p>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>50s</p>
                </div>
                </div>

                <div className='py-5'>
                <h2 className='uppercase font-semibold text-xl'>Exercise Details</h2>
                <div className='flex items-center justify-around bg-slate-300 p-5 rounded-xl my-5'>
                    <h3 className='uppercase text-lg font-semibold'>Exercise Time</h3>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>10 Seconds</p>
                </div>

                <div className='flex items-center justify-around bg-slate-300 p-5 rounded-xl my-5'>
                    <h3 className='uppercase text-lg font-semibold'>Break Time</h3>
                    <p className='bg-slate-500 hover:bg-blue-500 px-4 py-2 rounded-xl font-semibold text-lg text-white'>10 Seconds</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default List;