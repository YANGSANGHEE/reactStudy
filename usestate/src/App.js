import { Component } from 'react';
import Header from './Component/Header.js';
import Main from './Component/Main.js';
import Main2 from './Component/Main2.js';
import Footer from './Component/Footer.js';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        {/* Prop 렌더링 */}
        <Main name='1'></Main>
        <Main2></Main2>
        <Footer>푸터</Footer>
      </>
    );
  }
}
export default App;
