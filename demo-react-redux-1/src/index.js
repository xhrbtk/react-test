
// 使用react 和 redux  
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux'

// const stateChanger = (state, action) => {
//   if (typeof state === 'undefined') {
//     return 0
//   }
//   switch (action.type) {
//     case 'add':
//       return state + action.payload
 
//     default:
//       return state
//   }
// }

// const store = createStore(stateChanger)
// store.subscribe(render)
// function render(){
//   ReactDOM.render(
//     <React.StrictMode>
//       <App  value={store.getState()}  
//       onAdd1={() => store.dispatch({ type: 'add', payload: 1 })} 
//       onAdd2={() => store.dispatch({ type: 'add', payload: 2 })}
//       onAddIf={() => {
//         let oldstate = store.getState()
//         if(oldstate % 2 == 1){
//           store.dispatch({ type: 'add', payload: 1 })
//         }
//       }}
//       add1After2sec={() => {
//         setTimeout(() => {
//           store.dispatch({ type: 'add', payload: 1 })
//         }, 2000)
//       }}/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }
// render()
// reportWebVitals();


// 使用react 和 react-redux 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import { Provider } from "react-redux";

const reducer = (state, action)=>{
  if(state === undefined){
    return {n: 0}
  }else{
    if(action.type === 'add'){
      var newState = {n: state.n + action.payload}
      return newState
    }else{
      return state
    }
  }
}
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();