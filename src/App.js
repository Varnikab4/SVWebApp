import logo from './logo.svg';
import './App.css';
import Enquiry from './svweb';
import Gallery from './gallery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Enquiry/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
     <Route path='*' element={<Enquiry/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
