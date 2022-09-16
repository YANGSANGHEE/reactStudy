import { useReducer } from 'react';

//액션값
function reducer(state, action) { // state : 현재상태 , action : 업데이트를 위해 필요한 정보를 담은 값
  switch (action.type) {
    case 'INCREASE': // action.type이 increase일때
      return { value: state.value + 1 }; //value는 state.value+1
    case 'DECREASE': //action.typedl decrease일때
      return { value: state.value - 1 }; // value는 state.value-1
    default: // 아무것도 해당하지 않을때
      return state; // 기존상태 반환
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 }); // state : 현재상태 , dispatch() : action을 발생시키는 함수 useReducer(함수/함수기본값)
  return (
    <>
      <p>
        현재 카운터 값은 {state.value} 입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1</button>
      {/* action(reducer의 type의 키값을 INCREASE로설정) */}
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1</button>
      {/* action(reducer의 type의 키값을 DECREASE로설정) */}
    </>
  )
}

export default Counter