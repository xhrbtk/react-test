
## react  https://www.bootcdn.cn/

## 虚拟dom 是一个对象

## jsx 就是用html的方式写js

## 有副作用的函数 如果你在看一个函数 发现了一个东西不知道从哪儿来的 这就是又副作用的函数


## react 的生命周期
- 创建app
- componentWillMount 将要mount app
- render  填充/更新 app 的内容
- componentDidMount mount app 完毕
- componentWillUpdate update app之前
- componentDidUpdate update app 之后
- componentWillunmount app要死了
- componentWillReceiveProps  初始化 render 的时候不执行 在component 接收到新的状态时出发 一般用于父组件状态更新世
自组建的重新渲染
-  shouldcomponentupdate 的作用 允许我们手动的判定是否要进行组件更新 根据组建的应用场景设置函数的合理返回值能够帮我吗避免不必要的更新


-- react 使用clasename插件  https://github.com/JedWatson/classnames
-- css in js https://github.com/MicheleBertoli/css-in-js 
--  如果是写ui库 就直接使用原生的 如果是写一个app 商城之类的可以选择使用 css-in-js
-- css-in-js： styled-components：  https://github.com/styled-components/styled-components