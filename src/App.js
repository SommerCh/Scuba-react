import React,
{
Component
}

from 'react';
import Appheader from './app-header'
import Appbox1 from './appbox1'
import Appbox2 from './appbox2'
import Appbox3 from './appbox3'
import Appbox4 from './appbox4'
import Appfooter from './appfooter'
import './App.css';

class App extends Component {

render() {
return (

<div className="App">
  <Appheader />
  <Appbox1/>
  <Appbox2/>
  <Appbox3/>
  <Appbox4/>
  <Appfooter/>
</div>
);
}
}

export default App;