import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 1rem;
  border: 1px solid red;
`;

const PresentNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1rem 0;
  border-bottom: 2px solid black;
`;

const ButtonStyled = styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  align-items: center;
  border: 1px solid ${props => props.theme.keyline};
  border-radius: 1rem;
  cursor: pointer;
  font-size: 2rem;
  color: ${props => props.theme.dark};
  margin: 2rem;
  &:hover {
    background: ${props => props.theme.stickyGray};
    color: white;
    border: 1px solid ${props => props.theme.stickyGray};
  }
`;

type Props = {
  number: string;
  onIncrease: any;
  onDecrease: any;
};

const Counter: React.FC<Props> = ({ number, onIncrease, onDecrease }) => {
  return (
    <Container>
      <PresentNumber>{number}</PresentNumber>
      <ButtonStyled onClick={onIncrease}>+1</ButtonStyled>
      <ButtonStyled onClick={onDecrease}>-1</ButtonStyled>
    </Container>
  );
};

export default Counter;
