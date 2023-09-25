import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
   
    <div className='bg-orange-500 px-5 py-8 text-3xl'>User : {id}</div>
  )
}

export default User