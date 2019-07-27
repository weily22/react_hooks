# react_hooks
react Hook 的一些 demo



先来简单了解一下下，

### Hooks

**100％向后兼容**

官方解释：Hooks 是一种 **函数**，该函数允许您从函数式组件 “勾住(hook into)” React 状态和生命周期功能

在函数组件中可以利用hooks 函数去和react 所提供的状态的特性和生命周期函数功能建立联系



#### Effect Hook

官方解释：你之前很可能已经执行了数据提取、订阅、或手工改变来自 React 组件的 DOM。我们称这些操作为“副作用（side effect）”，因为它们会影响其他组件，并且在渲染过程中无法完成。Effect Hook，`useEffect`，增加了从函数式组件执行副作用的功能。

你的一个事件或某一项功能去修改了你的函数或作用域之外的一些特性或功能的时候称之为副作用

以往，在使用类组件的时候，这些副作用的功能通常会写在 类组件的生命周期函数中，但是现在在函数组件中没有了这些生命周期函数，因此react hook 可以用于处理这些功能函数



#### Hook 的规则

- 只能在顶层调用 Hook，不要在循环、条件或嵌套函数中调用 Hook。
- 仅从 React 函数式组件中调用 Hook。不要从常规 JavaScript 函数调用 Hook。（还有另一个有效的地方来调用 Hook，即你的自定义 Hook。）



#### 自定义 Hook

有时，我们希望在组件之间重用一些 有状态逻辑，以前我们比较流行的方案是 [高阶组件](http://react.html.cn/docs/higher-order-components.html) 和 [渲染属性(props)](http://react.html.cn/docs/render-props.html)

这两种方案呢有一些小缺点：

--------高阶组件：可读性降低，逻辑有点复杂

--------渲染属性：需要一层层嵌套，当逻辑复杂时，会增加层次嵌套

那么。。。

当使用 react hooks 之后对这些问题都会有一些非常好的解决方案npm init react-app