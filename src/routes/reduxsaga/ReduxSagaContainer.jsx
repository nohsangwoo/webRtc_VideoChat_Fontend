import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../../components/Counter';
import { sagaincrease, sagadecrease } from '../../store/reducers/sagacounter';
const Container = styled.div`
  display: grid;
  grid-auto-rows: minmax(2rem, auto);
`;

const ReduxSagaContainer = () => {
  //generator 기본 문법
  // function* generatorFunction() {
  //   console.log('Hi there');
  //   yield 1;
  //   console.log(`it's generator function`);
  //   yield 2;
  //   console.log('function*');
  //   yield 3;
  //   return 4;
  // }
  // const generator = generatorFunction();
  // console.log(generator.next());
  // console.log(generator.next());

  // generator
  // function* sumGenerator() {
  //   console.log('sumGenerator이 시작됐습니다.');
  //   let a = yield;
  //   console.log('a값을 받았습니다.', a);
  //   let b = yield;
  //   console.log('b값을 받았습니다.', a, b);
  //   yield a + b;
  // }

  // const sum = sumGenerator();
  // console.log(sum.next());
  // console.log(sum.next(2));
  // console.log(sum.next(3));

  function* watchGenerator() {
    console.log('모니터링 시작!');
    while (true) {
      const action = yield;
      if (action.type === 'HELLO') {
        console.log('안녕하세요?');
      }
      if (action.type === 'BYE') {
        console.log('안녕히 가세요!');
      }
    }
  }

  const watch = watchGenerator();
  const number = useSelector(state => state.sagaCounter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(sagaincrease());
  };
  const onDecrease = () => {
    dispatch(sagadecrease());
  };
  watch.next();
  watch.next({ type: 'HELLO' });
  watch.next({ type: 'HELLO' });
  watch.next({ type: 'BYE' });
  return (
    <Container>
      <Counter
        number={number}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </Container>
  );
};

export default ReduxSagaContainer;
