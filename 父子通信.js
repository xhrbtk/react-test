
class App extends React.Component{

 
    constructor(){
      super()
      this.state = {
        result1: 0,
        result2: 0
      }
      this.t0 = new Date()
    }
    
     success1(){
      console.log('兔子跑完了用时')
      let r1 = new Date() - this.t0
      this.setState({
        result1: r1
      })
      console.log(r1)
    }
     success2(){
      console.log('乌龟跑完了用时')
      let r2 = new Date - this.t0
      this.setState({
        result2: r2
      })
      console.log(r2)
    }
    
    
    
    render(){
      return (
        <div>
          <div class="header">
            <Time1 result={this.state.result1}/>
            <Judge   />
            <Time2 result={this.state.result2}/>
          </div>
          <Track1 success={this.success1.bind(this)} />
          <Track2 success={this.success2.bind(this)} />
        </div>
      )
    }
  }
  function Time1(props){
    return (
      <div>
        <h2>🐰用时</h2>
        <div>{props.result}</div>
      </div>
    )
  }
  function Time2(props){
    return (
      <div>
        <h2>🐢用时</h2>
        <div>{props.result}</div>
      </div>
    )
  }
  
  function Judge(){
    return (
      <div>裁判</div>
    )
  }
  
  
  
  
  class Track1 extends React.Component{
    constructor(){
      super()
      let n = 0
      this.state = {
        style: {
          transform: `translateX(${n}%)`
        }
      }
      let timer = setInterval(() => {
        n+=30
        this.setState({
          style: {
            transform: `translateX(${n}%)`
          }
        })
        if(n >= 100) {
          window.clearInterval(timer)
          this.props.success()
        }
      }, 1000)
    }
    render(){
      return (
        <div>
          <div class="player" style={this.state.style}>🐰</div>
          <div class="track"></div>
        </div>
      )
    }
  }
  
  class Track2 extends React.Component{
    constructor(){
      super()
      let n = 40
      this.state = {
        style: {
          transform: `translateX(${n}%)`
        }
      }
      let timer = setInterval(() => {
        n+=5
        this.setState({
          style: {
            transform: `translateX(${n}%)`
          }
        })
        if(n >= 100) {
          window.clearInterval(timer)
          this.props.success()
        }
      }, 1000)
    }
    render(){
      return (
        <div>
          <div class="player" style={this.state.style}>🐢</div>
          <div class="track"></div>
        </div>
      )
    }
  }
  
  
  
  ReactDOM.render(<App></App>, document.querySelector('#root'))