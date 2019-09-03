import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  Home  from './componentes/home/home'
import Peliculas from './componentes/peliculas/peliculas'
import Personajes from './componentes/personajes/personajes'

class Router extends Component {

     state = {
          ready: false,
          go: false,
          navigationOpen: window.innerWidth < 800 ? false : true,
          accountOpen: false
    }
    render() {

        const { user, rol } = this.state;

        return (
            <HashRouter>
                    <div className="contenedor">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path="/peliculas" component={Peliculas} />
                            <Route exact path="/personajes" component={Personajes} />
                            <Route component={Error} />
                        </Switch>
                    </div>
            </HashRouter>
        )
    }
}

export default Router;