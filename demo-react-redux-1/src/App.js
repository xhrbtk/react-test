
// 使用react 和 redux
// import React, { Component } from 'react'

// class App extends Component {
//   add1(){
//     this.props.onAdd1()
//   }
//   add2(){
//     this.props.onAdd2()
//   }
//   addIf(){
//     this.props.onAddIf()
//   }
//   add1After2sec(){
//     this.props.add1After2sec()
//   }
//   render(){
//     return (
//       <div>
//         你点击了<span id="value">{this.props.value}</span>次
//         <div>
//           <button id="add1" onClick={this.add1.bind(this)}>+1</button>
//           <button id="add2"  onClick={this.add2.bind(this)}>+2</button>
//           <button id="add1IfOdd"  onClick={this.addIf.bind(this)}>如果是单数就+1</button>
//           <button id="add1After2sec" onClick={this.add1After2sec.bind(this)}>两秒钟后+1</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default App;



// 使用react 和 react-redux

import React, { Component } from 'react';
import { connect } from "react-redux";


class App extends Component {
  render() {
    return (
      <div>
        你点击了 <span id="value">{this.props.n}</span> 次
        <div>
          <button id="add1" onClick={()=> this.props.add1()}>+1</button>
          <button id="add2">+2</button>
          <button id="add1IfOdd">如果是单数就+1</button>
          <button id="add1After2Sec">两秒钟后+1</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    n: state.n
  }
}
function mapDispatchToProps(dispatch) {
  return {
    add1: ()=> dispatch({type:'add', payload: 1})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);