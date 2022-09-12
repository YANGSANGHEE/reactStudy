import { useState } from 'react';

// class EventPractice extends Component {
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type='text'
//           name='message'
//           placeholder='아무거나입력하시오'
//           onChange={(e) => {
//             console.log(e.target.value); // Syntheticevent는 네이티브 이벤트와 달리 끝나고 바로 이벤트가 초기화 되기 떄문에 정보를 참조할 수 없음.
//             // 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist()함수를 호출해주어야함.
//           }}
//         />
//       </>
//     );
//   }
// }

// class EventPractice extends Component {
//   state = {
//     message: '', // 초기값 설정
//   };
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type='text'
//           name='message'
//           placeholder='아무거나입력하시오'
//           value={this.state.message} // input의 value값을 state.message로 설정
//           onChange={(e) => {
//             this.setState({
//               message: e.target.value, // onchange가 일어나는 이벤트 타겟의 value값으로 message 세팅
//             });
//             console.log(this.state.message);
//           }}
//         />
//         <button
//           onClick={() => {
//             alert(this.state.message); //on change 이벤트로 값이 변경됨
//             this.setState({
//               message: '', //on change 이벤트로 값이 변경된 값을 세팅
//             });
//           }}
//         >
//           확인
//         </button>
//       </>
//     );
//   }
// }

// // 임의의 메서드 만들기
// class EventPractice extends Component {
//   state = {
//     message: '', // 초기값 설정
//   };

//   // prop 값설정
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this); //함수에서 함수 바인딩 (this는 호출부에 따라 결정되는데 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어짐 이벤트로 등록되어도 this가 컴포넌트를 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 작업이 직접 필요함)
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleChange(e) {
//     console.log(this.state.message);
//     this.setState({
//       message: e.target.value,
//     });
//   }

//   handleClick() {
//     alert(this.state.message);
//     this.setState({
//       message: '',
//     });
//   }
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type='text'
//           name='message'
//           placeholder='아무거나입력하시오'
//           value={this.state.message} // input의 value값을 state.message로 설정
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// // property Initializer Syntax
// class EventPractice extends Component {
//   state = {
//     message: '', // 초기값 설정
//   };

//   handleChange = (e) => {
//     this.setState({
//       message: e.target.value, // 화살표 함수 형태로 메서드 정의
//     });
//   };
//   handleClick = (e) => {
//     alert(this.state.message);
//     this.setState({
//       message: '',
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type='text'
//           name='message'
//           placeholder='아무거나입력하시오'
//           value={this.state.message} // input의 value값을 state.message로 설정
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// // input 여러개 다루기
// class EventPractice extends Component {
//   state = {
//     username: '', // 초기값 설정
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value, // 인풋의 네임을 state값으로 설정한 후에 값을 받아온다. (input에 들어오는 value값 username : e.target.value / message : e.target.value)
//     });
//   };
//   handleClick = (e) => {
//     alert(this.state.username + ':' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type='text'
//           name='username' //name 값을 이리 설정한 이유는 state의 값을 받기 위해서임
//           placeholder='사용자명'
//           value={this.state.username} // input의 value값을 state.message로 설정
//           onChange={this.handleChange}
//         />
//         <input
//           type='text'
//           name='message'
//           placeholder='아무거나입력하시오'
//           value={this.state.message} // input의 value값을 state.message로 설정
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

// onkeypress 이벤트 핸들링
// class EventPractice extends Component {
//   state = {
//     username: '', // 초기값 설정
//     message: '',
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value, // 인풋의 네임을 state값으로 설정한 후에 값을 받아온다. (input에 들어오는 value값 username : e.target.value / message : e.target.value)
//     });
//   };
//   handleClick = (e) => {
//     alert(this.state.username + ':' + this.state.message);
//     this.setState({
//       username: '',
//       message: '',
//     });
//   };
//   handleKeypress = (e) => {
//     if (e.key === 'Enter') {
//       //event로 눌려진 키가 엔터일때 handleClick이라는 함수를 호출한다.
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <>
//         <h1>이벤트 연습</h1>
//         <input
//           type='text'
//           name='username' //name 값을 이리 설정한 이유는 state의 값을 받기 위해서임
//           placeholder='사용자명'
//           value={this.state.username} // input의 value값을 state.message로 설정
//           onChange={this.handleChange}
//         />
//         <input
//           type='text'
//           name='message'
//           placeholder='아무거나입력하시오'
//           value={this.state.message} // input의 value값을 state.message로 설정
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeypress}
//         />
//         <button onClick={this.handleClick}>확인</button>
//       </>
//     );
//   }
// }

//함수 컴포넌트로 구현
// const EventPractice = () => {
//   const [username, setUsername] = useState('');
//   const [message, setMessage] = useState('');
//   const onChangeUsername = (e) => {
//     setUsername(e.target.value);
//   };
//   // username = e.targer.value

//   const onChangeMessage = (e) => {
//     setMessage(e.target.value);
//   };
//   // Message = e.targer.value

//   const onClick = () => {
//     alert(username + ':' + message);
//     setUsername(''); // this.state({username : ''}) // 이미 위에서 값을 받아오기떄문
//     setMessage(''); // this.state({message : ''}) // 이미 위에서 값을 받아오기 떄문
//   };
//   const onkeypress = (e) => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };
//   return (
//     <>
//       <h1>이벤트 연습</h1>
//       <input
//         type='text'
//         name='username' //name 값을 이리 설정한 이유는 state의 값을 받기 위해서임
//         placeholder='사용자명'
//         value={username} // input의 value값을 state.message로 설정
//         onChange={onChangeUsername}
//       />
//       <input
//         type='text'
//         name='message'
//         placeholder='아무거나입력하시오'
//         value={message} // input의 value값을 state.message로 설정
//         onChange={onChangeMessage}
//         onKeyPress={onkeypress}
//       />
//       <button onClick={onClick}>확인</button>
//     </>
//   );
// };

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form; //form = {username : '', message : ''}

  const onChange = (e) => {
    const nextForm = {
      ...form, //{username : '', message : ''}
      [e.target.name]: e.target.value,
    };
    console.log(form);
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onkeypress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type='text'
        name='username' //name 값을 이리 설정한 이유는 state의 값을 받기 위해서임
        placeholder='사용자명'
        value={username} // input의 value값을 state.message로 설정
        onChange={onChange}
      />
      <input
        type='text'
        name='message'
        placeholder='아무거나입력하시오'
        value={message} // input의 value값을 state.message로 설정
        onChange={onChange}
        onKeyPress={onkeypress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventPractice;
