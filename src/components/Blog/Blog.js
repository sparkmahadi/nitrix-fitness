import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='lg:mx-8 xl:mx-24'>
            <h3 className=' bg-slate-200 text-2xl font-semibold px-2 py-2 uppercase'>Blog</h3>
            <div>

            <div className="bg-white rounded-lg px-2 pb-5 text-center md:text-left">

            <h4 className="font-semibold text-2xl pt-7">Question: How does React work?</h4>
                    <p className="pt-3"><span className='font-bold'>Answer: </span> React works on the basis of JSX codes. JSX is simply syntactic sugar for creating very specific JavaScript objects. We can write both html and javascript on a single file by maintaing some conventions. React converts this codes to objects. It uses bebel compiler to do so.
                    React basically maintains a virtual DOM which is look like the real DOM. When a change is necessary, It updates the virtual DOM and compares with the real DOM. Then, it just renders that part of real DOM in browser.
                    </p>

            <h4 className="font-semibold text-2xl pt-7">Question: What is the difference between props and state?</h4>
                    <div className="pt-3"><span className='font-bold'>Answer: </span> Difference between props and state:

                    <div className='table-difference'>
                        <table className='mx-auto mt-2'>
                            {/* <!-- head --> */}
                            <thead className='border-custom'>
                            <tr>
                                <th>Props</th>
                                <th>State</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* <!-- row 1 --> */}
                            <tr>
                                <td>The Data is passed from one component to another.</td>
                                <td>The Data is passed within the component only.</td>
                            </tr>
                            {/* <!-- row 2 --> */}
                            <tr className="hover">
                                <td>It is Immutable (cannot be modified).</td>
                                <td>	It is Mutable ( can be modified).</td>
                            </tr>
                            {/* <!-- row 3 --> */}
                            <tr>
                                <td>Props are read-only.</td>
                                <td>State is both read and write.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>


                    </div>

            <h4 className="font-semibold text-2xl pt-7">Question: What are the uses of useEffect except fetching data from API?</h4>
                    <div className="pt-3"><span className='font-bold'>Answer:</span><br/>
                    The uses are:
                        <ul className='list-disc list-inside'>
                            <li>validating input field.</li>
                            <li>live filtering.</li>
                            <li>trigger animation on new array value.</li>
                            <li>Load data from local storage or session storage.</li>
                        </ul>
                    </div>
            </div>


            </div>
        </div>
    );
};

export default Blog;