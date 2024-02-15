import React, {Component} from 'react';
import "./main.css";

export default class Heading extends Component{
    render(){
        return(
            <div class="main-heading">
                <div class="main-title">
                    <h2>
                    Хочешь работать над
                    <br/>
                    <span class="gradient">интересными проектами?</span>

                    </h2>
                </div>
                <div class="main-line">
                </div>
                <p class="main-text">
                    в команду Softorium требуются:
                </p>
                
            </div>
        )
    }
}