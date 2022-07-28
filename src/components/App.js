import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Creatures from '../creatures/components/Creatures';



function App() {
  return (
    <BrowserRouter>
    <Container>
     <Routes>
          <Route path = '/' element={<Creatures />}/>
          <Route path
       <Route path="/creature/:id"
       element={<IndividualCreature />}/>
       </Route>
       </Container> 
    </BrowserRouter>
  );
}

export default App;
