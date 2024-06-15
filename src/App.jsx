import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Libraries, Subjects, Chapters } from "./pages/index";
import Sections from "./pages/Sections/Sections";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Libraries />} path='/libraries' />
          <Route element={<Subjects />} path='/libraries/:id' />
          <Route element={<Chapters />} path='/libraries/:id/:subId' />
          <Route element={<Sections />} path='/libraries/:id/:subId/:chapId' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
