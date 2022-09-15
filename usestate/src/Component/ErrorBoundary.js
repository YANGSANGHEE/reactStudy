import { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: false // 초기값 에러 false로 설정
  }
  componentDidCatch(error, info) { // 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼수 있음 (본인자체는 못잡아냄)
    this.setState({
      error: true //error : 파라미터에 어떤 에러가 발생했는지 알려줌 / info:파라미터는 어디에 있는 코드에서 오류가 발생했는지에 대한 정보를 줌
    })
    console.log({ error, info });
  }
  render() {
    if (this.state.error) return <>
      <div>에러가발생했습니다!</div>
    </>
    return this.props.children // 컴포넌트 사이에있는 태그 밑 자식컴포넌트
  }
}

export default ErrorBoundary