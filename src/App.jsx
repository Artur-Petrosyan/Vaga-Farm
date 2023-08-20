import Main from "./pages/Main/Main"
import About from './pages/About/About'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import BackCall from "./pages/BackCall/BackCall"
import Services from "./pages/Services/Services"
import Partners from "./pages/Partners/Partners"
import { useState } from "react"
import './index.scss'
import Modal from "./components/Modal/Modal"
import Products from "./pages/Products/Products"
import SingleProduct from "./pages/Products/SingleProduct"

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>

      {openModal && <Modal toggleModal={toggleModal} />}
      <Header />
      <Routes >
        <Route path="/" element={<Main toggleModal={toggleModal} />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />}/>
        <Route path="services" element={<Services />} />
        <Route path="partners" element={<Partners />} />
        <Route path="callback" element={<BackCall />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
