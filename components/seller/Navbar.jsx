import React from 'react'

import { useAppContext } from '@/context/AppContext'

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
     <button className=" gap-2 px-6 py-3 text-lg font-bold   transition">
  <span className=" text-red-600 ">
    S
  </span>
  wiftCart
</button>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar