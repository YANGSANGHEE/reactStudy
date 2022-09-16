import { useReducer } from 'react';


function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  }
}

// const NamePractice = () => {
//   const [Name, setName] = useState(''); // 변수 초기값 설정
//   const [Nickname, setNickname] = useState(''); // 변수 초기값설정

//   // useEffect(() => {
//   //   // componentDidmount + componentDidUpdate
//   //   console.log('렌더링됨');
//   //   console.log({
//   //     Name,
//   //     Nickname,
//   //   });
//   // });

//   // useEffect(() => {
//   //   console.log('렌더링됨');
//   // }, []); // 마운트만 실행하고 싶을때

//   // useEffect(() => {
//   //   //특정값이 업데이트돌 떄만 실행하고 있을때
//   //   console.log(Name); // Name이 업데이트 될때마다 콘솔찍힘
//   // }, [Name]); //두번째 파라미터로 전달되는 배열안에 검사하고 싶은값을 넣어주면 됨

//   // useEffect(() => {
//   //   console.log('effect');
//   //   console.log(Name);
//   //   return () => {
//   //     console.log('cleanup')
//   //     console.log(Name); // 뒷정리 함수 반환
//   //   };
//   // }, [Name]);

//   // useEffect(() => {
//   //   console.log('effect');
//   //   return () => {
//   //     console.log('unmount'); // 언마운트 할때만 함수 호출
//   //   };
//   // }, []);

//   const onChangeName = (e) => {
//     setName(e.target.value); // 함수가 호출될시 Name값을 이벤트 타겟의 value값으로 받겠음
//   };
//   const onChangeNicName = (e) => {
//     setNickname(e.target.value); // 함수가 호출될시 Name값을 이벤트 타겟의 value값으로 받겠음
//   };
//   return (
//     <>
//       <div>
//         <input value={Name} onChange={onChangeName} />
//         <input value={Nickname} onChange={onChangeNicName} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {Name}
//         </div>
//         <div>
//           <b>닉네임:</b> {Nickname}
//         </div>
//       </div>
//     </>
//   );
// };

const NamePractice = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  })
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target)
  }

  return (
    <>
      <div>
        <input name='name' value={name} onChange={onChange} />
        <input name='nickname' value={nickname} onChange={onChange} />
      </div>
      <div>
        <div><b>이름:</b>{name}</div>
        <div><b>닉네임:</b>{nickname}</div>
      </div>
    </>
  )
};

export default NamePractice;
