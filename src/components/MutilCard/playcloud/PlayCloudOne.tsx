import React from 'react'
import { Link } from 'react-router-dom'
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

function PlayCloudOne() {
  return (
    <div className='w-[100%] px-[3%] mt-5'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl text-white'>Most popular on cloud</h1>
        <div className="showAll px-3 py-1 rounded-md hover:bg-slate-400 text-white">
            <Link to='#'>Show all</Link>
        </div>
      </div>
      <div className='flex gap-3 items-center mt-5'>
        {/* Card 1 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Fortnite</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>

    {/* Card 2 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://gmedia.playstation.com/is/image/SIEPDC/call-of-duty-franchise-hub-keyart-01-en-21nov23?$facebook$"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Call Of Duty</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>

    {/* Card 3 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://upload.wikimedia.org/wikipedia/en/7/77/Sea_of_thieves_cover_art.jpg"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Sea Of Thieve</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Coming Soon...</Link>
        </Button>
      </CardFooter>
    </Card>

    {/* Card 4 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80 mr-2">Forza Hoziron 5</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>

    {/* Card 5 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Palworld_Steam_artwork.jpg/220px-Palworld_Steam_artwork.jpg"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80 mr-2">Palworld</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>
    {/* Card 6 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://static.voidu.com/cdn-cgi/image/format=auto/images/thumbs/0171288_mortal-kombat-11-ultimate-row1.png"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80 mr-2">Mortal Combat 11</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>
    {/* Card 7 */}
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={350}
        src="https://store-images.s-microsoft.com/image/apps.52261.14036931078975578.35527dd4-bd1c-43d9-90ff-3a801a47df6a.d5645ab8-82fd-46e0-b961-9fc179d12fe4"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80 mr-2">Ark Survivor</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>


    </div>
    </div>
  )
}

export default PlayCloudOne
