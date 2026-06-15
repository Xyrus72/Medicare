import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/header.jsx'

const Root = () => {
  return (
    <div>  
        <h1>Welcome to the root</h1> 
        <Header />
        <Outlet />



    </div>
  )
}   

export default Root