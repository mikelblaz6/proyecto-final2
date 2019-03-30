//import componentes de librerias
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

//import mis ficheros internos
import Router from './Router'
import cartReducer from './componentes/carro/reducer';



const Navigation = ({cart}) => (
  <nav>
    <ul className="top-menu">
      <li><NavLink to='/'>Inicio</NavLink></li>
      <li><NavLink to='/carro'>Realizar pedido <br></br>(Cantidad total seleccinada: {cart.reduce((acc, item) => {
            return acc + item.quantity}, 0)} unidades)</NavLink></li>
    </ul>
  </nav>
)

class App extends Component {
  render() {
    return (
      <div className= 'page-container'>
        <h1>TIENDA ONLINE</h1>   
        <Navigation { ...this.props }/> 
        <Router /> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default withRouter(connect(mapStateToProps)(App));
