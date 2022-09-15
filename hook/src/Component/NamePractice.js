import { useState } from 'react'

const NamePractice = () => {
  const [Name, setName] = useState(''); // 변수 초기값 설정
  const [Nickname, setNickname] = useState(''); // 변수 초기값설정

  const onChangeName = (e) => {
    setName(e.target.value); // 함수가 호출될시 Name값을 이벤트 타겟의 value값으로 받겠음
  }
  const onChangeNicName = (e) => {
    setNickname(e.target.value); // 함수가 호출될시 Name값을 이벤트 타겟의 value값으로 받겠음
  }
  return (
    <>
      <div>
        <input value={Name} onChange={onChangeName} />
        <input value={Nickname} onChange={onChangeNicName} />
      </div>
      <div>
        <div>
          <b>이름:</b> {Name}
        </div>
        <div>
          <b>닉네임:</b> {Nickname}
        </div>
      </div>
    </>
  )
}

export default NamePractice