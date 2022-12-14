import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../atom/Text';
import Button from '../../../atom/Button';
import useModal from '../../../app/hooks/useModal';
import { getStoredUser } from '../../../../auth/user-storage';

export default function UserInfo(props: any) {
  const { openModal } = useModal();
  const user = getStoredUser();
  const openGuestBook = () => {
    openModal({
      type: 'guestbook',
      props: {
        userCode: user.userCode,
        nickname: props.nickname,
      },
    });
  };
  return (
    <StyleUserInfo>
      <div className="user-info--top">
        <img className="userinfo-img" src={props.profileImg} />
        <Text>{props.nickname}</Text>
        <Text className="good">π {props.userLikes || 10}</Text>
      </div>
      <Button onClick={openGuestBook} className="guestBtn">
        λ΄ λ°©λͺλ‘ λ³΄κΈ°
      </Button>
      <div className="user-info--middle">
        <Text fontSize="lg" className="nickname">
          λλ€μ
        </Text>
        <input
          className="nickname-input"
          placeholder="λ³κ²½νμ€ λλ€μ μλ ₯ν΄μ£ΌμΈμ"
          onChange={(e) => props.setInputNickName(e.target.value)}
        />
      </div>
      <p className="user-info--bottom">μκΈμκΈμμ μ¬μ©λλ μ΄λ¦μλλ€.</p>
    </StyleUserInfo>
  );
}

const StyleUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & input {
    background-color: ${({ theme }) => theme.mode.mainBackground};
    color: ${({ theme }) => theme.mode.primaryText};
  }

  & .user-info--top {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  & .guestBtn {
    margin-bottom: 2rem;
  }

  &. user-info--middle {
    display: flex;
  }

  .nickname {
    margin-right: 1rem;
  }

  .userinfo-img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .nickname-input {
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    outline: none;
    width: 60%;
  }

  & .user-info--bottom {
    margin-top: 2rem;
    border-bottom: solid 1px;
    color: #868e96;
    font-size: 0.875rem;
  }
`;
