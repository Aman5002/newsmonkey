import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import tt from './tt'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News/>
        {/* <tt /> */}
      </div>
    )
  }
}
