// eslint-disable-next-line no-unused-vars
import React from 'react'
import notfound  from '/notfound.gif'

 const Notfound = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center ">
      <img  className="w-[50%] object-cover" src={notfound} alt="" />
      </div>
  )
}

export default Notfound