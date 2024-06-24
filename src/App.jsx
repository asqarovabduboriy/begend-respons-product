import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";
import Aouth from "./components/aouth/Aouth";
import Login from "./page/login/Login";
import CreateProduct from "./page/createproduct/CreateProduct";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="" element={<Aouth/>}>
          <Route path="/" element={<Home />} />
        </Route>  
        <Route path="/login" element={<Login/>} />
        <Route path="/careteProduct" element={<CreateProduct/>} />
      </Routes>
    </>
  );
}

export default App;
