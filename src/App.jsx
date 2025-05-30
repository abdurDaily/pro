
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './assets/Layout'
import About from './assets/about/About'
import Home from './assets/home/Home'
import NotFound from './assets/components/NotFound'
import './css/style.css'
function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="*" element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
