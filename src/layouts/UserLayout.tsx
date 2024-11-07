
import FooterOne from '../components/footer/FooterOne'
import Header from '../components/header/HeaderO'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <FooterOne/>
    </div>
  )
}

export default UserLayout
