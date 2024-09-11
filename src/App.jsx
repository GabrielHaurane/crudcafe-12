import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/pages/Inicio";
import Administrador from "./components/pages/Administrador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main">
      {/* <Menu></Menu> */}
      
      {/* <Administrador></Administrador> */}
      {/* <Footer></Footer> */}
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
