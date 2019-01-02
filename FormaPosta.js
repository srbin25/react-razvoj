import React, { Component } from 'react';
import './forma.css'
class App extends Component {

    render() {

        return (
        <div className="panel panel-primary prvo">
            <form className="form-horizontal" >
                <div className="panel-title">
                    <div className="form-group">
                        <label className="control-label col-sm-2 labela-selekt"
                               htmlFor="sel1">Kategorija</label>
                        <select className="form-control selekt " style={{ width:"70%"}}
                                id="sel1">
                            <option>Nauka</option>
                            <option>Poljoprivreda</option>
                            <option>Turizam</option>
                            <option>Ostalo</option>
                        </select>
                    </div>
                </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Post</label>
                        <textarea type="password" className="form-control" rows="5"
                                  style={{ marginLeft:'20px',marginRightp:"20px", width:"70%"}}
                                  id="pwd" placeholder="Unesi tekst posta"/>

                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                            <label><input type="checkbox" /> Remember me</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="panel-footer">
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-success">Saljem</button>
                        <button type="submit" className="btn btn-danger">Odustajem</button>
                    </div>
                </div>

            </div>
            </form>
        </div>
        );
    }
}

export default App;
