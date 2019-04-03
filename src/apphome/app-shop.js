import React,{Component} from 'react';


class AppShop extends Component{

render (){
return(
<div>
    <div id="udstyr">
        <div className="box">
            <img src="/img/reg.jpg" alt="billedtext"/>
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
        <div className="box">
            <img src="./img/fine.jpg" alt="billedtext" />
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
        <div className="box">
            <img src="./img/fine.jpg" alt="billedtext" />
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
        <div className="box">
            <img src="./img/Hanske.jpg" alt="billedtext" />
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
    </div>
    <h1>SE MERE LÆKKERT UDSTYR HER!</h1>
    <h3>DYK UD I VERDEN</h3>
</div>


)
}
}

export default AppShop;