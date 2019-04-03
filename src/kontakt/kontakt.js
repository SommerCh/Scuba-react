import React,{Component} from 'react';



class Kontakt extends Component{
handleClick() {
console.log('Hejsa');
}

render (){
return(
<div>
    <h3>Udfyld fomularen</h3>
    <div id="formwrap">
        <form action="tak.html">
            <div className="row">

                <div className="col1">
                    <label for="fname">Fornavne</label>
                </div>
                <div className="col2">
                    <input type="text" id="fnavn" />
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <label for="ename">Efternavne</label>
                </div>
                <div className="col2">
                    <input type="text" id="enavn" />
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <label for="number">Telefonnummer</label>
                </div>
                <div className="col2">
                    <input type="number" id="nummer" />
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <label for="email">Email</label>
                </div>
                <div className="col2">
                    <input type="email" id="email" />
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <label for="subject">Besked</label>
                </div>
                <div className="col2">
                    <textarea id="besked" placeholder="Evt. Besked.."></textarea>
                </div>
            </div>

            <div className="row">
                <input type="submit" value="Send" id="send" />
            </div>
        </form>
    </div>
</div>
)
}
}
export default Kontakt