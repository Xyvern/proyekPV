import Versions from './components/Versions'
import icons from './assets/icons.svg'
import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginRegister from './components/pages/login/Login'
import Layout from './components/Layout'
import Filter from './components/pages/filter/Filter'
import MyFavourites from './components/pages/myfavourites/Myfavourites'
import Profile from './components/pages/profile/Profile'
import Home from './components/pages/home/Home'


function App() {
  const [video, setVideo] = useState([])
  const [user, setUser] = useState('')
  const [favoriteVideo, setFavoriteVideo] = useState([])
  const [comment,setComment] = useState([])
  const [search, setSearch] = useState([])
  const [filter, setFilter] = useState([])
  const [rating, setRating] = useState([])
  
  // const [listUser, setListUser] = useState([])
  const router = createBrowserRouter([
    {
      element:<Layout search={hasilSearch}/>,
      children : [
        { path:'/',element: <Home search={search} listVideo={video} addfavorite={addfavorite} user={user} favoriteVideo={favoriteVideo} 
        removefavorite={removefavorite} komen={comment} favoritev={favorite} loadkomen={loadcomment} rating={rating} /> },
        { path:'/filter',element: <Filter filter={filter} hasilfilter={hasilfilter} search={search} listVideo={video} addfavorite={addfavorite} user={user} favoriteVideo={favoriteVideo} removefavorite={removefavorite} komen={comment} favoritev={favorite} loadkomen={loadcomment}/> },
        { path:'/myfav',element: <MyFavourites listVideo={favoriteVideo} user={user} removefavorite={removefavorite}/> },
        { path:'/profile',element: <Profile user={user} handlelogout={handlelogout}/> }
      ]
    }
  ])

  function hasilfilter(genre,category,sort){
    console.log(genre);
    console.log(category);
    window.api.hasilfilter(genre,category,sort).then(function(res){
      setFilter(res[0])
      console.log(res[0]);
    })
  }

  function hasilSearch(input){
    console.log(input);
    if(input!==''){
      window.api.search(input).then(function(res){
        setSearch(res[0])
        console.log(res[0]);
      })
    }
    else{
      setSearch([])
    }
    console.log(search);
  }

  function loadcomment(id){
    window.api.loadKomen(id).then(function(res){
      setComment(res[0])
    })
  }

  function loadVideo(){
    window.api.loadVideo().then(function(res){
      setVideo(res[0])
    })
  }

  function loadRate(){
    window.api.loadRating().then(function(res){
      setRating(res[0])
    })
  }
  
  function favorite(user){
    window.api.loadfavorite(user).then(function(res){
      setFavoriteVideo(res[0])
    })
  }
  
  function addfavorite(user,id){
    window.api.addfavorite(user,id).then(function(){
    })
  }

  function removefavorite(id){
    window.api.removefavorite(id).then(function(){
    })
  }

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

  function handlelogout(){
    setUser('')
    localStorage.setItem('user','')
  }
  useEffect(() => {
    const user = localStorage.getItem('user')
    setUser(user)
    loadVideo()
    favorite(user)
    loadRate()
  },[favoriteVideo,search,rating])
  
  if (!user) {
    return <LoginRegister handlelogin={handlelogin} handleregister={handleregister}/>
  } else {
    return (
      <div>
        <RouterProvider router ={router} />
      </div>
    )
  }
  
}

export default App
