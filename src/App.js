import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import FunCat from './Components/FunCat';
import About from './Components/About';
import Promotion from './Components/Promotion';
import Register from './Components/Register';
import Login from './Components/Login';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';
import Profile from './Components/Profile';
import { GlobalStores } from './Components/GlobalStores';
import CatAdoptionDetail from './Components/CatAdoptionDetail';

const App = () => {

  return (
    <Router>
      <GlobalStores>
        <div>

          <Navbar/>

          <div className='container'>

            <Routes>

              <Route path='/' exact element={<Home/>} />
              <Route path='/home' exact element={<Home/>} />
              <Route path='/funcat' element={<FunCat/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/promotion' exact element={<Promotion/>} />
              <Route path='/promotion/:slug' element={<CatAdoptionDetail/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/logout' element={<Logout/>} />
              <Route path='*' element={<NotFound/>} />
              <Route path='/profile' element={<Profile/>} />
              
            </Routes>

          </div>

        </div>
      </GlobalStores>
    </Router>
  )

}

export default App        
