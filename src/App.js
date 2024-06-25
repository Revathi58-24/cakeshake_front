

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Contact } from './components/Contact';
import { Product } from './components/Product';
import { Home } from './components/Home';
import { About } from './components/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import Todo from './components/Todo'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/signin" element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
