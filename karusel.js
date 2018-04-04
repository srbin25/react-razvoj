/**
 * Created by trika on 06-Feb-18.
 
 */
import React from 'react';
import '../App.css';

const Karusel = () => (
    <div className="container">
        <div id="myCarousel" className="carousel slide " data-ride="carousel">
            <div className="carousel-inner ">
                <div className="item active ">
                    <img className="img img-responsive" src={require('../slike/motiv1.jpg')} alt="sliak"
                         data-toggle="modal" data-target="#myModal"/>
                </div>
                <div className="item ">
                    <img className="img img-responsive" src={require('../slike/motiv2.jpg')} alt="sliak"
                         data-toggle="modal" data-target="#myModal"/>
                </div>
                <div className="item ">
                    <img className="img img-responsive" src={require('../slike/oblak.jpg')}  alt="sliak"
                         data-toggle="modal" data-target="#myModal"/>
                </div>
                <Modal />
            </div>
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </div>
);

export default Karusel;
