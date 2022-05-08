import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import {SectionBoxeo} from "./components/tarjetas/sectionBoxeo";
import {SectionCrossfit, SectionCrosstif} from "./components/tarjetas/sectionCrossfit";
import {SectionCrossfit} from "./components/tarjetas/sectionCrossfit";
import { SectionFisio } from "./components/tarjetas/sectionFisio";
// import {  } from ".//NotFound";
// import {  } from "./";


function Routes() {
  return (
    <Routes>
      {/* Ruta de App con las card anidadas de las secciones */}
      <Route index element={<App />}>
      <Route path="/sectionCrossfit" element={<SectionCrossfit/>} />
      <Route path="/sectionBoxeo" element={<SectionBoxeo/>} />
      <Route path="/sectionFisio" element={<SectionFisio/>} />
       </Route>


    </Routes>
  );
}

export default Routes;