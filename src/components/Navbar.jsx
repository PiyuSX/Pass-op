import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-[#EEEEEE] p-3 shadow-lg m-4 rounded-lg'>
        <div>
            <h1 className='text-2xl font-bold text-[#393E46] '>
                <span className='text-[#00ADB5]'>&lt;</span>
                Pass
                <span className='text-[#00ADB5]'>OP/&gt;</span>
            </h1>
        </div>
        <ul className='flex gap-5'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About</li>
        </ul>
    </nav>
  )
}

export default Navbar