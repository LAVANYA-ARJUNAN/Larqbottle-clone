import './App.css';
import NavBar from './Router/NavBar';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './Contents/Nav.css'
import Larq from './Contents/Home';
import Footer from './Router/Footer';
import Form from './Contents/Login';
import './Contents/styles.css';
import Bottles from './Contents/Bottle';
import Water from './Contents/Water';
import Bottles1 from './Contents/Bottles';
// import Cart from './Contents/Cart';
import Pitchers from './Contents/Pitchers';
import Technology from './Contents/Technology';
import './Contents/Navbar.css';
import './Contents/Larq.css';
import './Contents/Bottle.css'
import Cart from './Contents/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Larq/>}></Route>
        <Route path='/login' element={<Form/>}></Route>
        <Route path='/bottles' element={<Bottles/>}></Route>
        <Route path='/water' element={<Water/>}></Route>
        <Route path='/bottle' element={<Bottles1/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/pitchers' element={<Pitchers/>}></Route>
        <Route path='/tech' element={<Technology/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
