import React, { Component } from 'react';
import img1 from '../img/Rectangle 33.png';
import img2 from '../img/Rectangle 33 (1).png';
import img3 from '../img/Rectangle 33 (2).png';
import img4 from '../img/Rectangle 33 (3).png';

import './datail.css';
import '../Components/main.css';
var bgColors = {    "b1": "#FF6633",
                    "b2": "#0099CC",
                    "b3": "#84D1ED",
                    "b4": "#725CA8",
                    "b5": "#2F7BBF",
                    "b6": "#2671A2",
};


export default class detail extends Component {
  render() {
    return (
      <>
        <div class="d-heading">
            <div class="d-title">
                <h1>
                    Ищем Frontend Developer’а
                    <br/>
                    <span class="gradient span-d">Трудоустройство в аккредитованную ИТ-компанию</span>
                </h1>
                </div>
        </div>
        <section class=" sect">
                <p class='col-lg-5 fs-6 text-sect'>
                    Мы любим сложные, интересные проекты,
                постоянно расширяемся и именно поэтому
                ищем новые таланты. В коллективе Softorium
                вы найдете возможность воплотить идеи
                любого уровня нестандартности и вместе с
                тем перенять опыт наших ведущих
                разработчиков.
                </p>
                <img src={img1}  class="col-lg-5"/>

        </section>
        <section class=" sect">
                <img src={img2}  class="col-lg-5"/>
                <div class="text-block col-lg-5">
                    <h5>Необходимый минимум:</h5>
                    <ul class="list-rigth">
                        <li>Уверенное понимание Javascript</li>
                        <li>В совершенстве знание jQuery</li>
                        <li>Уверенное понимание Javascript</li>
                        <li>В совершенстве знание jQuery</li>
                    </ul>
                    <h5>Преимуществом будет знание:</h5>
                    <div class="steck">
                        <article style={{backgroundColor: bgColors.b1}}>MySQL</article>
                        <article style={{backgroundColor: bgColors.b2}}>JavaScript</article>
                        <article style={{backgroundColor: bgColors.b3}}>jQuery</article>
                        <article style={{backgroundColor: bgColors.b4}}>PHP</article>
                        <article style={{backgroundColor: bgColors.b5}}>Joomla</article>                
                        <article style={{backgroundColor: bgColors.b6}}>ASP.NET</article>
                    </div>
                
                </div>
        </section>
        <section class="sect">
            <div class="text-block col-lg-5">
                <h5>Чем предстоит заниматься:</h5>
                <ul class="list-left">
                    <li>Участие в командной разработке</li>
                    <li>Коммуникация с заказчиком</li>
                    <li>Участие в командной разработке</li>
                    <li>Коммуникация с заказчиком</li>
                </ul>
            </div>
            <img src={img3}  class="col-lg-5"/>

        </section>
        <section class=" sect">
                <img src={img4}  class="col-lg-5"/>
                <div class="text-block col-lg-5">
                    <h5>Со своей стороны мы готовы предложить:</h5>
                    <ul class="list-rigth">
                        <li>Гибкий график</li>
                        <li>Оплата переработки</li>
                        <li>Помощь наставников, если потребуется</li>
                        <li>Удобный офис с возможностью работать удаленно</li>
                        <li>Оформление по трудовому кодексу</li>
                        <li>Корпоративы, кофе и конфеты за счет компании</li>
                    </ul>               
                </div>
        </section>
      </>
    )
  }
}
