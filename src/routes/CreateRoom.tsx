import React from 'react';
import { v1 as uuid } from 'uuid';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-flow: column nowrap;
  overflow: auto;
`;

const SelectRoomBTN = styled.button`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin: 2rem 2rem;
  cursor: pointer;
  &:hover {
    background-color: #0071e3;
    color: white;
  }
`;
type Props = {
  history: any;
};

const CreateRoom = (props: Props): any => {
  function create() {
    const id = uuid();
    props.history.push(`/room/${id}`);
  }

  function CreateSimpleChatRoom() {
    props.history.push(`/chat`);
  }

  function CreateCopyTextRoom() {
    props.history.push(`/copytoclipboard`);
  }

  function CreateThunkTestRoom() {
    props.history.push(`/thunkexample`);
  }

  function CreateFullScreenRoom() {
    props.history.push(`/fullscreen`);
  }

  function CreateReduxThunkPromiseRoom() {
    props.history.push(`/reduxthunkpromise`);
  }

  function CreateReduxSagaRoom() {
    props.history.push(`/reduxsaga`);
  }

  function CreateUseEffectPracticeRoom() {
    props.history.push(`/useeffectpractice`);
  }

  function CreateSpeedTestContainerRoom() {
    props.history.push(`/speedtest`);
  }

  return (
    <Container>
      <SelectRoomBTN onClick={create}> Video chat room</SelectRoomBTN>

      <SelectRoomBTN onClick={CreateSimpleChatRoom}>
        Text Chat Room
      </SelectRoomBTN>

      <SelectRoomBTN onClick={CreateCopyTextRoom}>Copy Text Room</SelectRoomBTN>

      <SelectRoomBTN onClick={CreateThunkTestRoom}>
        Redux Thunk Example Room
      </SelectRoomBTN>

      <SelectRoomBTN onClick={CreateFullScreenRoom}>
        FullScreen Example Room
      </SelectRoomBTN>

      <SelectRoomBTN onClick={CreateReduxThunkPromiseRoom}>
        ReduxThunkPromise Example Room
      </SelectRoomBTN>

      <SelectRoomBTN onClick={CreateReduxSagaRoom}>
        Redux Saga Example Room
      </SelectRoomBTN>

      <SelectRoomBTN onClick={CreateUseEffectPracticeRoom}>
        useEffect Example Room
      </SelectRoomBTN>

      <SelectRoomBTN onClick={CreateSpeedTestContainerRoom}>
        internet speed test Room
      </SelectRoomBTN>
    </Container>
  );
};

export default CreateRoom;
