import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from "./Componentes/SignUp"
//import SignIn from "./Componentes/SignIn"
import Test from './Componentes/test'
import SignIn from './Componentes/testsignin'
const App = () => {



  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Signup" element={<SingUp />} />
    <Route path="/Signin" element={<SignIn />} />
    <Route path="/test" element={<Test />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App