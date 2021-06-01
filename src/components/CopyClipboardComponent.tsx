import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const CopyBTN = styled.button`
  cursor: pointer;
  background: gray;
  color: white;
`;
type Props = {
  title?: string;
  copyText?: string;
};
const CopyClipboard = ({
  title = 'Copy',
  copyText = 'default copy message',
}: Props) => {
  // const copyText = 'this is test copy message';
  return (
    <Container>
      {/* @ts-ignore */}
      <CopyToClipboard text={copyText} style={{ marginBottom: '2rem' }}>
        <CopyBTN>{title}</CopyBTN>
      </CopyToClipboard>
    </Container>
  );
};

export default CopyClipboard;
