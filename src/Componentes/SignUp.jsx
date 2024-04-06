import Navbar from "./Navbar"
import Check_Box from "./Check_Box"
import Button from "./Button"
import { Link } from 'react-router-dom';
import { useState } from "react"
const SignUp = () => {
  const [next , setNext] = useState(false);
  const HandleContinue=()=>{
    setNext(!next);
  }
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center" id="SignIn">
        <Navbar margin_top={3} />
       {!next &&<div className="flex justify-center w-full h-screen pt-48 ">
            <div className="flex flex-col justify-start items-start max-w-[300px] w-full mx-5">
                <h1 className="text-2xl font-Bodoni  mb-5 mx-auto">S’inscrire</h1>
                <label htmlFor="brand" className="mb-2 text-herBlack text-[16px] ">nom du brand :</label>
                <input type="text" className="border-[1px] border-black p-2 mb-3 w-full"/>
                <div className="w-full flex flex-col justify-center items-center mb-3">
                    <div className="w-[90%] flex justify-between items-start flex-wrap">
                     <Check_Box text={'Vêtement'}/>
                     <Check_Box text={'Parfum'}/>
                     </div>
                     <div className="w-[90%] flex justify-between items-start flex-wrap">
                     <Check_Box text={'Accesoires'}/>
                     <Check_Box text={'Beauté'}/>
                     </div>
                     <div className="w-[90%] flex justify-between items-start flex-wrap">
                     <Check_Box text={'Maison & déco'}/>
                     </div>
                </div>
                <div className="w-full h-11">
                  <Button filled={true} rounded={false} text={"Continuer"} onClick={HandleContinue}/>
                </div>
                <div className="w-full h-11 flex justify-center items-center text-herBlack">vous avez déja un compte ? 
                <Link to="/Signin" className="underline font-bold" >Se connecter</Link>
                </div>
            </div>
        </div>}

        {next &&<div className="flex justify-center w-full h-screen pt-48 ">
            <div className="flex flex-col justify-start items-start max-w-[300px] w-full mx-5">
                <h1 className="text-2xl font-Bodoni  mb-5 mx-auto">S’inscrire</h1>
                <label htmlFor="email" className="mb-2 text-herBlack text-[16px] ">adresse-email</label>
                <input type="text" className="border-[1px] border-black p-2 mb-3 w-full"/>
                <label htmlFor="password" className="mb-2 text-herBlack text-[16px] ">mot de passe :</label>
                <input type="text" className="border-[1px] border-black p-2 mb-3 w-full"/>
                <label htmlFor="confirm password" className="mb-2 text-herBlack text-[16px]">confirmer mot de passe : </label>
                <input type="password" className="border-[1px] border-black p-2 mb-3 w-full"/>
                
                <div className="w-full h-11">
                  <Button filled={true} rounded={false} text={"Continuer"} />
                </div>
                <div className="w-full h-11 flex justify-center items-center text-herBlack">vous avez déja un compte ? 
                <Link to="/" className="underline font-bold" >Se connecter</Link>
                </div>
            </div>
        </div>}
    </div>
  )
}

export default SignUp