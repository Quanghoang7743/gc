import { Link } from "react-router-dom"


function ListItem() {

    

  return (
    <div className="container mx-auto py-[5rem]">
  <h1 className="text-3xl font-bold mb-4 text-white">Genres</h1>
  <div className="grid grid-cols-7 gap-4">
    <Link to='' className="bg-green-700 p-4 rounded-[7px] flex items-center justify-between">
    <span className="text-white font-bold">INDIE</span>
    <i className="fas fa-lightbulb text-white" />
    </Link>
    <Link to='' className="bg-green-700 p-4 rounded-[7px] flex items-center justify-between">
      <span className="text-white font-bold">FAMILY FRIENDLY</span>
      <i className="fas fa-users text-white" />
    </Link>
    <Link to='' className="bg-green-700 p-4 rounded-[7px] flex items-center justify-between">
      <span className="text-white font-bold">SHOOTERS</span>
      <i className="fas fa-crosshairs text-white" />
    </Link>
    <Link to='' className="bg-teal-700 p-4 rounded-[7px] flex items-center justify-between">
      <span className="text-white font-bold">ACTION &amp; ADVENTURE</span>
      <i className="fas fa-ship text-white" />
    </Link>
    <Link to='' className="bg-teal-700 p-4 rounded-[7px] flex items-center justify-between">
      <span className="text-white font-bold">FIGHTERS &amp; BRAWLERS</span>
      <i className="fas fa-fist-raised text-white" />
    </Link>
    <Link to='' className="bg-teal-700 p-4 rounded-[7px] flex items-center justify-between">
      <span className="text-white font-bold">STRATEGY</span>
      <i className="fas fa-chess text-white" />
    </Link>
    <Link to='' className="bg-teal-700 p-4 rounded-[7px] flex items-center justify-between">
      <span className="text-white font-bold">SIMULATION</span>
      <i className="fas fa-horse text-white" />
    </Link>
    
  </div>
</div>

  )
}

export default ListItem
