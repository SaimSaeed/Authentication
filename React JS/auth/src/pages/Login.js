import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const LoginData = (e)=>{
        e.preventDefault()
        const userData = {
            email:email,
            password:password
        }
        const fetchedData = window.localStorage.getItem("Users");
        const parsedData= JSON.parse(fetchedData);
       
        if(parsedData.email === userData.email && parsedData.password === userData.password){
            console.log("success")
        }
        else{
            console.log("failed")
        }

       
        navigate("/dashboard")
    }
  return (
    <div className='login bg-dark'>
   <div className='login-box'>

<input type='text' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
<input type='text' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
<Link to={"/register"} className='text-center text-black'>Register?</Link>
<button className='btn btn-dark button' onClick={LoginData}>Login</button>

   </div>





    </div>
  )
}

export default Login