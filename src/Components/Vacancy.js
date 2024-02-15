import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import "./main.css";

var bgColors = {    "b1": "#FF6633",
                    "b2": "#0099CC",
                    "b3": "#84D1ED",
                    "b4": "#725CA8",
                    "b5": "#2F7BBF",
                    "b6": "#2671A2",
};

export default class Vacancy extends Component {
  render() {
    return (
      <div class="vacancy">
        <div class="left-v">
            <h3>Frontend Developer</h3>
            <section class="steck">
                <h6>Основной стек:</h6>
                <article style={{backgroundColor: bgColors.b1}}>MySQL</article>
                <article style={{backgroundColor: bgColors.b2}}>JavaScript</article>
                <article style={{backgroundColor: bgColors.b3}}>jQuery</article>
                <article style={{backgroundColor: bgColors.b4}}>PHP</article>
                <article style={{backgroundColor: bgColors.b5}}>Joomla</article>                
                <article style={{backgroundColor: bgColors.b6}}>ASP.NET</article>
            </section>
            <section class="steck">
                <h6>Будет плючом если вы владеете:</h6>
                <article style={{backgroundColor: bgColors.b1}}>MySQL</article>
                <article style={{backgroundColor: bgColors.b2}}>JavaScript</article>
                <article style={{backgroundColor: bgColors.b3}}>jQuery</article>
                <article style={{backgroundColor: bgColors.b4}}>PHP</article>
                <article style={{backgroundColor: bgColors.b5}}>Joomla</article>                
                <article style={{backgroundColor: bgColors.b6}}>ASP.NET</article>
            </section>
        </div>
        <div class="rigth-v">
            <Link to="/datail">
            <div class="circle" >
                <a >
                    <p>Подбробнее</p>
                   
                </a>
            </div>
            </Link>
        </div>
      </div>
      
    )
  }
}
