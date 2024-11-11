import {Button} from "@nextui-org/react";
import {Link} from "react-router-dom";

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
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                        {/*E11*/}
                        {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
                        <img
                            className="h-48 w-full object-cover object-end"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5L_My1qFtmikfNduPo_9TTjhmN7lWh2bW9w&s"
                            alt="Home in Countryside"
                        />
                        <div className="p-6">
                            <div className="flex items-baseline">
                        <span
                            className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                        Update
                        </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                    11/11/2024
                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                                Grand Theft Auto V
                            </h4>

                            <div className="mt-2 flex items-center">
                                <span className="text-teal-600 font-semibold">
                                  <span>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <i className="fas fa-star"/>
                                    <span></span>
                                    <span className="ml-2 text-gray-600 text-sm">4 reviews</span>
                                  </span>
                                </span>
                            </div>
                            <div className='flex items-center'>
                                <Link to='' className='mt-4 p-[0.4rem] w-1/2 bg-[#0CEEDD] rounded-lg'>Download Game</Link>
                                <Link to='' className='ml-4 mt-4 border-2 p-[0.4rem] rounded-lg  '>Game Cloud</Link>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                        {/*E11*/}
                        {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
                        <img
                            className="h-48 w-full object-cover object-end"
                            src="https://cdn.tgdd.vn//GameApp/-1//forza-horizon-5-yeu-cau-khong-gian-luu-tru-lon-hon-103gb-cau-thumb-800x450.jpg"
                            alt="Home in Countryside"
                        />
                        <div className="p-6">
                            <div className="flex items-baseline">
                        <span
                            className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                        New
                        </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                    22/10/2024
                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                                Forza Hozizon 5
                            </h4>

                            <div className="mt-2 flex items-center">
                            <span className="text-teal-600 font-semibold">
                              <span>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="far fa-star"/>
                                <i className="far fa-star"/>
                                <span></span>
                                <span className="ml-2 text-gray-600 text-sm">3 reviews</span>
                              </span>
                            </span>
                            </div>
                            <div className='flex items-center'>
                                <Link to='' className='mt-4 p-[0.4rem] w-1/2 bg-[#0CEEDD] rounded-lg'>Download
                                    Game</Link>
                                <Link to='' className='ml-4 mt-4 border-2 p-[0.4rem] rounded-lg  '>Game Cloud</Link>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                        {/*E11*/}
                        {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
                        <img
                            className="h-48 w-full object-cover object-end"
                            src="https://store-images.s-microsoft.com/image/apps.58752.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.95fdf1a1-efd6-4938-8100-8abae91695d6?q=90&w=480&h=270"
                            alt="Home in Countryside"
                        />
                        <div className="p-6">
                            <div className="flex items-baseline">
                        <span
                            className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                        New
                        </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                    22/10/2024
                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                                Red Dead Redemption 2
                            </h4>

                            <div className="mt-2 flex items-center">
                            <span className="text-teal-600 font-semibold">
                              <span>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <span></span>
                                <span className="ml-2 text-gray-600 text-sm">1 reviews</span>
                              </span>
                            </span>
                            </div>
                            <div className='flex items-center'>
                                <Link to='' className='mt-4 p-[0.4rem] w-1/2 bg-[#0CEEDD] rounded-lg'>Download
                                    Game</Link>
                                <Link to='' className='ml-4 mt-4 border-2 p-[0.4rem] rounded-lg  '>Game Cloud</Link>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                        {/*E11*/}
                        {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
                        <img
                            className="h-48 w-full object-cover object-end"
                            src="https://image.api.playstation.com/vulcan/ap/rnd/202009/2502/rB3GRFvdPmaALiGt89ysflQ4.jpg"
                            alt="Home in Countryside"
                        />
                        <div className="p-6">
                            <div className="flex items-baseline">
                        <span
                            className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                        New
                        </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                    31/10/2024
                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                                FallOut 4
                            </h4>

                            <div className="mt-2 flex items-center">
                            <span className="text-teal-600 font-semibold">
                              <span>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="far fa-star"/>
                                <span></span>
                                <span className="ml-2 text-gray-600 text-sm">2 reviews</span>
                              </span>
                            </span>
                            </div>
                            <div className='flex items-center'>
                                <Link to='' className='mt-4 p-[0.4rem] w-1/2 bg-[#0CEEDD] rounded-lg'>Download
                                    Game</Link>
                                <Link to='' className='ml-4 mt-4 border-2 p-[0.4rem] rounded-lg  '>Game Cloud</Link>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
                        {/*E11*/}
                        {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
                        <img
                            className="h-48 w-full object-cover object-end"
                            src="https://store-images.s-microsoft.com/image/apps.45242.71571739681700792.c61fa2d7-3d69-4edf-8e51-accc41d47823.8a16b21a-96c4-474e-8fd4-629b9bc622ad?q=90&w=480&h=270"
                            alt="Home in Countryside"
                        />
                        <div className="p-6">
                            <div className="flex items-baseline">
                        <span
                            className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                        New
                        </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                                    07/11/2024
                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                                Resident Evil 2
                            </h4>

                            <div className="mt-2 flex items-center">
                            <span className="text-teal-600 font-semibold">
                              <span>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="fas fa-star"/>
                                <i className="far fa-star"/>
                                <span></span>
                                <span className="ml-2 text-gray-600 text-sm">1 reviews</span>
                              </span>
                            </span>
                            </div>
                            <div className='flex items-center'>
                                <Link to='' className='mt-4 p-[0.4rem] w-1/2 bg-[#0CEEDD] rounded-lg'>Download
                                    Game</Link>
                                <Link to='' className='ml-4 mt-4 border-2 p-[0.4rem] rounded-lg  '>Game Cloud</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ListGame;