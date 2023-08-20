import Main from "./pages/Main/Main"
import About from './pages/About/About'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.scss'
import Footer from "./components/Footer/Footer"
import BackCall from "./pages/BackCall/BackCall"
import Services from "./pages/Services/Services"
const App = () => {

  return (
    <div>
      <Header />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />}/>
        <Route path="/products" />
        <Route path="/services" element={<Services />}/>
        <Route path="/partners" />
        <Route path="/callback" element={<BackCall />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
