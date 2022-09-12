import React, { Component } from 'react';
import './Refdom.css';

class Refdom extends Component {
  state = {
    password: '',
    clicked: 'fase',
    validated: 'false',
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value, // password 값을 이벤트 타겟 value로 받음
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: 'true', //click 하면 true
      validated: this.state.password === '0000', // validated 가 password값이 0000이어야 true
    });
    this.input.focus();
  };

  // input = React.createRef();

  // handleFocus = () => {
  //   this.input.current.focus();
  // };

  render() {
    return (
      <>
        <input
          ref={(ref) => {
            this.input = ref; // input 에 ref달음 ref ={(ref)=>{this.input = ref}}
          }}
          type='password'
          value={this.state.password}
          onChange={this.handleChange} // state.password값을 업데이트 하게함
          className={
            this.state.clicked
              ? this.state.validated
                ? 'sucess'
                : 'failure'
              : ''
            //if(clicked === true){
            //if(validated === true){
            //return 'sucess
            //}else{return 'failure}
            //}else{return ''}
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </>
    );
  }
}

export default Refdom;
