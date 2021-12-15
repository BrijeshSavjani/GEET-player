import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css'
import './slideshow.css';
import Card from './Card.js'
import reportWebVitals from './reportWebVitals';
function ScrollBack()
{
    var slideshow = document.getElementById("table");
    slideshow.classList.add("animate__animated", "animate__backOutRight");
    slideshow.classList.remove("animate__backOutRight");
    slideshow.classList.add("animate__backInLeft");
    slideshow.addEventListener("animationend", () => {slideshow.classList.remove("animate__backInLeft");});
}
function Slideshow(props)
{           
        var total_width = 0;
        var a = (props.CardWidth * window.innerWidth)
        var cards = [];
        while(total_width < window.innerWidth)
        {
                var CardDetails = {"Type": "Song","Name": "Album Name", "Artists":"Artist Names"};
                const card = React.createElement(Card,CardDetails,[]);
                const parent = React.createElement("div",{class : "column", style : {width: (String(props.CardWidth * window.innerWidth)+ "px"), height: (String(props.CardWidth * window.innerWidth)+ "px")}}, [card]);
                cards.push(parent);
                total_width += parseFloat(props.CardWidth) * (window.innerWidth);

        } 
        const LeftButton = React.createElement ("button", {class : "NavBtn", onClick : ScrollBack}, '<');
        const RightButton = React.createElement ("button", {class : "NavBtn", onClick: "ScrollForward"}, '>');
        const table = React.createElement("div",{class : "table"},[LeftButton,cards,RightButton]);
        ReactDOM.render(table,document.getElementById("root"));
         return(null);
        


}

      
export default Slideshow; 