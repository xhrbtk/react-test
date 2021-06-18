import React, { Component } from "react";
import './button.css';

class Button extends Component {
  constructor(props){
      super(props)
      this.state = { 
          active: false
      }
      this.myRef = React.createRef()
  }
  render(){
    return (
        <button ref={this.myRef} className="button2" onClick={this.x.bind(this)}>
             <span className="value">{this.props.value}</span>
             { 
             this.state.active === true ? <span 
             onAnimationEnd = { this.y.bind(this) }
             className="circle" style={ { left: this.state.deltaX, top: this.state.deltaY } } /> : ''
              }
         </button>
      );
  }
  y(){
      this.setState({
          active: false
      })
  }
  x(event){
      console.log(event)
      let { x, y } = this.myRef.current.getBoundingClientRect()
      let { clientX, clientY } = event
      let deltaX = clientX - x -5
      let deltaY = clientY - y -5
      
      this.setState({
          active: true,
          deltaX: deltaX,
          deltaY: deltaY
      })
  }
}

export default Button;
