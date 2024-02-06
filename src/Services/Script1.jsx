import React from 'react'
import Slider from '../components/Slider';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Script1() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=8db114e117dd9d4009bbd6b5ca97617f';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Extracción de las rutas de las imágenes para el slider
        const slidesData = data.results;
        setSlides(slidesData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
      <div className='flex-1'>
        <Slider>
          {slides.map((s) => (
            <img key={s.id} src={`https://image.tmdb.org/t/p/original${s.poster_path}`} alt={s.title} />
          ))}
        </Slider>
      </div>
      <div className='flex-1'>
        <h1 className='text-8xl text-[#1b2430] mb-1'>Popular Movies</h1>
        <h4 className='text-2xl mb-4 text-[#0A12A6]'><b>CINEXPERIENCE</b></h4>
        <p className='mb-4'>Explore the latest blockbusters and immerse yourself in a world of cinematic magic. From pulse-pounding action to heartwarming dramas, there's something for every movie lover. Join us for an unforgettable cinematic experience that will leave you on the edge of your seat.</p>
        <p className='mb-4'>Indulge in the excitement of exclusive showings and be the first to witness the biggest movies of the year. With our curated selection of popular titles, you'll discover new favorites and revisit timeless classics.</p>
        <p className=''>Book your tickets now and secure your seats for an epic movie adventure. Whether you're planning a solo outing or a family night out, our cinema offers the perfect setting for memorable moments and cinematic thrills.</p>
        <Link className='block mt-6 bg-[#0A12A6] text-center hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg' to='/movies'>
            Movies
        </Link>
      </div>
    </div>
  );
}

export default Script1