
import { Link } from 'react-router-dom'
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

function PlayMouseOne() {
  return (
    <div className='w-[100%] px-[3%] mt-5'>
     <div className="flex justify-between items-center">
        <h1 className='text-2xl text-white'>Play with mouse and keyboard</h1> 
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
        src="https://play-lh.googleusercontent.com/53ohRJdlEEBuyiPuF2GBBjL3C41JKYvSfGPxQCoVuPSUbUtEjrJBiYMEHDBNdJ7cVg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Game XO</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          <Link to='/game/gameXO'>Play Now</Link>
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
        src="https://m.media-amazon.com/images/I/81t8t9TyYLL.png"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Snake</p>
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
        src="https://st.gamevui.vn/images/image/2016/4/12/flappy-bird-2.jpg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-white/80">Flappy Bird</p>
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
        src="https://store-images.s-microsoft.com/image/apps.17472.9007199266246757.db625ec8-a024-470e-a413-924515c64b2c.316a1f72-e9d9-447b-8f0d-80b37c07d480?q=90&w=480&h=270"
        width={250}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small text-black/80 mr-2">Minesweeper</p>
        <Button className="text-tiny text-black bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        <Link to='#'>Play Now</Link>
        </Button>
      </CardFooter>
    </Card>
    
    </div>
    </div>
  )
}

export default PlayMouseOne
