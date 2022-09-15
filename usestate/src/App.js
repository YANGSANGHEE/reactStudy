import { Component } from 'react';
import Lifecircle from './Component/Lifecircle.js';
import ErrorBoundary from './Component/ErrorBoundary.js';

//랜덤 색상 생성
function getColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  // Math.random 메서드로 hex 색상코드넘버 뽑아냄 (toString(16)=>16진법)
  // ex) 최종 return 값 #00000
}

class App extends Component {
  state = {
    color: `#00000` // color 초기값 설정
  }

  handleClick = () => {
    this.setState({
      color: getColor() // color는 getColor의 리턴값으로 받음
    });
  }


  render() {
    return (
      <>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <Lifecircle color={this.state.color} />
          {/* 버튼 클릭시 랜덤으로 색상이 출력됨*/}
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
