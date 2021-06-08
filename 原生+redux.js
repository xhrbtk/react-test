<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
   <script src="https://cdn.bootcdn.net/ajax/libs/redux/4.0.1/redux.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script>
    
    function add1(){
       store.dispatch({ type: 'add', payload: 1 })
    }
    function add2(){
      store.dispatch({ type: 'add', payload: 2 })
    }
    function addIf(){
      let oldstate = store.getState()
      if(oldstate % 2 == 1){
        store.dispatch({ type: 'add', payload: 1 })
      }
    }
    function add1After2sec(){
        setTimeout(() => {
          store.dispatch({ type: 'add', payload: 1 })
        }, 2000)
    }
    function render(){
       var app = document.querySelector('#app')
        app.innerHTML = `
          <div>
            你点击了<span id="value">${store.getState()}</span>次
            <div>
              <button id="add1" onClick="add1()">+1</button>
              <button id="add2"  onClick="add2()">+2</button>
              <button id="add1IfOdd" onClick="addIf()">如果是单数就+1</button>
              <button id="add1After2sec" onClick="add1After2sec()">两秒钟后+1</button>
            </div>
          </div>
        `
    }

    
     function stateChanger(state, action) {
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

      var store = Redux.createStore(stateChanger)
       render(store)
       store.subscribe(render)
  </script>
</body>
</html>