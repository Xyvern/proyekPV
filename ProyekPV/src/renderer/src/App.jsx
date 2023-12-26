import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginRegister from './components/pages/login/Login'
import Layout from './components/Layout'
import Home from './components/pages/home/home'

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children : [
      {
        path:'/',
        element:<Home/>
      }
    ]
  }
])

function App() {
  const [user, setUser] = useState('')
  const [listUser, setListUser] = useState([])

  if (!user) {
    return <LoginRegister/>
  } else {
    return (
      <div>
        <div>
        {/*
        welcome 
        logout button
        */}
        </div>
        <RouterProvider router ={router} />
      </div>
    )
  }
  
}

export default App
