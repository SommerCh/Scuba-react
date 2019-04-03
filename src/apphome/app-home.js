import React,{Component} from 'react';
import AppFront from './app-front'
import AppShop from './app-shop'
import AppTravel from './app-travel'
import AppLearn from './app-learn'

class AppHome extends Component {

render() {
return (

<div>

  <AppFront />
  <AppShop />
  <AppTravel />
  <AppLearn />
 
</div>
);
}
}

export default AppHome;