import React, { Component } from 'react';

class App extends Component {

    render() {

        return (
            <div className="container">
                    <h1 className="App-title text-danger text-center">Lista Postova</h1>
                <div>
                    <div className="panel panel-primary">
                        <div className="panel-title btn-dark">Post</div>
                        <div className="panel-body">
                            Tekst posta
                        </div>
                        <div className="panel-footer">
                            <h2>Korisnik</h2>
                             <button className="btn-danger"> Obrisi</button>
                            <button className="btn-primary"> Poravi</button>
                            <button className="btn-success"> Posalji</button>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
