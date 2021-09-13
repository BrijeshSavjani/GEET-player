import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './slideshow.css';
import Card from './Card.js'
import reportWebVitals from './reportWebVitals';
function Slideshow(props)
{           
        var total_width = 0;
        var cards = [];
        while(total_width < window.innerWidth)
        {
                var CardDetails = {"Type": "Song","Name": "Album Name", "Artists":"Artist Names"};
                const card = React.createElement(Card,CardDetails,[]);
                const parent = React.createElement("div",{class : "column", height: (props.CardWidth * window.innerWidth), width: (props.CardWidth * window.innerWidth)  }, [card]);
                cards.push(parent);
                total_width += parseFloat(props.CardWidth) * (window.innerWidth);

        } 
        const table = React.createElement("div",{class : "table"},cards);
        ReactDOM.render(table,document.getElementById("root"));
         return(null);
        


}
      
export default Slideshow; 