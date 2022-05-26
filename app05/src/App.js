import './App.css';
import Header from './components/Header';
import TodosMaster from './components/TodosMaster';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
const appTitle = "Todos Tracker";

const App = () => (
  <BrowserRouter>

    <Header brand={appTitle} />

    <div className='container-fluid p-4'>

      <Routes>
        <Route path='/' element={<TodosMaster />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

    </div>

  </BrowserRouter>

);

export default App;
