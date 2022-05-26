import Header from "./components/Header"
import Home from "./components/Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detail from "./components/Detail"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
