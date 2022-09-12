import React, { Component } from 'react';
import ScrollBox from './Component/ScrollBox.js';
import EventPractice from './Component/EventPractice.js';
import Refdom from './Component/Refdom.js';
import Header from './Component/Header.js';
import Main from './Component/Main.js';
import Main2 from './Component/Main2.js';
import Say from './Component/Say.js';
import Footer from './Component/Footer.js';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Header></Header>
//         {/* Prop 렌더링 */}
//         <Main name='1'></Main>
//         <Main2></Main2>
//         <Say></Say>
//         <Footer>푸터</Footer>
//       </>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <>
        {/* 컴포넌트에 ref 달고 내부 메서드 사용 */}
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          밑에가즈아
        </button>
      </>
    );
  }
}
export default App;
