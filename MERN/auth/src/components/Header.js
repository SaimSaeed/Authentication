import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

  const user = JSON.parse(localStorage.getItem("User"))
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("User");
    navigate("/login")
  }
  return (
    <div>
<nav class="navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:"5%"}}>
        {user ? (<>
        
          <div className="dropdown">
                    <a className="btn btn-light te dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      </svg> {user.name}
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                     
                      <li><a className="dropdown-item" href="#" onClick={logOut}>LogOut</a></li>

                    </ul>
                  </div>
        
        
        
        
        </>):(<>
        <li class="nav-item">
          <Link to={"/login"} class="btn btn-light" href="#">Login</Link>
        </li>
      
      
        </>)
        }
       
      </ul>
    
    </div>
  </div>
</nav>














    </div>
  )
}

export default Header