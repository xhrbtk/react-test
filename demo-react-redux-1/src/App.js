import React, { Component } from 'react'

class App extends Component {
  add1(){
    this.props.onAdd1()
  }
  add2(){
    this.props.onAdd2()
  }
  addIf(){
    this.props.onAddIf()
  }
  add1After2sec(){
    this.props.add1After2sec()
  }
  render(){
    return (
      <div>
        你点击了<span id="value">{this.props.value}</span>次
        <div>
          <button id="add1" onClick={this.add1.bind(this)}>+1</button>
          <button id="add2"  onClick={this.add2.bind(this)}>+2</button>
          <button id="add1IfOdd"  onClick={this.addIf.bind(this)}>如果是单数就+1</button>
          <button id="add1After2sec" onClick={this.add1After2sec.bind(this)}>两秒钟后+1</button>
        </div>
      </div>
    )
  }
}

export default App;
