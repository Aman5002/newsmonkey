import React, { Component } from 'react'
export default class tt extends Component {
 a = [
    {
      name:"dell"
    }
 ]
 constructor(){
   super();
    this.state = {
      a : this.a
    }
 }
 componentDidMount(){
    console.log("cdm");
    this.setState({name:"hp"})
    console.log(this.a.state.name)
 }
  render() {
    return (
      <div>
      </div>
    )
  }
}
