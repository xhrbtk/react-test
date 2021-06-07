<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
   <script src="https://cdn.bootcss.com/react/16.4.0/umd/react.production.min.js"></script>
  <script src="https://cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.0.1/redux.min.js"></script>
</head>
<body>
  
    <div id="root">
    
  </div>

</body>
</html>





let createStore = Redux.createStore
let reducers = (state = 0, action) => {
  state = state || {
    money: { amount: 10000 }
  }
  switch (action.type) {
    case '我想花钱':
      return {
        money: {
          amount: state.money.amount - action.payload
        }
      }
    default:
      return state
  }
}
const store = createStore(reducers)

store.subscribe(render)
class App extends React.Component{
  constructor(){
    super()
   
  }
  
  render(){
    return (
      <div class="root">
        hi
        <BigPapa money={this.props.store.money} />
        <YoungPapa money={this.props.store.money} />
  
      </div>
    )
  }
}


class BigPapa extends React.Component{
  constructor(){
    super()
  }
  
  render(){
    return (
      <div class="papa">
        大爸{this.props.money.amount}
        <Son1 money={this.props.money}  />
        <Son2 money={this.props.money}  />
      </div>
    )
  }
}

class YoungPapa  extends React.Component{

 constructor(){
    super()
  }
  render(){
    return (
      <div class="papa">
        二爸{this.props.money.amount}
        <Son3 money={this.props.money}  />
        <Son4 money={this.props.money}  />
      </div>
    )
  }
}

class Son1  extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
       <div class="son">儿子1 {this.props.money.amount}</div>
    )
  }
}
class Son2  extends React.Component{
  constructor(){
    super()
  }
  x(){
    store.dispatch({ type: '我想花钱', payload: 100 })
  }

  render(){
    return (
       <div class="son">
       儿子2 {this.props.money.amount}
       <button onClick={() => this.x()}>消费</button>
       </div>
    )
  }
}
class Son3  extends React.Component{
 constructor(){
    super()
 
  }
  render(){
    return (
       <div class="son">儿子3{this.props.money.amount}</div>
    )
  }
}
class Son4  extends React.Component{
 constructor(){
    super()
  
  }
  render(){
    return (
       <div class="son">儿子4{this.props.money.amount}</div>
    )
  }
}


function render(){
  ReactDOM.render(<App store={store.getState()}></App>, document.querySelector('#root'))  
}
render()