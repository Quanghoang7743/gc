import {Link} from "react-router-dom";
import {Button} from "@nextui-org/react";


const cardData = [
    {
        title: 'Game XO',
        publisher: "QuangH",
        description: "Play with:",
        imageUrl: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1938090/169d4b074c035c8befff06f0ba1af6da62981931/capsule_616x353_alt_assets_20.jpg?t=1731517836",
        logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP02TCEZVSbrrQh9RjDR5LQ6ZO_XdG9AIOJw&s"
    },


]

function PlayCloudTwo() {
    return (
        <div className='w-[100%] px-[3%] mt-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-2xl text-white'>Most popular on cloud</h1>
                <div className="showAll px-3 py-1 rounded-md hover:bg-slate-400 text-white">
                    <Link to='#'>Show all</Link>
                </div>
            </div>

            <div className='py-[2rem] flex items-center gap-4'>
                {cardData.map((card, index) => (
                    <div key={index} className='w-[255px] h-[350px] bg-white rounded-[5px]'>
                        <img src={card.imageUrl} alt={card.title} className='w-[100%] h-[50%] rounded-[5px]'
                        />
                        <div className='flex justify-between items-center px-[3%] py-[1rem]'>
                            <div>
                                <h1 className='text-2xl font-bold'>{card.title}</h1>
                                <p className='font-medium'>{card.publisher}</p>
                                <p className='font-light text-[0.9rem]'>{card.description}</p>
                            </div>
                            <img className='w-[35px] h-[48px]'
                                 src={card.logoUrl} alt="Logo"/>
                        </div>
                        <Button className='px-[5rem] ml-3  rounded-[5px] bg-[#C7CCE4]'>Learn More</Button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PlayCloudTwo;