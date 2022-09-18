import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Creatures from '../creatures/components/Creatures';
import IndividualCreature from "../creatures/components/IndividualCreature";



function App() {
  return (
    <BrowserRouter>
    <Container>
     <Routes>
          <Route path = '/' element={<Creatures />}/>
         
       <Route path="/creature/:id" element={<IndividualCreature />}/>
       </Routes>
       </Container> 
    </BrowserRouter>
  );
}

export default App;
