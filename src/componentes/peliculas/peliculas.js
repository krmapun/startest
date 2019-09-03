import React, { Component } from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import './peliculas.css';
import { Link } from 'react-router-dom';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Peliculas extends Component {

    constructor() {
        super();
        this.state = {
          films: ''
        };
      }


    componentWillMount = () => {
        this.getData();
    };

    getData(){
        setTimeout(() => {
            return new Promise((resolve, reject) => {
                fetch("https://swapi.co/api/films/", {
                method: "GET",
                })
                .then(response => response.json())
                .then(res => {
                    this.setState({ films: res })   ;
                    })
                .catch(error => {
                    reject(error);
                });
            });
        }, 1000)
    }

    render() {
 
        return (
            <div>
                <Link id="atras" className="myButton" to={`/`}>Atras</Link>
                <div className="starwars-demo">
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peliculas;
