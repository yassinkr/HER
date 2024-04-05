import Navbar from "./Navbar"
import Button from "./Button"
import { Link } from 'react-router-dom';

const SignIn = () => {
    
  return (
    <div className="w-full h-screen overflow-hidden flex flex-col justify-center items-center" id="SignIn">
        <Navbar />
        <div className="flex justify-center w-full h-screen pt-48 ">
            <div className="flex flex-col justify-start items-start max-w-[400px] w-full">
                <h1 className="text-2xl font-Bodoni  mb-5 mx-auto">Se connecter / S’inscrire</h1>
                <label htmlFor="email" className="mb-2 text-herBlack text-[16px] ">adresse e-mail ou numéro</label>
                <input type="text" className="border-[1px] border-black p-2 mb-3 w-full"/>
                <label htmlFor="password" className="mb-2 text-herBlack text-[16px]">mot de passe</label>
                <input type="password" className="border-[1px] border-black p-2 mb-3 w-full"/>
                <Link to="/about" className="text-herBlack mb-3 underline">mot de passe oublier ?</Link>
                <div className="w-full h-11"><Button filled={true} rounded={false} text={"Se connecter"} /></div>
                <div className="w-full h-11 flex justify-center items-center text-herBlack">pas de compte ? 
                <Link to="/Signup" className="underline font-bold" >Inscrire</Link></div>
            </div>
        </div>
    </div>
  )
}

export default SignIn