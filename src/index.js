import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js'
import Slideshow from './slideshow.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div style = {{width:"100vw"}} style = {{height:"100%"}}>
    <Slideshow id = "RecentlyPlayed" CardWidth = "0.15" />
     
     </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
