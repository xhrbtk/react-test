import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'

const stateChanger = (state, action) => {
  if (typeof state === 'undefined') {
    return 0
  }
  switch (action.type) {
    case 'add':
      return state + action.payload
 
    default:
      return state
  }
}

const store = createStore(stateChanger)
store.subscribe(render)
function render(){
  ReactDOM.render(
    <React.StrictMode>
      <App  value={store.getState()}  
      onAdd1={() => store.dispatch({ type: 'add', payload: 1 })} 
      onAdd2={() => store.dispatch({ type: 'add', payload: 2 })}
      onAddIf={() => {
        let oldstate = store.getState()
        if(oldstate % 2 == 1){
          store.dispatch({ type: 'add', payload: 1 })
        }
      }}
      add1After2sec={() => {
        setTimeout(() => {
          store.dispatch({ type: 'add', payload: 1 })
        }, 2000)
      }}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
