import { useState } from "react";

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
  const [name, setName] = useState([
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    },
    {
      id: 4,
      name: 'd'
    },
  ])

  const nameList = name.map((value) => <li key={value.id}>{value.name}</li>)
  return <ul>{nameList}</ul>
}

export default IterationSample;