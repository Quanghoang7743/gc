import {Button, Select, SelectItem} from "@nextui-org/react";
import {Link} from "react-router-dom";

export const genre = [
    {key: "Action", label: "Action"},
    {key: "Honor", label: "Honor"},

];

export const gametypes = [
    {key: 'Single Player', label: "Single Player"},
    {key: 'Multi Player', label: "Multi Player"},
    {key:'Online Co-op', label:'Online Co-op'}
]

export const mystuff = [
    {key: 'Epic Games', label: "Epic Games"},
    {key: 'EA Games', label: "EA Games"},
]

export const sortBy = [
    {key: 'Title A-Z', label: "Title A-Z"},
]

const gameList = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5L_My1qFtmikfNduPo_9TTjhmN7lWh2bW9w&s",
        title: "Grand Theft Auto V",
        date: "11/11/2024",
        reviews: 4,
    },




    // Add more items here
];


function Library() {

    return(
        <div className="p-[3rem] h-[100vh]">
            <h1 className='text-white text-[3rem] font-extralight'>Library</h1>
            <div className="flex gap-6">
                <div className="flex flex-col gap-6">
                    <Select
                        label="Genre"
                        className="w-[300px]" // Adjust width as needed
                    >
                        {genre.map((genre) => (
                            <SelectItem key={genre.key}>
                                {genre.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        label="Game Type"
                        className="w-[300]" // Adjust width as needed
                    >
                        {gametypes.map((gametypes) => (
                            <SelectItem key={gametypes.key}>
                                {gametypes.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        label="My Stuffs"
                        className="w-[300]" // Adjust width as needed
                    >
                        {mystuff.map((mystuff) => (
                            <SelectItem key={mystuff.key}>
                                {mystuff.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Select
                        label="Sort by"
                        className="w-[300]" // Adjust width as needed
                    >
                        {sortBy.map((sortBy) => (
                            <SelectItem key={sortBy.key}>
                                {sortBy.label}
                            </SelectItem>
                        ))}
                    </Select>
                    <Button
                        className='px-[4rem] bg-gray-600 rounded-lg mt-[2rem] text-[1rem] border-1 text-white py-[1.5rem]'>
                        Research
                    </Button>
                </div>


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
                                    <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
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
    )
}

export default Library;