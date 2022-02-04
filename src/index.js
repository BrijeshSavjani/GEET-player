import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slideshow from './slideshow.js'
import reportWebVitals from './reportWebVitals';
import SignIn from './SignIn.js';

ReactDOM.render(
  <React.StrictMode> 
    <div style = {{width:"100vw"}} style = {{height:"100%"}}>
    <SignIn/>
     
     </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
