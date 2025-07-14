import Table from "./Table"

import { useState, useEffect } from "react"

import { Eye, EyeOff } from "lucide-react";

const Manager = () => {
    const [showPassword, setShowPassword] = useState(false)

    const [form , setForm] = useState({
        siteUrl: "",
        username: "",
        password: ""
    })

    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
         if (localStorage.getItem("passwords")) {
            setPasswordArray(JSON.parse(localStorage.getItem("passwords")))
      }
    }, [])
    


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    
    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        setForm({
            siteUrl: "",
            username: "",
            password: ""
        })
    }
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#393E46] bg-[radial-gradient(#ffffff33_1px,#222831_1px)] bg-[size:20px_20px]"></div>
      <div className="flex flex-col items-center mt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#ffffff] ">
            <span className="text-[#00ADB5]">&lt;</span>
            Pass
            <span className="text-[#00ADB5]">OP/&gt;</span>
          </h1>
          <p className="text-[#EEEEEE]  mt-2">
            One Solution For Pass Management
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col">
            <input name="siteUrl" value={form.siteUrl} onChange={handleChange} className="bg-[#EEEEEE] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" placeholder="Enter Site URL" type="text" />
          </div>
          <div className="flex flex-row gap-3">
            <input name="username" value={form.username} onChange={handleChange} className="bg-[#EEEEEE] p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" placeholder="Username" type="text" />
            <div className="relative">
              <input name="password" value={form.password} onChange={handleChange} className="bg-[#EEEEEE] p-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" placeholder="Password" type={showPassword ? "text" : "password"} />
              <button className="absolute right-1 top-2" type="button" onClick={()=> setShowPassword(!showPassword)}>
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center m-4">
            <button onClick={savePassword} className="flex items-center justify-center bg-[#00ADB5] p-1 px-2 rounded-lg hover:bg-[#00ADB5]/90 text-white">
              <lord-icon
                src="https://cdn.lordicon.com/efxgwrkc.json"
                trigger="hover"
              ></lord-icon>
              Add Password
            </button>
          </div>
        </div>
        <div>
          <Table passwordArray={passwordArray} />
        </div>
      </div>
    </div>
  );
}

export default Manager;
