import { Component } from 'react';

class Lifecircle extends Component {
  state = {
    // 초기값 설정
    number: 0,
    color: null,
  };

  myref = null; // ref 설정할 부분

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // props로 받아온 값을 state에 동기화 시키는 용도로 사용 (컴포넌트가 마운트 될떄나 업데이트 될때 호출)
    if (nextProps.color !== prevState.color) {
      // 새로생성된 props의 color값이 이전 state의 컬러값과 같지 않다면
      return { color: nextProps.color };
      // color는 새로 생성된 props의 컬러값이다.
    }
    return null;
  }

  componentDidMount() {
    // 첫렌더링 다 마친 후 실행(이벤트등록,라이브러리 또는 프레임워크 함수 호출 이벤트등록, setTimeout 등등 비동기 처리할때 처리)
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 첫 렌더링 이후에 props나 state값이 변동이 있을때 리렌더링을 시작할지 여부를 정하는 메서드
    console.log('shuldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4; // 뒷자리가 4가 아닐때 리렌더링 진행(true)
  }

  componentWillUnmount() {
    // 컴포넌트에 있는 DOM을 제거할때 실행
    //등록한 이벤트나 직접 생성한 Dom을 삭제
    console.log('componentWillunmount');
  }

  handleClick = () => {
    // handleClick이라는 함수가 호출될때
    this.setState({
      number: this.state.number + 1, // number값이 +1 됨
    });
  };

  getSnapshotBeforeUpdate(preProps, prevState) {
    // render에서 만든 결과물이 브라우저에 실제로 반영되기전에 호출됨
    // componentDidUpdate에서 세번쨰 파라미터인 snapshot 값으로 전달받을 수 있음★
    console.log('getSnapshotBeforeUpdate');
    if (preProps.color !== prevState.color) {
      return this.myref.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 리렌더링이 완료된후 실행 업데이트가 끝난 직후 이므로 , DOM 관련 처리를 해도 무방
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기전 색상 : ', snapshot);
    }
  }
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <>
        <h1 style={style} ref={(ref) => (this.myref = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </>
    );
  }
}

export default Lifecircle;
