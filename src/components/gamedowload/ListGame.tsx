import {Button} from "@nextui-org/react";
import {Link} from "react-router-dom";

const gameList = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5L_My1qFtmikfNduPo_9TTjhmN7lWh2bW9w&s",
        title: "Grand Theft Auto V",
        date: "11/11/2024",
        reviews: 4,
    },







    // Add more items here
];


function ListGame() {
    return(
        <>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                rel="stylesheet"
            />
            <div className="antialiased text-gray-900 p-8 min-h-screen">
                <h1 className='mb-8  text-white text-2xl font-semibold'>- New Games -</h1>
                <div className="flex  gap-6">
                    <div className="w-full flex flex-wrap gap-4">
                        {gameList.map((game, index) => (
                            <div key={index}
                                 className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                                <img
                                    className="h-48 w-full object-cover object-end"
                                    src={game.image}
                                    alt={game.title}
                                />
                                <div className="p-6">
                                    <div className="flex items-baseline">
                            <span
                                className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                                Update
                            </span>
                                        <div
                                            className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                            {game.date}
                                        </div>
                                    </div>
                                    <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                                        {game.title}
                                    </h4>
                                    <div className="mt-2 flex items-center">
                            <span className="text-teal-600 font-semibold">
                                {[...Array(game.reviews)].map((_, i) => (
                                    <i key={i} className="fas fa-star"/>
                                ))}
                                <span className="ml-2 text-gray-600 text-sm">{game.reviews} reviews</span>
                            </span>
                                    </div>
                                    <div className="flex items-center">
                                        <Link to='' className="bg-[#27D47B] mt-4 border-2 p-[0.4rem] rounded-lg">
                                            Game Cloud
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </>

    )
}

export default ListGame;