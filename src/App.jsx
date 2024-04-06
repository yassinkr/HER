import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from "./Componentes/SignUp"
import SignIn from "./Componentes/SignIn"
import Landing_page from './Componentes/Landing_page'
const App = () => {



  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Signup" element={<SingUp />} />
    <Route path="/" element={<Landing_page />} />
    <Route path="/Signin" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App