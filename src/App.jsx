import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./pages/Navigation"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Cart from "./pages/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route index element={<Home/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
