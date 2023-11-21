import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {



  const user = JSON.parse(localStorage.getItem("User"))

  return (
    <>
    <Header/>
    <div style={{height:"85.8vh"}}>
     <h1 className='text-center text-white' style={{lineHeight:"25rem"}}>Welcome {user.name}</h1> 
      </div>
    <Footer/>

    </>
  )
}

export default Home