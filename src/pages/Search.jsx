import React, { useEffect } from 'react';
import { useState } from 'react';
import img from '../Images/pelicula.png';
import Script2 from '../Services/Script2';

function Search() {
    const [busqueda, setBusqueda] = useState('');

    function valorInput(e) {
        setBusqueda(e.target.value);
    }

    return (
        <>
            <div className='flex flex-row justify-center gap-4'>
                <img className='w-28 h-28 mt-32 mb-1' src={img} alt="Search icon" />
                <h1 className='text-8xl text-center text-[#1b2430] mt-32 mb-1'>Movies</h1>
            </div>

            <div className="flex justify-center items-center">
                <form className="w-full max-w-lg">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" value={busqueda} onInput={valorInput} className="block w-full mt-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search a movie." required />
                    </div>
                </form>
            </div>

            <Script2 busqueda={busqueda} ></Script2>
        </>
    )
}

export default Search