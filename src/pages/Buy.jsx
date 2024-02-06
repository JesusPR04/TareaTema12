import React from 'react'
import { useState } from 'react';

function Buy() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        openModal();
    };

    const [ticket, setTicket] = useState(0)
    function numTickects(e) {
        setTicket(e.target.value)
    }

    const [room, setRoom] = useState('')
    function roomType(e) {
        setRoom(e.target.value)
    }

    const [schedule, setSchedule] = useState('')
    function scheduleValue(e) {
        setSchedule(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className=" mt-28 flex flex-col gap-4 items-cente max-w-xs px-4 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-md mx-auto">
                <label className="flex flex-col">
                    <span className="mb-1">Tickets:</span>
                    <input type="number" name="tickets" onInput={numTickects} value={ticket} className="w-full border border-gray-300 rounded-md p-2" />
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Room Type:</span>
                    <select name="roomType" onChange={roomType} value={room} className="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Select a room type</option>
                        <option value="2D">2D</option>
                        <option value="3D">3D</option>
                        <option value="IMAX">IMAX</option>
                    </select>
                </label>
                <label className="flex flex-col">
                    <span className="mb-1">Time:</span>
                    <select name="time" value={schedule} onChange={scheduleValue} className="w-full border border-gray-300 rounded-md p-2">
                        <option value="">Select a time</option>
                        <option value="14:00">14:00</option>
                        <option value="16:00">16:00</option>
                        <option value="18:00">18:00</option>
                        <option value="20:00">20:00</option>
                        <option value="22:00">22:00</option>
                    </select>
                </label>
                <button type='submit' className="block mt-6 bg-[#0A12A6] hover:bg-[#848cdc] text-white font-semibold py-3 px-6 rounded-lg text-center">Submit</button>
            </form>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-10">
                    <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                    <div className="bg-white p-8 rounded-lg shadow-xl z-20">
                        <h2 className="text-xl font-bold mb-4">Thank you, enjoy !</h2>
                        <div className='flex flex-wrap justify-start gap-4'>
                            <h3 className='font-semibold'>Tickets: </h3>
                            <p>{ticket}</p>
                        </div>
                        <div className='flex flex-wrap justify-start gap-4'>
                            <h3 className='font-semibold'>Room: </h3>
                            <p>{room}</p>
                        </div>
                        <div className='flex flex-wrap justify-start gap-4'>
                            <h3 className='font-semibold'>Schedule: </h3>
                            <p>{schedule}</p>
                        </div>
                        <hr className='border-0 h-[2px] bg-[#1b2430] rounded shadow-md my-4' />
                        <div className='flex flex-wrap justify-start gap-4'>
                            <h3 className='font-semibold'>Total cost: </h3>
                            <p>20 $</p>
                        </div>
                        <button onClick={closeModal} className="mt-4 bg-[#0A12A6] hover:bg-[#848cdc] text-white py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Buy