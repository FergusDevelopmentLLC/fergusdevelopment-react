import React from 'react'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import PortfolioContainer from '../src/containers/PortfolioContainer'
import ContactContainer from '../src/containers/ContactContainer'

const App = () => {

  return (
    <Router>
      <Header /> 
      <Switch>
        <Route exact path="/" component={ PortfolioContainer } />
        <Route exact path="/page2" component={ PortfolioContainer } />
        <Route exact path="/about" component={ ContactContainer } />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
