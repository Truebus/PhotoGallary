import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { Home } from './Components/Home'
import { Search } from './Components/Search'
import { Collection } from './Components/Collection'
import { Register } from './Components/Register'
import { Login } from './Components/Login'
import { Save } from './Components/Save'
import { DetailPage } from './Components/DetailPage'

function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>

      <Route path='/search' element={<Search/>}></Route>
      <Route path='/collect' element={<Collection/>}></Route>
      <Route path='/signup' element={<Register/>}></Route>
      <Route path='/signin' element={<Login/>}></Route>
      <Route path='/addcart' element={<Save/>}></Route>
      <Route path='/detail/:id' element={<DetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
