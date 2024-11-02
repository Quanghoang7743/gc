
import Header from '../components/header/HeaderO'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default UserLayout
