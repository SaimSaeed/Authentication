import React from 'react'

function Dashboard() {
    const fetchedData = window.localStorage.getItem("Users");
    const parsedData= JSON.parse(fetchedData);

  return (
    <div style={{height:"90vh"}}>
        
        
       <h1 className='text-center'>Welcome! {parsedData.name}</h1>



    </div>
  )
}

export default Dashboard