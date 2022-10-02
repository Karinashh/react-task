import {DEC, INC, RESET, SET, useCount2Reducer} from "../reducers";

const Count2 = () => {
    const [state, dispatch] = useCount2Reducer()
    return(
        <div>
            <h1>Count 2: {state.count2}</h1>
            <button onClick={() => dispatch({type: INC})}>INCREMENT</button>
            <button onClick={() => dispatch({type: DEC})}>DECREMENT</button>
            <button onClick={() => dispatch({type: RESET})}>RESET</button>
            <button onClick={() => dispatch({type: SET, payload: -20})}>SET</button>
        </div>
    )
}
export {Count2}