import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from "./Componentes/SignUp"
import SignIn from "./Componentes/SignIn"
const App = () => {



  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Signup" element={<SingUp />} />
    <Route path="/" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App