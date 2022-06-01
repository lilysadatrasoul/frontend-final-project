import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx"
import { BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
              <Route path="/user/home" element={<Home/>}/>
              
        </Routes>  
    </BrowserRouter>  
      );
    
}

export default App;
