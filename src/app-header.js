import React,{Component} from 'react';
import {Link} from 'react-router-dom'


class Appheader extends Component{
    handleClick() {
        console.log('Hejsa');
      }
     
render (){
return(

<div>

    <div id="form">
        <div className="form">
            <form className="register-form">
                <input type="text" placeholder="Navn" />
                <input type="password" placeholder="Kodeord" />
                <input type="text" placeholder="Email" />
                <button>Opret</button>
                <p className="message">Har du en konto? <p>Login</p></p>
            </form>
            <form className="login-form">
                <input type="text" placeholder="Brugernavn" />
                <input type="password" placeholder="Kodeord" />
                <button>login</button>
                <p className="message">Har du ikke en konto?<p> Lav en konto</p></p>
            </form>
        </div>
    </div>

    <header>
        <img id="logo" src="/img/ScubaLiving_logo_small.svg" alt="" />
        <nav>
            <ul>
                <li> <Link to="/Home">HOME </Link></li>
                <li> <Link to="/Dykkerudstyr">DYKKERUDSTYR </Link> </li>
                <li> <Link to="/Dykkerrejser">DYKKERREJSER </Link> </li>
                <li> <Link to="/Dykkerkursus">DYKKERKURSUS </Link> </li>
                <li> <Link to="/Kontakt">KONTAKT </Link> </li>
                <li> <Link to="/Om-os">OM OS </Link> </li>
            </ul>
        </nav>


        <input id="input" type="text" />
        <button id="sog" type="submit">SØG</button>


        <img id="input2" src="/img/lock-icon-300x300.png" alt="" />
        <button id="sog2" onClick={this.handleClick}>Login</button>
    </header>

</div>

)
}
}

export default Appheader;