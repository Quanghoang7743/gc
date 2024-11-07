
import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@nextui-org/react";


function DetailOne() {

    const [selectedGameMode, setSelectedGameMode] = useState('');
    const navigate = useNavigate();
  
    const handleChange = (event) => {
      setSelectedGameMode(event.target.value);
    };
  
    const handleLinkClick = () => {
      if (selectedGameMode === 'single') {
        navigate('/game/gameXO/singleplayer');
      } else if (selectedGameMode === 'multiplayer') {
        navigate('/game/gameXO/multiplayer');
      } else {
        alert('Please select a game mode first.'); // Optional: alert if no mode is selected
      }
    };
      

  return (
    <div className="container mx-auto p-6">
    <div className="flex flex-col items-center">
      <img
        alt=""
        className="mb-4 rounded-xl"
        height={100}
        src="https://play-lh.googleusercontent.com/53ohRJdlEEBuyiPuF2GBBjL3C41JKYvSfGPxQCoVuPSUbUtEjrJBiYMEHDBNdJ7cVg"
        width={500}
      />
      <div className="text-center mb-6">
        <h2 className='font-medium text-white text-2xl'>Game XO</h2>
        <p className="text-gray-400">Metascore: 70 | Deep Silver</p>
        <div className="flex justify-center items-center space-x-2 mt-2">
          <span className="border-1 text-white px-3 py-1 rounded-lg">
            ADVENTURE
          </span>
          <span className="border-1 text-white px-3 py-1 rounded-lg">
            SHOOTER
          </span>
          <div>
          <form className="max-w-lg ">
                <label htmlFor="underline_select" className="sr-only">
                     Underline select
                </label>
                <select
                    id="underline_select"
                    defaultValue=""
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                    <option value="" disabled>
                        Choose game mode
                    </option>
                    <option value="single">Single Player</option>
                    <option value="multiplayer">Multiplayer</option>
                </select>
            </form>

          </div>
          
          <span className=" text-white px-3 py-1 rounded-full flex items-center font-extralight">
            Play with:
            <i className="fas fa-mouse mx-2"></i>
            
          </span>
        </div>
      </div>
      <Button onClick={handleLinkClick} className="bg-purple-600 text-white px-9 py-5 rounded-md mb-6 mt-4">Play free with Prime</Button>
      <div className="flex space-x-4 mb-6">
        <button className="flex items-center space-x-2 text-gray-400 font-extralight">
          <i className="fas fa-share"></i>
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-400 font-extralight">
          <i className="fas fa-desktop"></i>
          <span>Add to Desktop</span>
        </button>
      </div>
      <p className="text-gray-400 mb-6">
        Included in Prime - available through Nov 30, 2024
      </p>
      <div className="w-full">
        <h2 className="text-xl mb-4">TRAILER &amp; SCREENSHOTS</h2>
        <div className="flex space-x-4 overflow-x-auto">
          <img
            alt="Trailer thumbnail"
            className="w-1/5"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/wfy4nQxNndwPaC7eCfuV5IwJj0mdEasxfZhxqwSQFa1KDp3OB.jpg"
            width={200}
          />
          <img
            alt="Screenshot 1"
            className="w-1/5"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/BazbwQpO0DYbKFQO6sVlhGL66BfdlahYE2X5BdRfXgm1Q6tTA.jpg"
            width={200}
          />
          <img
            alt="Screenshot 2"
            className="w-1/5"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/6JLfW3mfg9l2804BRJQj9Cy6MfahVbsl1NgSWmX5r7Kyh0bnA.jpg"
            width={200}
          />
          <img
            alt="Screenshot 3"
            className="w-1/5"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/ZafAfeeC71heLmI096UGC45ggEDfzcVPWvANEOFr1kYqNke2JA.jpg"
            width={200}
          />
          <img
            alt="Screenshot 4"
            className="w-1/5"
            height={100}
            src="https://storage.googleapis.com/a1aa/image/YHxVTkwCgLJmOF4TtzmZ8aSmIB3bV9dJtSPW92QVeT6ZI92JA.jpg"
            width={200}
          />
        </div>
      </div>
      <div className="w-full mt-6 flex items-center gap-2">
        <i className="fab fa-twitch text-purple-600"></i>
        <h2 className="text-xl text-white">
          TWITCH STREAMS OF THIS GAME
        </h2>
      </div>
    </div>
  </div>
  
  )
}

export default DetailOne
