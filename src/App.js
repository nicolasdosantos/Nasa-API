import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Inicio from "./components/Inicio";
import Desc from "./components/Desc";

function App() {


  return (
      <BrowserRouter>
            <Header></Header>
          <Routes>
                <Route path={'/'} element={<Inicio/>}/>
              <Route path="/explorar" element={<Main/>}/>
              <Route path="/desc" element={<Desc/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
