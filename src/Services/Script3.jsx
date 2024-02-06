import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/ButtonFavourite.css'

import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

function Script3() {
    const { id } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=8db114e117dd9d4009bbd6b5ca97617f`;
        fetch(url)
            .then(response => response.json())
            .then(data => setInfo(data))
            .catch(err => console.error(err))
    }, [id]);

    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='flex flex-col lg:flex-row lg:justify-between items-start w-full max-w-5xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8 mt-32 mb-32 text-balance'>
            <div className='flex-1'>
                {info && (
                    <img src={`https://image.tmdb.org/t/p/original${info.poster_path}`} alt="Image" className='w-full rounded-lg' />
                )}
            </div>
            <div className='flex-1'>
                {info && (
                    <>
                        <div className='flex flex-wrap gap-8'>
                            <h1 className='text-6xl text-[#1b2430] mb-1'>{info.title}</h1>
                            <button className='boton' onClick={handleClick}>
                                    {isActive ? <HiHeart size={25} color="red" /> : <HiOutlineHeart size={25} />}
                            </button>
                        </div>
                        <h4 className='text-2xl mt-8 mb-4 text-[#0A12A6]'><b>CINEXPERIENCE</b></h4>
                        <p className='mb-4'><b className='text-[#1b2430]'>Overview</b><br />{info.overview}</p>
                        <div className='mb-4'><b className='text-[#1b2430]'>Genres</b><br />
                            <div className="flex flex-wrap justify-around">
                                {info.genres.map((g) => (
                                    <p className='bg-[#0A12A6] p-2 font-semibold text-sm text-white rounded-3xl'>{g.name}</p>
                                ))}
                            </div>
                        </div>
                        <p className='mb-4'><b className='text-[#1b2430]'>Qualification</b><br />
                            <span className='font-semibold flex flex-wrap gap-2'>
                                <p>{info.vote_average}</p>
                                <i class="fa-solid fa-star mt-1"></i>
                            </span>
                        </p>
                        <p className='mb-4'><b className='text-[#1b2430]'>Release date</b><br />
                            <span className='font-semibold'>{info.release_date}</span>
                        </p>
                        <p className=''><b className='text-[#1b2430]'>Language</b><br />
                            <span className='font-semibold'>{info.spoken_languages[0].name}</span>
                        </p>

                        <Link className='block mt-6 bg-[#0A12A6] hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg text-center' to='/buy'>
                            Buy now !
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Script3