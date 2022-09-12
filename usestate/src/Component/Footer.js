import { Component } from 'react';
import './Footer.css';
import PropTypes from 'prop-types'; //PropType Import

// const Footer = ({ name, children, num }) => {
//   //비구조화 할당으로 prop 내부값 추출
//   return (
//     <footer>
//       {/* children : 컴포넌트 태그안에 있는 내용을 보여줌 */}
//       <p>
//         Fooooooooooooooooooooooooooooter{name},{children}
//       </p>
//       <p>노는게제일좋은{num}Day</p>
//     </footer>
//   );
// };

// 클래스형 컴포넌트에서 props 사용하기
// class Footer extends Component {
//   render() {
//     const { name, children, num } = this.props; //비구조화 할당
//     return (
//       <footer>
//         <p>
//           Fooooooooooooooooooooooooooooter{name},{children}
//         </p>
//         <p>노는게제일좋은{num}Day</p>
//       </footer>
//     );
//   }
// }

class Footer extends Component {
  // class 컴포넌트 안에서 defaultProps,propTypes 저장
  static defaultProps = {
    name: 3, // type 오류
    num: 4,
  };
  static propTypes = {
    //PropType을 지정할 떄 사용
    name: PropTypes.string,
    num: PropTypes.number.isRequired,
  };
  render() {
    const { name, children, num } = this.props; //비구조화 할당
    return (
      <footer>
        <p>
          Fooooooooooooooooooooooooooooter{name},{children}
        </p>
        <p>노는게제일좋은{num}Day</p>
      </footer>
    );
  }
}

export default Footer;
