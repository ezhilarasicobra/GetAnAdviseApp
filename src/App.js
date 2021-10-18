import axios from 'axios'
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       advice:""
    }
  }
  componentDidMount(){
   this.fetchAdvice()
  }
  fetchAdvice=async()=>{
try {
  const {data}=await axios.get('https://api.adviceslip.com/advice')
  const {advice}=data.slip
  this.setState({advice})
} catch (error) {
  console.log(error)
}
  }


  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App
