import Main from "./pages/Main/Main"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.scss'
import Footer from "./components/Footer/Footer"
const App = () => {

  return (
    <div>
      <Header />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/about" />
        <Route path="/products" />
        <Route path="/services" />
        <Route path="/partners" />
        <Route path="/callback" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
