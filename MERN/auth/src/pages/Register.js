import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
function Register() {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate();
const [error,seterror] = useState(false)
const [errormsg,seterrormsg] = useState("")
const RegisterData =  async (e)=>{
e.preventDefault();
if(name === "" || email === "" || password === "" ){
  seterror(true)
   seterrormsg("Please Fill Form!")
  setInterval(() => {
    seterror(false)
  }, 2000);

}
else if (password.length < 8){
  seterror(true)
  seterrormsg("Invalid Password!")
 setInterval(() => {
   seterror(false)
 }, 2000);

}

else{
const RegisterInfo = {
    name,
    email,
    password
}
try {
    const result = (await axios.post("http://localhost:3001/register",RegisterInfo)).data
    console.log(result);
    navigate("/login")
} catch (error) {
    console.error(error)
}

}
}


  return (
    <>
    {error && <Alert message={errormsg}/>}
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}} >
    <div className='form  bg-light d-flex flex-column justify-content-center align-items-center rounded' style={{width:"30%"}}>
    <input type='text' className='m-5' style={{width:"60%",height:"2.3rem",borderRadius:"10px"}} placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
<input type='text' className='m-5' style={{width:"60%",height:"2.3rem",borderRadius:"10px"}} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
<input type='text'   className='m-5' style={{width:"60%",height:"2.3rem",borderRadius:"10px"}} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
<Link to={"/login"} className='text-dark' style={{textDecoration:"none",fontSize:"0.8rem"}}>Already have an Account?Click Here</Link>

<button className='btn text-white m-5' onClick={RegisterData}>Register</button>

    </div>



    </div>
    </>
  )
}

export default Register