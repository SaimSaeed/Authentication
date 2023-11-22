import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import  Alert  from '../components/Alert';


function Login() {

    const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,seterror] = useState(false)
const [errormsg,seterrormsg] = useState("")


const navigate = useNavigate();

const LoginData = async  (e)=>{
    e.preventDefault();
    
    if(email === "" || password === "" ){
      seterror(true)
       seterrormsg("Please Fill Form!")
      setTimeout(() => {
        seterror(false)
      }, 3000);
    
    }
    else if (password.length < 8){
      seterror(true)
      seterrormsg("Invalid Password!")
     setTimeout(() => {
       seterror(false)
     }, 3000);
    
    }
   
    else{
      const LoginInfo = {
        email,
        password
    }
try {
  const result = (await axios.post("http://localhost:3001/login",LoginInfo))
  
  localStorage.setItem("User",JSON.stringify(result.data));
  console.log(result.data)
if(result.data === "no record"){
  seterror(true)
  seterrormsg("No Record")
  setTimeout(() => {
    seterror(false)
  }, 3000);
  return
 
}
else if(result.data === "Wrong Password"){
  seterror(true)
  seterrormsg("Wrong Password")
  setTimeout(() => {
    seterror(false)
  }, 3000);
  return
}
else{
  navigate("/")
}
} catch (error) {
  console.error(error)
  
}
    }
    


    // .then(result=>{console.log(result)
    //   if (result.data === "success"){
    //     navigate("/")
    //   }
    
    // }).catch(err=> console.log(err))

      
    
     
      
    
     
    }

  return (
    <>
     {error && <Alert message={errormsg}/>}
    <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
     
    <div className='form  bg-light d-flex flex-column justify-content-center align-items-center rounded' style={{width:"30%"}}>

<input type='text' className='m-5' style={{width:"60%",height:"2.3rem",borderRadius:"10px"}}  placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
<input type='text'   className='m-5' style={{width:"60%",height:"2.3rem",borderRadius:"10px"}} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}} />
<Link to={"/register"} className='text-dark' style={{textDecoration:"none",fontSize:"0.8rem"}}>Don't have an Account?Click Here</Link>
<button className='btn text-white  m-5' onClick={LoginData}>Login</button>

    </div>



    </div>
    </>
  )
}

export default Login