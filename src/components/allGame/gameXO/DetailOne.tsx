

import { useState } from 'react';
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
      <div className="relative mx-auto p-6 flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">
          <img
              alt=""
              className="absolute top-0 left-0 w-[1828px] h-[1130px] object-cover mix-blend-linear-dodge mb-4 rounded-xl filter brightness-50"
              height={100}
              src="https://play-lh.googleusercontent.com/53ohRJdlEEBuyiPuF2GBBjL3C41JKYvSfGPxQCoVuPSUbUtEjrJBiYMEHDBNdJ7cVg"
              width={500}
          />

            <div className="text-center mb-6 z-[999]">
              <img
                  alt=""
                  className="object-cover mix-blend-linear-dodge mb-4 rounded-xl mx-auto"
                  height={50}
                  src="https://play-lh.googleusercontent.com/53ohRJdlEEBuyiPuF2GBBjL3C41JKYvSfGPxQCoVuPSUbUtEjrJBiYMEHDBNdJ7cVg"
                  width={150}
              />
              <h2 className='font-medium text-white text-5xl'>Game XO</h2>
              <p className="text-white">Metascore: 70 | Deep Silver</p>
              <div className="flex justify-center items-center space-x-2 mt-2">
            <span className="border-1 text-white px-3 py-1 rounded-[5px]">
              STRATEGY
            </span>

                <div>
                  <form className="max-w-lg">
                    <label htmlFor="underline_select" className="sr-only">
                      Underline select
                    </label>
                    <select
                        id="underline_select"
                        defaultValue=""
                      onChange={handleChange}
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
          <Button onClick={handleLinkClick} className="bg-purple-600 text-white px-9 py-5 rounded-md mb-6 mt-4 z-[999]">Play
            free with Prime</Button>
          <div className="flex space-x-4 mb-6 z-[999]">
            <button className="flex items-center space-x-2 text-white font-extralight">
              <i className="fas fa-share"></i>
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 text-white font-extralight">
              <i className="fas fa-desktop"></i>
              <span>Add to Desktop</span>
            </button>
          </div>
          <p className="text-white mb-6 z-[999]">
            Included in Prime - available through Nov 30, 2024
          </p>
          <div className="w-full z-[999]">
            <h2 className="text-xl text-teal-50 mb-4">TRAILER &amp; SCREENSHOTS</h2>
            <div className="flex space-x-4 overflow-x-auto">
              <img
                  alt="Trailer thumbnail"
                  className="w-1/6 rounded-lg"
                  height={100}
                  src="https://play-lh.googleusercontent.com/Q5ymmR37SNDL2-ljuFYGk2w863nzmBDie2IGtVPON20xDmiE39HK8F7ElwDN67ibilk=w5120-h2880-rw"
                  width={200}
              />
              <img
                  alt="Screenshot 1"
                  className="w-1/6 rounded-lg"
                  height={100}
                  src="https://play-lh.googleusercontent.com/mjlLGvnaGKpXaxJfH8e9V3qljyAKL9NERhD_ZCpWnIXtD1fd5iGsm1JMwQYCQDNju_s=w5120-h2880-rw"
                  width={200}
              />
              <img
                  alt="Screenshot 2"
                  className="w-1/6 rounded-lg"
                  height={100}
                  src="https://play-lh.googleusercontent.com/9HFhhYdQzzWLMqZnbgExFjvfWa89NCb_18JxX2JlHo0cb1jwFpmV6Fw_J-P207QUAXY=w5120-h2880-rw"
                  width={200}
              />
              <img
                  alt="Screenshot 3"
                  className="w-1/6 rounded-lg"
                  height={100}
                  src="https://play-lh.googleusercontent.com/mBtlJXDj7YFSNqp3YYPOrvhIaSPMr6xAiDju5alP8__gw7BzFlKEljtFfWd2jZlq9pY=w5120-h2880-rw"
                  width={200}
              />
              <img
                  alt="Screenshot 4"
                  className="w-1/6 rounded-lg"
                  height={100}
                  src="https://play-lh.googleusercontent.com/xvRaHB4UDxG3_NZxCENJSlYOpht42HM1b2uTK7hq6d7jvZ32vUZNzBf-O316WGYzbX1r=w5120-h2880-rw"
                  width={200}
              />
            </div>

          </div>
          <div className="w-full mt-6 flex items-center gap-2 z-[999]">
            <i className="fab fa-twitch text-purple-600"></i>
            <h2 className="text-xl text-white">
              TWITCH STREAMS OF THIS GAME
            </h2>
            <p className='text-teal-50'>| Comming soon...</p>
          </div>
        </div>
      </div>


  )
}

export default DetailOne
