import './main.css';

const Main = (props) => {
  // 컴포넌트 함수의 매개변수로 받아와서 사용 가능
  return (
    <main>
      <section>
        <div>box{props.name}</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
        <div>box</div>
      </section>
    </main>
  );
};

export default Main;
