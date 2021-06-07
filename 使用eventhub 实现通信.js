<style>

.root{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
}

.papa{
  border: 1px solid gray;
  padding: 10px;
  margin: 1px;
}

.son{
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
}
</style>







var money = {
    amount: 10000
  }
  
  var fnLists = {}
  var eventHub = {
    trigger(eventName, data){
      let fnList = fnLists[eventName]
      if(!fnList) return 
      for(let i = 0; i < fnList.length; i++){
        fnList[i](data)
      }
    },
    on(eventName, fn){
      if(!fnLists[eventName]){
        fnLists[eventName] = []
      }
      fnLists[eventName].push(fn)
    }
  }
  
  var x = {
    init(){
      eventHub.on('我想花钱了', function(data){
        money.amount -= data
        render()
      })
    }
  }
  x.init()
  class App extends React.Component{
    constructor(){
      super()
      this.state = {
        money: money
      }
    }
    
    render(){
      return (
        <div class="root">
          hi
          <BigPapa money={this.state.money} />
          <YoungPapa money={this.state.money} />
    
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
      eventHub.trigger('我想花钱了', 100)
  
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
   
      eventHub.on('我花钱了', (data)=>{
         this.setState({
           money: money
         })
      })
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
    ReactDOM.render(<App></App>, document.querySelector('#root'))  
  }
  render()