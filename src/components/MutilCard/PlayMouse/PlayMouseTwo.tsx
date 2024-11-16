import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Modal, Text } from "@nextui-org/react";

const cardData = [
    {
        title: 'Game XO',
        publisher: "QuangH",
        description: "Play with:",
        details: "This is a fun Tic Tac Toe game. You can play with your friends or against an AI.",
        imageUrl: "https://thumbs.dreamstime.com/b/tic-tac-toe-xo-game-hand-drawn-grid-doodle-template-vector-illustration-tic-tac-toe-xo-game-hand-drawn-grid-doodle-template-vector-293357686.jpg",
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP02TCEZVSbrrQh9RjDR5LQ6ZO_XdG9AIOJw&s"
    },
];

function PlayMouseTwo() {
   const [showModal, setShowModal] = useState(false);

    return (
        <div className='w-[100%] px-[3%] mt-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl text-white'>Play with mouse and keyboard</h1>
                <div className="showAll px-3 py-1 rounded-md hover:bg-slate-400 text-white">
                    <Link to='#'>Show all</Link>
                </div>
            </div>

            <div className='py-[2rem] flex items-center gap-4'>
                {cardData.map((card, index) => (
                    <div key={index} className='w-[255px] h-[350px] bg-white rounded-[5px]'>
                        <img src={card.imageUrl} alt={card.title}
                             className='w-[100%] h-[50%] rounded-[5px] object-fill'/>
                        <div className='flex justify-between items-center px-[3%] py-[1rem]'>
                            <div>
                                <h1 className='text-2xl font-bold'>{card.title}</h1>
                                <p className='font-medium'>{card.publisher}</p>
                                <p className='font-light text-[0.9rem]'>{card.description}</p>
                            </div>
                            <img className='w-[35px] h-[48px]' src={card.logoUrl} alt="Logo"/>
                        </div>
                        <Button onClick={() => setShowModal(true)} className='px-[5rem] ml-3 rounded-[5px] bg-[#C7CCE4]' >Learn More</Button>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {showModal && (
                <div
                    id="default-modal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
                >
                    <section
                        className="product grid grid-cols-[0.9fr_1fr] mx-auto my-10 px-0 py-10 min-w-[600px] bg-white rounded-lg">
                        <div className="product__photo relative">
                            <button
                                onClick={() => setShowModal(false)}
                                type="button"
                                className="absolute top-[-8%] right-[-133%] text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div
                                className="photo-container absolute left-[-2.5em] grid grid-rows-1 w-full h-full rounded-lg ">

                                <div
                                    className="photo-main relative rounded-lg ">

                                    <img
                                        src="https://thumbs.dreamstime.com/b/tic-tac-toe-xo-game-hand-drawn-grid-doodle-template-vector-illustration-tic-tac-toe-xo-game-hand-drawn-grid-doodle-template-vector-293357686.jpg"
                                        alt="green apple slice"
                                        className=" absolute top-[3rem] max-w-[100%] saturate-[150%] contrast-[120%] rounded-md hue-rotate-[10deg] drop-shadow-lg"
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="product__info px-4 py-0">
                            <div className="title mb-2">
                                <h1 className="text-2xl font-extrabold text-gray-700">Game XO</h1>
                                <span className="text-xs text-gray-400">ID:</span>
                            </div>


                            <div className="variant overflow-auto mb-6">
                                <h3 className="text-[1rem] font-semibold mb-4">CHOSE</h3>
                                <ul className="flex space-x-1">
                                    <li className="w-[10rem] h-9 p-1 text-center border border-gray-300 rounded-md cursor-pointer">
                                        <h2>SinglePlay</h2>
                                    </li>
                                    <li className="w-[10rem] h-9 p-1 text-center border-1  rounded-md cursor-pointer">
                                        <h2>MultiPlayer</h2>
                                    </li>

                                </ul>
                            </div>
                            <div className="variant overflow-auto mb-6">
                                <h3 className="text-[1rem] font-semibold mb-4">SELECT GAME MODE</h3>
                                <ul className="flex space-x-1">
                                    <li className="w-[10rem] h-9 p-1 text-center border border-gray-300 rounded-md cursor-pointer">
                                        <h2>SinglePlay</h2>
                                    </li>
                                    <li className="w-[10rem] h-9 p-1 text-center border-1  rounded-md cursor-pointer">
                                        <h2>MultiPlayer</h2>
                                    </li>

                                </ul>
                            </div>

                            <div className="description mb-8">
                                <h3 className="text-lg font-semibold mb-2">BENEFITS</h3>
                                <ul className="list-disc list-inside text-sm space-y-1">
                                    <li>Apples are nutritious</li>
                                    <li>Apples may be good for weight loss</li>
                                    <li>Apples may be good for bone health</li>
                                    <li>They're linked to a lower risk of diabetes</li>
                                </ul>
                            </div>

                            <button
                                className="buy--btn py-3 px-8 bg-green-500 text-white text-sm font-bold rounded-lg shadow-lg transform transition active:scale-95">
                                ADD TO CART
                            </button>
                        </div>
                    </section>

                </div>
            )}

        </div>
    );
}

export default PlayMouseTwo;
