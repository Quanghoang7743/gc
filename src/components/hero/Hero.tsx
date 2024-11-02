import { faBolt, faCheck, faCloud, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@nextui-org/react"




function Hero() {
  return (
    <div>
        <div className='pt-[75px] pb-[75px] text-center'>
            <span className='text-xl text-white mb-3 block'>The Next Generation in Cloud Gaming</span>
            <h1 className='text-3xl text-white'>Your Games, Your Devices, RTX On</h1>
            <div className="pt-[2rem] px-[10%]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-[5rem] text-center">
                        <div>
                            <FontAwesomeIcon icon={faGamepad} className="text-white text-3xl"/>
                            <h2 className="text-xl font-bold mb-2 text-white mt-2">50+ Games</h2>
                            <p className="text-white">GameCloud connects to digital PC game stores so you can stream the games you already own. Plus, game purchases you make on your personal store accounts will always stay with you.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCloud} className="text-white text-3xl"/>
                            <h2 className="text-xl font-bold mb-2 text-white mt-2">All Your Devices</h2>
                            <p className="text-white">GameCloud instantly transforms your laptop, desktop, Mac, TV, Android device, iPhone, or iPad into the powerful PC gaming rig you’ve always dreamed of.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBolt} className="text-white text-3xl"/>
                            <h2 className="text-xl font-bold mb-2 text-white mt-2">GameCloud Performance</h2>
                            <p className="text-white">Our premium membership plans offer you fastest access to the highest performance GeForce RTX rigs for a high-resolution, ultra-low latency, and competitive experience.</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCheck} className="text-white text-3xl"/>
                            <h2 className="text-xl font-bold mb-2 text-white mt-2">No Game Downloads</h2>
                            <p className="text-white">Say goodbye to large game downloads, updates, and patches. All GameCloud games are always up to date, so you can spend less time waiting and more time gaming.</p>
                        </div>
              </div>
            </div>
            <div className="pt-[2rem]">
              <Button className="text-black text-[1.1rem] px-[3rem] py-6 rounded-none bg-[#5E9400] font-bold " >Join Today</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero
