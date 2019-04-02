import React,{Component} from 'react';


class Appheader extends Component{

render (){
return(

<div>

    <div id="form">
        <div class="form">
            <form class="register-form">
                <input type="text" placeholder="Navn" />
                <input type="password" placeholder="Kodeord" />
                <input type="text" placeholder="Email" />
                <button>Opret</button>
                <p class="message">Har du en konto? <a href="#">Login</a></p>
            </form>
            <form class="login-form">
                <input type="text" placeholder="Brugernavn" />
                <input type="password" placeholder="Kodeord" />
                <button>login</button>
                <p class="message">Har du ikke en konto?<a href="#"> Lav en konto</a></p>
            </form>
        </div>
    </div>

    <header>
        <img id="logo" src="/img/ScubaLiving_logo_small.svg" alt="" />
        <nav>
            <ul>

                <li>HOME</li>
                <li>DYKKERUDSTYR</li>
                <li>DYKKERREJSER</li> 
                <li>DYKKERKURSUS</li>
                <li>KONTAKT</li>
                <li>OM OS</li>

            </ul>
        </nav>


        <input id="input" type="text" />
        <button id="sog" type="submit">SØG</button>


        <img id="input2" src="/img/lock-icon-300x300.png" alt="" />
        <button id="sog2" onclick="vis()">Login</button>
    </header>

</div>

)
}
}

export default Appheader;