import "./App.css";
// import{SectionBoxeo, SectionCrosstif, SectionFisio} from "./sectionBoxeo/SectionCrosstif/SectionFisio"
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import {SectionCrossfit} from "./components/tarjetas/SectionCrossfit";
import {SectionBoxeo} from "./components/tarjetas/SectionBoxeo";
import {SectionFisio } from "./components/tarjetas/SectionFisio";
import{Home} from "./components/Inicio";

function App() {
  return (
    <Routes>
       /* Ruta de App con las card anidadas de las secciones */
      <Route index element={<App />}>
      <Route path="/sectionCrossfit" element={<SectionCrossfit/>} />
      <Route path="/sectionBoxeo" element={<SectionBoxeo/>} />
      <Route path="/sectionFisio" element={<SectionFisio/>} />
       </Route>


    </Routes>
  );
}

export default App;
