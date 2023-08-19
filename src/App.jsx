import Main from "./pages/Main/Main"
import { Route,Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import './index.scss'
const App = () => {

  return (
      <div>
      <Header />
        <Routes >
          <Route path="/" element={ <Main />}/>
          <Route path="/about"/>
          <Route path="/products"/>
          <Route path="/services"/>
          <Route path="/partners"/>
          <Route path="/callback"/>
        </Routes>
       
   </div>
  )
}

export default App
