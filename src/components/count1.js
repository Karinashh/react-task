import {DEC, INC, RESET, SET, useCount1Reducer} from "../reducers";

const Count1 = () => {
    const [state, dispatch] = useCount1Reducer()
  return(
      <div>
          <h1>Count 1: {state.count1}</h1>
          <button onClick={() => dispatch({type: INC})}>INCREMENT</button>
          <button onClick={() => dispatch({type: DEC})}>DECREMENT</button>
          <button onClick={() => dispatch({type: RESET})}>RESET</button>
          <button onClick={() => dispatch({type: SET, payload: 20})}>SET</button>
      </div>
  )
}
export {Count1}