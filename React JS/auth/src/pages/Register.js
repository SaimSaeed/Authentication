import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Register() {
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

const RegisterData = (e)=>{
    e.preventDefault()
    const userData = {
        name: name,
        email:email,
        password:password
    }
    
    window.localStorage.setItem("Users",JSON.stringify(userData))
    
    navigate("/login")
}



  return (
    <div className='login bg-dark'>
    <div className='login-box'>
    <input type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
 <input type='text' placeholder='Email'onChange={(e)=>{setEmail(e.target.value)}}/>
 <input type='text' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
 <Link to={"/login"} className='text-center text-black'>Login?</Link>
 <button className='btn btn-dark button' onClick={RegisterData}>Register</button>
 
    </div>
 
 
 
 
 
     </div>
  )
}

export default Register