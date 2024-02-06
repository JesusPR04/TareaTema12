import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Script2({ busqueda }) {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        let url;
        if (busqueda === "") {
            url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=8db114e117dd9d4009bbd6b5ca97617f';
        } else {
            url = `https://api.themoviedb.org/3/search/movie?api_key=8db114e117dd9d4009bbd6b5ca97617f&query=${busqueda}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const slidesData = data.results;
                setSlides(slidesData);
            })
            .catch(error => console.error(error));
    }, [busqueda]);

    return (
        <div className='mt-10 flex flex-wrap justify-around max-w-full max-h-full'>
            {slides.map(movie => (
                <Link to={`/information/${movie.id}`} className='cursor-pointer'>
                    <div key={movie.id} className="relative group overflow-hidden rounded-lg shadow-lg m-4 h-[500px] w-[300px]">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-center text-white">
                            <h3 className="text-2xl font-semibold px-4 text-center">{movie.title}</h3>
                            <p className="text-sm font-semibold text-justify p-4">{movie.overview}</p>
                            <h3 className="text-xl font-semibold mb-4">{movie.release_date}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Script2