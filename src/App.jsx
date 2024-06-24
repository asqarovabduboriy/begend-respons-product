import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* <Route path="/oauth"> */}
          <Route path="/" element={<Home />} />
        {/* </Route>   */}
      </Routes>
    </>
  );
}

export default App;
