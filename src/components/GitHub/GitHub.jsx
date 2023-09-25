import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    const data =useLoaderData()
//     const [data,setData] = useState([])
//     useEffect(()=>{
// fetch('https://api.github.com/users/ankit763170').then(res=>res.json())
// .then(resdata=>{
//     console.log("Data", resdata)
//     setData(resdata)
// })

//     },[])
  return (
    <>
    <div className='text-centre m-4 bg-gray-600 text-white p-4 text-3xl '> GitHub Followers : {data.followers}
    <img src={data.avatar_url} alt="Git Picture"  width={400}/>
     </div>
    </>
  )
}

export default GitHub
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ankit763170')
    return response.json()
}