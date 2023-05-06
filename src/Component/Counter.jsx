import { useReducer } from "react";

const startingState = { count: 0 };
const reducerCounter = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count == 10 ? 10 : state.count + 1 };
    case "decrement":
      return { count: state.count == 0 ? 0 : state.count - 1 };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducerCounter, startingState);
  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        width: "400px",
        borderRadius: "10px",
        height: "200px",
        padding: "20px",
      }}
    >
      <h2>Counter : {state.count}</h2>
      <button
        style={{ margin: "10px" }}
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter
