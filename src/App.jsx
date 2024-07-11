import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./pages/Navigation"
import Error from "./pages/Error"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation/>}>
            <Route path="*" element={<Error/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
