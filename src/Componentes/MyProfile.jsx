import SideBar from "./SideBar"
import {Outlet } from 'react-router-dom'
import Navbar from "./Navbar"
const MyProfile = () => {
    const user= {
        firstName: "John",
        LastName: "Doe"
    }   
  return (
    <div className="pl-24 relative w-full h-screen flex justify-start bg-lightBeige  items-start ">
       <SideBar firstName={user.firstName} LastName={user.LastName}/> 
       <div className="w-full flex flex-col justify-center items-center">
       <Navbar profile={true}/>  

       <Outlet />
       </div>
      
    </div>
  )
}

export default MyProfile