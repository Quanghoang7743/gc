

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex items-center gap-5'>
      <Link to='#' className='text-white hover:bg-slate-400 px-2 py-1 rounded-md'>Home</Link>
      <Link to='#' className='text-white hover:bg-slate-400 px-2 py-1 rounded-md'>Library</Link>
      <Link to='#' className='text-white hover:bg-slate-400 px-2 py-1 rounded-md'>Playlist</Link>
      <Link to='#' className='text-white hover:bg-slate-400 px-2 py-1 rounded-md'>Search</Link>
    </div>
  )
}

export default Navbar
