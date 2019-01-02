import React, { Component } from 'react';

class App extends Component {

    render() {

        return (
            <div >
                <h1 className="App-title text-danger text-center">Lista kategorije Postova</h1>
                <div>
                    <div className="panel panel-primary">
                        <div className="panel-title btn-dark">Kategorije Postova</div>
                        <div className="panel-body">
                            <ul>
                                <li className ="btn-info"> Post 1</li>
                                <p>Prvi post </p>
                                <li className ="btn-info"> Post 2</li>
                                <p>Drugi post </p>
                                <li className ="btn-info"> Post 3</li>
                                <p>Treci post </p>
                            </ul>
                         </div>
                        <div className="panel-footer">
                            <h2>Postovi</h2>
                            <button className="btn-danger"> Stariji Postovi</button>
                            <button className="btn-primary pull-right" > Upravo postavljeni</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

