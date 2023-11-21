import React from 'react'
import { Link } from 'react-router-dom'


function Header() {

    const fetchedData = window.localStorage.getItem("Users");
    const parsedData= JSON.parse(fetchedData);

    const logOut = ()=>{
        window.localStorage.removeItem("Users")
     
    }
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
        </li>
      
        <li className="nav-item ml-5 pl-5">
          <Link className="nav-link" to={"/services"}>Services</Link>
        </li>
        <li className="nav-item ml-5 pl-5">
          <Link className="nav-link" to={"/about"}>About</Link>
        </li>
        <li className="nav-item ml-5 pl-5">
          <Link className="nav-link" to={"/contact"}>Contact</Link>
        </li>
        {/* {parsedData ? <h1>We</h1> : <h1>Please log in.</h1>} */}
      { parsedData &&
         <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {parsedData.name}
         </a>
         <ul className="dropdown-menu">
           <li><Link className="dropdown-item" to={"/"}>Profile</Link></li>
           <li><Link className="dropdown-item" to={"/login"} onClick={logOut}>LogOut</Link></li>
          
       
         </ul>
       </li>
       
     

      } 
        
        </ul>
   {!parsedData && <Link className='btn btn-dark' to={"/login"}>Login</Link>
}

    </div>
  </div>
</nav>
    </div>
  )
}

export default Header