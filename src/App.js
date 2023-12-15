import logo from './logo.svg';
import './App.css';
 
/* The following line can be included in your src/index.js or App.js file */
 
import 'bootstrap/dist/css/bootstrap.min.css';

import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Living from './Components/Living';
import Dining from './Components/Dining';
import Bedroom from './Components/Bedroom';
import Office from './Components/Office';
import Contact from './Components/Contact';
import About from './Components/About';
import Blog from './Components/Blog';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/living'element={<Living/>}/>
          <Route path='/dining'element={<Dining/>}/>
          <Route path='/bedroom'element={<Bedroom/>}/>
          <Route path='/office'element={<Office/>}/>
          <Route path='/blog'element={<Blog/>}/>
          <Route path='/contact'element={<Contact/>}/>
          <Route path='/about'element={<About/>}/>

        </Routes> 
      <Footer/>
      </Router>

    </>
     
  );
}

export default App;
