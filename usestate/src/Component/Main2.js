import { Component } from 'react';
import './Main2.css';

// class Main2 extends Component {
//   constructor(props) {
//     // class형 컴포넌트에서 constructor를 작성할 때는 반드시 super(props)를설정해야함
//     super(props);
//     //state 초기값 설정
//     this.state = {
//       number: 0,
//     };
//   }
//   render() {
//     const { number } = this.state; //state를 조회할때 this.state로 조회
//     return (
//       <>
//         <h1>{number}</h1>
//         <button
//           onClick={() => {
//             // onCLick을 통해 버튼이 클릭되었을떄 호출할 함수를 지정
//             this.setState({ number: number + 1 });
//           }}
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

// class Main2 extends Component {
//   state = {
//     number: 0,
//     fixednumber: 0,
//   };
//   render() {
//     const { number, fixednumber } = this.state; //state를 조회할때 this.state로 조회
//     return (
//       <>
//         <h1>{number}</h1>
//         <h1>고정된 넘버 {fixednumber}</h1>
//         <button
//           onClick={() => {
//             this.setState((prevState) => {
//               return { number: prevState.number + 1 };
//             }); //버튼 클릭시 this.setState라는 함수에 매개변수로 number가 1증가해서 값을 리턴하는 함수를 넣어줌
//             this.setState((prevState) => ({
//               number: prevState.number + 1, //버튼 클릭시 this.setState라는 함수에 매개변수로 number가 1씩 증가하는 함수를 넣어줌
//             })); // Total 2 증가 // 리액트는 단방향 데이터 바인딩을 하기 때문에 변화를 감지하고 화면 update하는 코드를 매번 작성해야함.
//           }}
//         >
//           +1
//         </button>
//       </>
//     );
//   }
// }

class Main2 extends Component {
  state = {
    number: 0,
    fixednumber: 0,
  };
  render() {
    const { number, fixednumber } = this.state; //state를 조회할때 this.state로 조회
    return (
      <>
        <h1>{number}</h1>
        <h1>고정된 넘버 {fixednumber}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }, () => {
              console.log('호출되었습니다.');
            });
          }}
        >
          +1
        </button>
      </>
    );
  }
}
export default Main2;
