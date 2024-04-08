import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingUp from "./Componentes/SignUp"
import SignIn from "./Componentes/SignIn"
import Landing_page from './Componentes/Landing_page'
import MyProfile from './Componentes/MyProfile'
import Products from './Componentes/Products'
const App = () => {



  return (
    <BrowserRouter>
    <Routes>
    <Route path="/Signup" element={<SingUp />} />
    <Route path="/" element={<Landing_page />} />
    <Route path="/Signin" element={<SignIn />} />
    <Route path="/Myprofile" element={<MyProfile />} >
      <Route path="products" element={<Products />}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
} 

export default App