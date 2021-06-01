import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button`
  width: 100px;
  height: 100px;
`;

const TextContainer = styled.div`
  border: 1px solid red;
`;

const App = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const toggleModalFunction = () => {
    var element = document.querySelector('#CSS') as HTMLElement;
    setToggleModal(prev => !prev);
    document.body.style.backgroundColor = 'blue';
    console.log(element);
    element.style.backgroundColor = 'black';
  };
  return (
    <Container>
      <Button onClick={toggleModalFunction}>click</Button>
      <TextContainer id={'CSS'} className={'fix-t'}>
        class
      </TextContainer>
    </Container>
  );
};

export default App;
