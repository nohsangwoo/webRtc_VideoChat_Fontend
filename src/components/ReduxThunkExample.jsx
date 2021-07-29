import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from './../store/reducers/counter';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function ReduxThunkExample() {
  const { number } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    //   redux action으로 만들어진게 아니라 thunk로 만들어진 decreaseAsync를 불러와서 dispatch함
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    //   위와(onIncrease) 마찬가지 이유
    dispatch(decreaseAsync());
  };

  return (
    <Container>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </Container>
  );
}

export default ReduxThunkExample;
