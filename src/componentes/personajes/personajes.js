import React, { Component } from 'react';
import './personajes.css';
import { Link } from 'react-router-dom';


class Personajes extends Component {

    render() {

        return (
            <div>
                <Link id="atras" className="myButton" to={`/`}>Atras</Link>
                <div className="starwars-demo">
                    <h2 className="byline" id="byline">personajes</h2>
                </div>
            </div>
        );
    }
}

export default Personajes;
