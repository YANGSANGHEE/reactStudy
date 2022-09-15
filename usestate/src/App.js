import { Component } from 'react';
import EventPractice from './Component/EventPractice.js';
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
        <EventPractice />
        
      </>
    );
  }
}
export default App;
