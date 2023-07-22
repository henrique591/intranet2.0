import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"


import ScrollToTop from "react-scroll-to-top";



function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <ScrollToTop smooth top='20' color="#166666" />
        <Navbar />

        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
          </Routes>

        </main>

        <Footer />

      </BrowserRouter>


    </div>



  )
}

export default App
