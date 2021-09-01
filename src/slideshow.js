import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './slideshow.css';
import App from './App';
import Card from './Card.js'
import reportWebVitals from './reportWebVitals';
function Slideshow(props)
{           
        var total_width = 0;
        var cards = [];
        while(total_width < window.innerWidth)
        {
                const card = React.createElement(Card,{},[]);
                const parent = React.createElement("div",{class : "column"}, [card]);
                cards.push(parent);
                total_width += parseFloat(props.CardWidth) * (window.innerWidth);

        } 
        const table = React.createElement("div",{class : "table"},cards);
        ReactDOM.render(table,document.getElementById("root"));
         return(
         <div style = {{height:"20vh"}}> 
                 <button className = "Button"> {"<"} </button>
                <div className= "table" style = {{display:"flex"}}>
                         <div className = "Column"><Card /></div>
                         <div className = "Column"><Card /></div>
                         <div className = "Column"><Card /></div>
                 </div>
                 <button className = "Button" style = {{float:"right"}} > {">"} </button>

         </div>
         );


}
      
export default Slideshow;