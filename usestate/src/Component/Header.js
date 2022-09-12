import './Header.css';

const Header = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>{props.menu}</li>
          <li>{props.menu}</li>
          <li>{props.menu}</li>
          <li>{props.menu}</li>
          <li>{props.menu}</li>
        </ul>
      </nav>
    </header>
  );
};

// Props 기본값 설정
Header.defaultProps = {
  menu: '메뉴',
};

export default Header;
