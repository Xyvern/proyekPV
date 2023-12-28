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
        element: <Home/>
      }
    ]
  }
])

function App() {
  const [user, setUser] = useState('')
  const [listUser, setListUser] = useState([])

  function handlelogin(nama,pass){
    let temp =[]
    // window.api.login().then(function(res){
    //   temp = res[0]
    //   console.log(temp);
    //     for (let index = 0; index < temp.length; index++) {
    //       if(isiuser[index].name===nama){
    //         if(isiuser[index].pass===pass){
    //           console.log('dr sini');
    //         }
    //         else{
    //           alert("Password Salah")
    //         }
    //       }
    //       else{
    //         alert("Username Tidak Terdaftar")
    //       }
    //   }
    // })
    console.log(nama,pass);
  }

  function register(nama,pass){
    let temp = []
    window.api.login().then(function(res){
      temp = res[0]
        for (let index = 0; index < temp.length; index++) {
          if(isiuser[index].name===nama){
            window.api.register(nama,pass)
          }
          else{
            alert("Username Sudah ada ")
          }
      }
    })
  }

  if (!user) {
    return <LoginRegister handlelogin={handlelogin}/>
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
