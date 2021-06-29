import React, { Component } from 'react'
import {Route,Switch} from "react-router-dom"
import Header from "./components/Header/Header"
import Swap from "./pages/swap/Swap"
import Pool from "./pages/pool/Pool"
import CreateETH from "./pages/ETH/CreateETH"
import AddETH from "./pages/ETH/AddETH"
import Find from "./pages/Import/Find"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css"
class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Swap}/>
        <Route exact path="/swap" component={Swap}/>
        <Route exact path="/pool" component={Pool}/>
        <Route exact path="/create/ETH" component={CreateETH}/>
        <Route exact path="/add/ETH" component={AddETH}/>
        <Route exact path="/find" component={Find}/>
      </Switch>
    </div>
    )
  }
}
export default App