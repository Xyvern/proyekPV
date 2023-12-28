import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useEffect, useState } from 'react'
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
        element: <Home/>
      }
    ]
  }
])

function App() {
  const [user, setUser] = useState('')
  const [listUser, setListUser] = useState([])

  function handlelogin(nama,pass){
    let temp = []
    window.api.login().then(function(res){
      temp = res[0]
      console.log(temp);
      const found = temp.find((x) => x.user_username === nama) 
      console.log(found);
      if(!found){
        alert("Username tidak terdaftar")
      }
      else if(found.user_password !== pass){
        alert("Password tidak sesuai")
      }
      else{
        setUser(nama)
        localStorage.setItem('user',nama)
      }
    })
  }

  
  function handleregister(nama,email,notelp,pass){
    let temp = []
    window.api.login().then(function(res){
      temp = res[0]
      const found = temp.find((x) => x.user_username === nama)
      if(found){
        alert("Username sudah ada")
      }
      else{
        window.api.register(nama,email,notelp,pass).then(function(){})
      }
    })
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    setUser(user)
  },[])
  
  if (!user) {
    return <LoginRegister handlelogin={handlelogin} handleregister={handleregister}/>
  } else {
    return (
      <div>
        <div>
          <h1>Welcome {user}!</h1>
        {/*logout button*/}
        </div>
        <RouterProvider router ={router} />
      </div>
    )
  }
  
}

export default App
