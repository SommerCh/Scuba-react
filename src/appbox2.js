import React,{Component} from 'react';


class Appbox2 extends Component{

render (){
return(
<div>
    <div id="udstyr">
        <div className="box1">
            <img src="/img/reg.jpg" />
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
        <div className="box">
            <img src="./img/fine.jpg" />
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
        <div className="box">
            <img src="./img/fine.jpg" alt="" />
            <h4>overskrift</h4>
            <p>endnu mere tekst</p>
        </div>
        <div className="box">
            <img src="./img/Hanske.jpg" alt="" />
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

export default Appbox2;