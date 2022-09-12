import { Component } from 'react';

class ScrollBox extends Component {
  // 컴포넌트에 메서드 생성
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    // const scrollHeight = this.box.scrollHeight
    // const ClientHeight = this.box.ClientHeight
    this.box.scrollTop = scrollHeight - clientHeight;
    console.log('hi');
  };
  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
    };
    const innerstyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white,black)',
    };
    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }} // div에 ref달기
      >
        <div style={innerstyle}></div>
      </div>
    );
  }
}

export default ScrollBox;
