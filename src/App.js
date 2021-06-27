import React from 'react'
import AboutUs from './pages/AboutUs'
import GlobalStyles from './components/GlobalStyles'
import Nav from './components/Nav'
import {Switch, Route } from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
const App = () => {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route path='/' component={AboutUs} exact/>
        <Route path='/work' component={OurWork} />
        <Route path='/work/:id' component={OurWork} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
  )
}

export default App
