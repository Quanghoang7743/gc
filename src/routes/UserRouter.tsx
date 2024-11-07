//import React from 'react'


import { Routes, Route } from 'react-router-dom'
import UserLayout from '../layouts/UserLayout'
import Home from '../pages/user/Home'
import GameXOmain from '../components/allGame/gameXO/GameXOmain'
import Login from '../pages/login/Login'
import DetailOne from '../components/allGame/gameXO/DetailOne'
import GameXOTwo from '../components/allGame/gameXO/GameXOTwo'
import Register from '../components/login/Register'


function UserRouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<UserLayout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/game/gameXO' element={<DetailOne/>}/>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/game/gameXO/singleplayer' element={<GameXOmain/>}></Route>
                <Route path='/game/gameXO/multiplayer' element={<GameXOTwo/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Route>
        <Route path='/game-selector' element={<DetailOne />} /> 
        </Routes>

    </div>
  )
}

export default UserRouter
