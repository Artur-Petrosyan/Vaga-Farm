import Main from "./pages/Main/Main"
import About from './pages/About/About'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import BackCall from "./pages/BackCall/BackCall"
import Services from "./pages/Services/Services"
import Partners from "./pages/Partners/Partners"
import React, { useState } from "react"
import './index.scss'
import Modal from "./components/Modal/Modal"
import Products from "./pages/Products/Products"
import SingleProduct from "./pages/Products/SingleProduct"
import OrderACall from "./pages/Services/OrderACall/OrderACall"
export const Context = React.createContext()

const App = () => {
  const [openModal, setOpenModal] = useState(false);  // Context  Redux
  const [orderACall, setOrderACall] = useState(false); // Context  Redux
  const toggleModal = () => {
    setOpenModal(!openModal);
  };
  const toggleOrderACall = () => {
    setOrderACall(!orderACall)
  }
  console.log(openModal);
  return (
    <Context.Provider value={{
      toggleModal, toggleOrderACall
    }}>

      <div>

        {openModal ?
          <Modal /> :
          orderACall ? <OrderACall /> : null}
        <Header />
        <Routes >
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:name/:id" element={<SingleProduct />} />
          <Route path="services" element={<Services  />} />
          <Route path="partners" element={<Partners />} />
          <Route path="callback" element={<BackCall  />} />
        </Routes>
        <Footer />

      </div>
    </Context.Provider>

  )
}

export default App;