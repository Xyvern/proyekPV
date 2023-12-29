import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginRegister from './components/pages/login/Login'
import Layout from './components/Layout'
import Filter from './components/pages/filter/filter'
import MyFavourites from './components/pages/myfavourites/myfavourites'
import Profile from './components/pages/profile/Profile'
import Home from './components/pages/home/Home'

const router = createBrowserRouter([
  {
    element:<Layout/>,
    children : [
      { path:'/',element: <Home/> },
      { path:'/filter',element: <Filter/> },
      { path:'/myfav',element: <MyFavourites/> },
      { path:'/profile',element: <Profile/> }
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
      const error = []
      if (nama===""||nama===" "){
        error.push("Username tidak boleh kosong!")
      }
      if (found){
        error.push("Username sudah ada!")
      }
      if (email===""||email===" "||!email.includes("@")){
        error.push("Format email salah!")
      }
      if (notelp===""||notelp===" "||notelp.length<10||notelp.length>12){
        error.push("Panjang nomor telepon harus 10-12 angka")
      }
      if (error.length===0){
        console.log("register berhasil");
        window.api.register(nama,email,notelp,pass).then(function(){})
      }else{
        error.map((e)=>console.log(e))
      }
    })
  }

  useEffect(() => {
    // const user = localStorage.getItem('user')
    setUser(user)
  },[])
  
  if (!user) {
    return <LoginRegister handlelogin={handlelogin} handleregister={handleregister}/>
  } else {
    return (
      <div>
        <RouterProvider router ={router} />
        <div className='flex justify-center mt-4 py-10'>
          {/* <h1>Welcome {user}!</h1> */}
          <button className='text-white backdrop-blur-sm bg-[#ffffff2c] px-10 py-2 border-solid border-2 border-[#e2e3e59d] rounded-full font-semibold shadow-2xl mb-2 btn'>Log Out</button>
        </div>
      </div>
    )
  }
  
}

export default App
