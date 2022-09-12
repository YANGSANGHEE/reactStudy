import { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState(''); // message : 현재상태 / setMessage : 샅태를 바꾸어주는 함수(setter함수)
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히가세요');
  const [color, setColor] = useState('black');
  const object = { a: 1, b: 2, c: 3 };
  const newobject = { ...object, b: 4 };
  console.log(newobject);
  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: 'red' }}
        onClick={() => {
          setColor('red');
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          setColor('blue');
        }}
      >
        파란색
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => {
          setColor('green');
        }}
      >
        초록색
      </button>
    </>
  );
};

export default Say;
