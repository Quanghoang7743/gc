//import React from 'react'


import { Routes, Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Home from '../pages/user/Home'
import GameXOmain from '../components/allGame/gameXO/GameXOmain'

function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/game/gameXO' element={<GameXOmain/>}/>
            </Route>
        </Routes>


    </div>
  )
}

export default UserRouter
