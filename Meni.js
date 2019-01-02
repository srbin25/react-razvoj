import React,{Component} from 'react';

class Meni extends Component{

    render(){
        return(

            <div className="navbar navbar-inverse" style={{marginTop:'30px'}}>
                <div className="navbar-header">
                    <a className="navbar-brand push-left offset-2" href="">WebSiteName</a>
                </div>
                    <ul className="nav nav-pills push-right">
                        <li><a href="">Home</a></li>
                        <li><a href="">O nama</a></li>
                        <li><a href="">Kontakt</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
            </div>
            );
    }
}
export default Meni;
/*


 */