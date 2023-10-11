 import Menu from './Menu';
 import Reqanapp from './Reqanapp';
import About from './About';
 import Login from './Login';
 import Contact from'./Contact';
import {Routes,Route} from "react-router-dom";
  function App(){
 return (
           <div>
          <Menu/>; 

 <Routes>
    <Route path="/Req" element={<Reqanapp/>}/>
  <Route path="/about" element={<About/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Routes>
   </div>
    );
}
export default App;