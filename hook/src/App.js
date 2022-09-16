import { useState } from "react";
import Counter from "./Component/Counter.js";
import NamePractice from "./Component/NamePractice.js";
import Average from "./Component/Average.js";

function App() {
  const [visible, setVisible] = useState(false); // 초기값 false로 설정
  return (
    <>
      <Counter />
      <button onClick={() => {
        setVisible(!visible); // 클릭 이벤트가 일어날시 현재값의 반대로 바뀜
      }}>{visible ? '보이기' : '숨기기'}</button>
      {/* visible이 true이면 보이기 /false면 숨기기 */}
      <hr />
      {visible && <NamePractice />}
      {/* visible이 true이면 NamePractice컴포넌트 마운트  */}
      <Average />
    </>
  );
}

export default App;
