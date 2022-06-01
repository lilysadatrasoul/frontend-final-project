import Navbar from "./Components/Header/Navbar.jsx";
import Home from "./pages/Home.jsx"
import { BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Home/> 
      
    </div>
  );  
          
{/* <BrowserRouter>

    <Routes>
          {/* <Route path="/user/home" element={<Home/>}/> */}
        
    </Routes>  
</BrowserRouter>   */}
  );
    
}

export default App;
