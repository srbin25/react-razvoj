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

export default App;

/*
 <Router >
 <div className="container">
 <header className="App-header">
 <h1 className="App-title">Izrada Bloga</h1>
 <Meni/>
 </header>
 <div className="col-md-5">
 <Lista/>
 <Forma/>
 </div>
 <div className="col-md-5">
 <h3> Deo za kategorije posta </h3>
 </div>
 <Switch>
 <Route path={} component={}/>
 </Switch>
 </div>
 </Router>
 */