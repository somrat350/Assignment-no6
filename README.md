### 1. What is JSX, and why is it used?
#### Answer: JSX stands for JavaScript XML. It is a JavaScript syntax extension that looks like HTML. It is used in React to describe the UI structure in a simple, readable way and makes code easier to write and understand.


### 2. What is the difference between State and Props?
#### Answer: State is used to manage data inside a component and can change over time, while Props are used to pass data from parent to child and are read-only.


### 3. What is the useState hook, and how does it work?
#### Answer: useState is a React hook that allows functional component to have state. It returns an array with two values: the current state and a function to update the state. When the update function is called, React re-renders the component with the new state.


### 4. How can you share state between components in React?
#### Answer: State can be shared in React by lifting it up to a common parent and passing it down via props.


### 5. How is event handling done in React?
#### Answer: Event handling in React is done using camelCase attributes like onClick, onChange etc and passing a function as the event handler.