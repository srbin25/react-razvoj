import React, { Component } from 'react';
import {Router, Switch} from 'react-router-dom'
import Forma from './FormaPosta';
import Lista from './ListaPostova';
import KAtegorija from './Kategorije';
import Futer from './futer';
import Meni from './Meni';

class App extends Component {

    render() {

        return (

            <div className="container" style={{backgroundColor: '#00ff33'}}>

                    <div className="jumbotron" style={{marginTop:'15px',backgroundImage: "url('./images/banner.jpg')"}}>
                        <h1 className="text-center text-danger">Izrada Bloga</h1>
                        <Meni/>
                    </div>
                <div className="row">
                    <div className="col-md-8">
                       <Lista/>
                       <Forma/>
                    </div>
                    <div className="col-md-4">
                    <KAtegorija/>
                    </div>
                </div>
                <div className="row">
                   <Futer/>
                </div>
            </div>
        );
    }
}
