import React,{Component} from 'react';
import Appheader from './app-header'
import AppHome from './apphome/app-home'
import Appfooter from './appfooter'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import ShopSite from './shop/shop';
import Travel from './travel/travel';
import Learn from './learn/learn';
import Kontakt from './kontakt/kontakt';

class App extends Component {

render() {
return (
<BrowserRouter>
  <div className="App">

    <Appheader />

    <Route exact path="/" component={AppHome} />
    <Route path="/Home" component={AppHome} />
    <Route path="/Dykkerudstyr" component={ShopSite} />
    <Route path="/Dykkerrejser" component={Travel} />
    <Route path="/Dykkerkursus" component={Learn} />
    <Route path="/Kontakt" component={Kontakt} />
    <Route path="/Om-os" component={ShopSite} />
    <Appfooter />

  </div>
</BrowserRouter>
);
}
}

export default App;