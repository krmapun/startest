import React, { Component } from 'react';
import { WidthProvider, Responsive } from "react-grid-layout";
import './peliculas.css';
import { Link } from 'react-router-dom';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Peliculas extends Component {

    constructor() {
        super();
        this.state = {
          films: null,
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

    // onLayoutChange(layout, layouts) {
    //     saveToLS("layouts", layouts);
    //     this.setState({ layouts });
    // }

    render() {

        let optionItems = null;
        if(this.state.films != undefined || this.state.films != null ){
            
            
            const pelis = this.state.films.results;
            let d = 0;
            pelis.forEach(element => {
                element.dimension = { w: 2, h: 3, x: d, y: 0, minW: 2, minH: 3 }
                d = d + 2;
                if (d == 10) {
                    d = 0;
                }
            });
            console.log(pelis);
            optionItems = pelis.map(eventos => 
                (
                <div
                  key={eventos.episode_id}
                  className={'eventos'}
                  data-grid={eventos.dimension}
                >
                <h2>{eventos.episode_id}</h2>
                <h2>{eventos.title}</h2>
                <p>{eventos.producer}</p>
                <Link className="button2" to={`/personajes`}>Personajes</Link>
                </div>
                )
              );

        }

 
        return (
            <div>
                <Link id="atras" className="myButton" to={`/`}>Atras</Link>
                <div>
                    <ResponsiveReactGridLayout
                    cols={{ lg: 10, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={50}
                    >
                    {optionItems}
                    </ResponsiveReactGridLayout>
                </div>
                <div className="starwars-demo">
                    <div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Peliculas;
