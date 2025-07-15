import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=' flex justify-around bg-[#EEEEEE] p-3 shadow-lg m-4 rounded-lg'>
        <div>
            <h1 className='text-2xl font-bold text-[#393E46] '>
                <span className='text-[#00ADB5]'>&lt;</span>
                Pass
                <span className='text-[#00ADB5]'>OP/&gt;</span>
            </h1>
        </div>
        <a className='flex gap-2 items-center' href="https://github.com/PiyuSX" target="_blank" >
            <span className='text-[#393E46] font-bold'>Github</span>
            <Github className='text-[#00ADB5]' />
        </a>
    </nav>
  )
}

export default Navbar