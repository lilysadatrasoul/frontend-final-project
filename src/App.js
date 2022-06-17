import React from "react";
import Page1 from "./pages/Page1.jsx"
import Page2 from "./pages/Page2.jsx"

;
import { BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
  
        <Routes>
              <Route path="/user/Page1" element={<Page1/>}/>
              <Route path="/user/Page2" element={<Page2/>}/>
             
              
        </Routes>  
    </BrowserRouter>  
      );
    
}

export default App;
