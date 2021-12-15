import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css'
import './slideshow.css';
import Card from './Card.js'
import reportWebVitals from './reportWebVitals';
function ScrollForward(id)
{
    var slideshow = document.getElementById(id);
    slideshow.classList.add("animate__animated", "animate__backOutRight");
    slideshow.classList.remove("animate__backOutRight");
    slideshow.classList.add("animate__backInLeft");
    slideshow.addEventListener("animationend", () => {slideshow.classList.remove("animate__backInLeft");});
}
function ScrollBack(id)
{
    var slideshow = document.getElementById(id);
    slideshow.classList.add("animate__animated", "animate__backOutLeft");
    slideshow.classList.remove("animate__backOutLeft");
    slideshow.classList.add("animate__backInRight");
    slideshow.addEventListener("animationend", () => {slideshow.classList.remove("animate__backInRight");});
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
        console.log(String(props.id));
        const LeftButton = React.createElement ("button", {class : "NavBtn", onClick :() => {ScrollBack(String(props.id))}}, '<');
        const RightButton = React.createElement ("button", {class : "NavBtn", onClick :() => {ScrollForward(String(props.id))}}, '>');
        const table = React.createElement("div",{class : "table",id: String(props.id)},[LeftButton,cards,RightButton]);
        ReactDOM.render(table,document.getElementById("root"));
         return(null);
        


}

      
export default Slideshow; 