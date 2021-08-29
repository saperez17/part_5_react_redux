import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const counterReducer = (state = 1, action) => {
  //state is a js object. in this case state=0; state={counter:0}
  //action is also a js object. action={type:'INCREMENT'}
  switch (action.type) {
    case "INCREMENT": {
      console.log("INCREMENTING state");
      return state + 1;
    }
    case "DECREMENT": {
      return state - 1;
    }
    case "ZERO": {
      return 0;
    }
    default: {
      return state;
    }
  }
};

const store = createStore(counterReducer);

const App = () => {
  return (
    <div>
      <div>Counter: {store.getState()} </div>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => store.dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => store.dispatch({ type: "ZERO" })}>zero</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

const renderApp = () => {
  ReactDOM.render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement
  );
};

renderApp();
store.subscribe(renderApp);
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
