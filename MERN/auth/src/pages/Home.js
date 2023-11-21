import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Header/>
    <div style={{height:"85.8vh",backgroundColor:"white"}}>
     <h1 className='text-center' style={{lineHeight:"25rem"}}>Welcome User</h1> 
      </div>
    <Footer/>

    </>
  )
}

export default Home