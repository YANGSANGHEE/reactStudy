import { useState } from "react";

const getAverage = numbers => {// 인수를 받는 값을 평균을 내는 함수
  console.log('계산중'); // 콘솔 찍음
  if (numbers.length === 0) return 0; // 만약 인수를 받는 배열의 길이? 가 0이면 0을 반환
  const sum = numbers.reduce((a, b) => a + b); // sum 이라는 변수에 number 배열의 핪을 담음
  return sum / numbers.length; // 배열의 합 / 배열의 길이
};

const Average = () => {
  const [list, setList] = useState([]); // 빈배열초기화
  const [number, setNumber] = useState('');  // 빈값 초기화

  const onChange = (e) => {
    setNumber(e.target.value); // 이벤트가 일어나는 타겟의 value값을 Number에 담음
  }

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number)); // list에 Number로 들어오는 값 하나하나를 배열로 합침
    setList(nextList); //  number배열담은  list를 다시 list에 셋팅 
    setNumber(''); // setNumber 다시 초기화
  }

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b>{getAverage(list)}
      </div>
    </div>
  )
}

export default Average