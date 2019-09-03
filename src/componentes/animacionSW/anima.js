import React, { Component } from 'react';
import './anima.css';
class Anima extends Component {

    render() {

        return (
            <div className="starwars-demo">
                <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" className="star"></img>
                <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars" className="wars"></img>
                <h2 className="byline" id="byline">Krmapun</h2>
            </div>
        );
    }
}

export default Anima;