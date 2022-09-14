import { useState } from 'react';

// const IterationSample = () => {
//   //원형

//   // return (
//   //   <ul>
//   //     <li>눈사람</li>
//   //     <li>얼음</li>
//   //     <li>눈</li>
//   //     <li>비</li>
//   //   </ul>
//   // );

//   //Map 사용

//   const name = ['얼음', '눈', '비', '눈사람']; // 요소들의 내용을 배열에 담음
//   const nameList = name.map((name) => <li>{name}</li>);  // map으로 <li></li>에 내용을 담아 배열로 반환
//   //const nameList = [
//   //<li>얼음</li>
//   //<li>눈</li>
//   //<li>비</li>
//   //<li>눈사람</li>
//   //]

//   return <ul>{nameList}</ul>; // <ul></ul>에 배열 내용 담음
//   //<ul><li>얼음</li><li>눈</li><li>비</li><li>눈사람</li></ul>
// }

// const IterationSample = () => {
//   const name = ['눈', '비', '얼음', '사람'] //배열 선언
//   const nameList = name.map((value, index) =>
//     <li key={index}>{value}</li> // array.map으로 li의 키값을 array의 index로 설정 => 고유 키값일때만 인덱스로해야함
//   )
//   return <ul>{nameList}</ul>
// }

const IterationSample = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    },
    {
      id: 3,
      name: 'c',
    },
    {
      id: 4,
      name: 'd',
    },
  ]); // 배열에 객체들을 담음 // 기본값설정

  const [inputText, setinputText] = useState(''); // Inputtext 상태 초기값 설정 (불변성 유지)
  const [nameId, setnameId] = useState(5); // nameId 상태 초기값 설정
  const onChanges = (e) => setinputText(e.target.value); // 이벤트가 일어나는 타겟의 value값을 inputtext값으로 설정
  const onClicks = () => {
    const newNames = names.concat({
      // names라는 배열에 새객체를 만들어 합쳐준다음 newNames라는 변수에 답는다
      id: nameId,
      name: inputText,
    });
    setnameId(nameId + 1); // click 이라는 함수가 호출되면 nameid + 1 이됨 / 5+1
    setNames(newNames); // names 라는 배열을 newNames라는 배열로 설정
    setinputText(''); // 다시 inputText값은 초기화
  };

  const onRemove = (id) => {
    // 매개변수는 클릭되는 요소의 key 값을 받기위해 뚫음.
    const nextNames = names.filter((name) => name.id !== id); // 매개변수로 들어온 key값이랑 다른 배열요소들을 배열로 리턴
    setNames(nextNames); // 리턴된 배열로 다시 설정
  };

  const nameList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => {
        onRemove(name.id);
      }}
    >
      {name.name}
    </li>
  )); // names라는 배열을 map 메서드를 이용하여 배열 요소의 수만큼의 li를 포함한 배열을 리턴
  return (
    <>
      <input value={inputText} onChange={onChanges} />
      <button onClick={onClicks}>추가하기</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
