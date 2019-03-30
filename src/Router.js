import React from 'react'
import { Switch, Route } from 'react-router-dom'

import inicio from './paginas/inicio'
import carro from './paginas/carro'

const routes = () => (
    <Switch>
      <Route exact path='/' component={inicio}></Route>
      <Route exact path='/carro' component={carro}></Route>
    </Switch>
  )
  
  export default routes