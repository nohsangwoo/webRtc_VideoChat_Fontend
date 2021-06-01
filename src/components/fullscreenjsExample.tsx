import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// it's screenfull bugs...
import * as _screenfull from 'screenfull';
import { Screenfull } from 'screenfull';
const screenfull = _screenfull as Screenfull;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
`;

const FullScreenBTN = styled.button`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  cursor: pointer;
  font-size: 4rem;
  &:hover {
    background: ${props => props.theme.stickyGray};
    color: white;
    border: 1px solid ${props => props.theme.stickyGray};
  }
`;

const ShowPhoneInfo = styled.div`
  display: flex;
  margin: 2rem;
`;

function ReduxThunkExample() {
  const [mobie, setMobile] = useState<string>('');
  const [deviceInfo, setDeviceInfo] = useState<String>('');

  useEffect(() => {
    // console.log('작');
    // setTimeout(() => {
    //   window.scrollTo(0, 30);
    // }, 1000);
    const whatDevice = (function checkMobile() {
      const varUA: string = navigator?.userAgent?.toLowerCase(); //userAgent 값 얻기
      setMobile(varUA);

      if (varUA.indexOf('android') > -1) {
        //안드로이드
        return 'android';
      } else if (
        varUA.indexOf('iphone') > -1 ||
        varUA.indexOf('ipad') > -1 ||
        varUA.indexOf('ipod') > -1
      ) {
        //IOS
        return 'ios';
      } else {
        //아이폰, 안드로이드 외 web이라던지
        return 'other';
      }
    })();
    setDeviceInfo(whatDevice);
    return () => {};
  }, []);
  useEffect(() => {
    let cleanUp: boolean = false;
    if (screenfull.isFullscreen) {
      console.log(screenfull.isFullscreen);
    }
    if (cleanUp) {
      if (screenfull.isEnabled) {
        screenfull.on('change', () => {
          console.log(
            'Am i full screen?',
            screenfull.isFullscreen ? 'yes' : 'no'
          );
        });
      }
    }
    return () => {
      cleanUp = true;
    };
  });

  const toggleFullScreen = () => {
    screenfull.toggle();
  };
  return (
    <Container>
      <FullScreenBTN onClick={toggleFullScreen}>
        Toggle FullScreen button
      </FullScreenBTN>
      <ShowPhoneInfo>{mobie}</ShowPhoneInfo>
      <div>{`${deviceInfo}`}</div>
    </Container>
  );
}

export default ReduxThunkExample;
