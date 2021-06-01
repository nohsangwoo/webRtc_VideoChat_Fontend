import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: grid;
  grid-auto-rows: 1fr;
`;

const ItemWrapper = styled.div`
  border: 1px solid black;
  overflow: auto;
`;
const Item = styled.pre``;
const ShowComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 3rem;
`;

const Button = styled.button`
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.gray};
    color: white;
  }
`;

const UseEffectPracticeContainer = () => {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => {
    console.log('resource a changed');
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(res => res.json())
      .then(json => setItems(json));

    return () => {
      console.log('return from resource change');
    };
  }, [resourceType]);

  const onClickSetResourceType = text => {
    setResourceType(text);
  };

  return (
    <Container>
      <ItemWrapper>
        <ShowComponent>{resourceType}</ShowComponent>
      </ItemWrapper>
      <ItemWrapper>
        <ShowComponent>{windowWidth}</ShowComponent>
      </ItemWrapper>
      <ItemWrapper>
        {items.map((item, index) => {
          return <Item key={index}>{JSON.stringify(item)}</Item>;
        })}
      </ItemWrapper>
      <ItemWrapper>
        <Button onClick={() => onClickSetResourceType('posts')}>Posts</Button>
      </ItemWrapper>
      <ItemWrapper>
        <Button onClick={() => onClickSetResourceType('users')}>Users</Button>
      </ItemWrapper>
      <ItemWrapper>
        <Button onClick={() => onClickSetResourceType('comments')}>
          Comments
        </Button>
      </ItemWrapper>
    </Container>
  );
};

export default UseEffectPracticeContainer;
