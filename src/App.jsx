
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './assets/header/Header'
import './css/style.css'
import Layout from './assets/Layout'
import About from './assets/about/About'
import Home from './assets/home/Home'

function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
