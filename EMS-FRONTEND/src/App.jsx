import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterComponent from "./Components/FooterComponent"
import HeaderComponent from "./Components/HeaderComponent"
import ListEmployeeComponent from "./Components/ListEmployeeComponent"
import AddEmployeeComponent from "./Components/AddEmployeeComponent"


function App() {

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={<ListEmployeeComponent/>}></Route>
      <Route path="/employees" element={<ListEmployeeComponent/>}></Route>
      <Route path="/addEmployee" element={<AddEmployeeComponent/>}></Route>
      <Route path='/updateEmployee/:id' element={<AddEmployeeComponent/>}></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
