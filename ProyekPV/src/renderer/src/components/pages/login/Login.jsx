import { useRef, useState } from 'react'
import Paper from '@mui/material/Paper';

const LoginRegister = () => {
  const [page, setPage] = useState('login')
  const loginTxt = useRef("")
  const registerTxt = useRef("")

  if (page == "login") {
    return (
      <div>
        <h1>LOGIN ASLKHDFKJHSDLFJH</h1>
        <Paper variant="outlined">outlined variant</Paper>
      </div>
     
    )
  }
}
 
export default LoginRegister;