import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a 
        className="navbar-brand" 
        href="#" 
        style={{ fontSize: 'larger', fontWeight: '700', fontFamily: "'Courier New', Courier, monospace", marginLeft: '30px' }}
      >
        Cake's Sake
      </a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNavAltMarkup" 
        aria-controls="navbarNavAltMarkup" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav" style={{ marginLeft: '50%' }}>
          <a className="nav-item nav-link active" href="/">Home</a>
          <a className="nav-item nav-link" href="/about">About</a>
          <a className="nav-item nav-link" href="/product">Products</a>
          <a className="nav-item nav-link" href="/contact">Contact</a>
          <a className="nav-item nav-link" href="/todo">Todo</a>
          <a className="nav-item nav-link" href="/signup">Signup</a>
        </div>
      </div>
    </nav>

    <App/>
  </React.StrictMode>
);

reportWebVitals();
