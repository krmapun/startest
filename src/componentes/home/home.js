import React from "react";
import Anima from '../animacionSW/anima'
import { Link } from 'react-router-dom';
import './home.css';
import Grid from "@material-ui/core/Grid";

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div className="animacion">
                <Link id="peliculas" className="myButton" to={`/peliculas`}>Películas</Link>
                <Anima/>
                <Link id="personajes" className="myButton" to={`/personajes`}>Personajes</Link>
            </div>
        );
    }
}

export default Home;