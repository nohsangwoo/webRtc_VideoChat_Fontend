import React, { useEffect } from 'react';
import Hello from './../../components/App';
const FastSpeedtest = require('fast-speedtest-api');

const SpeedtestContainer = () => {
  useEffect(() => {
    let speedtest = new FastSpeedtest({
      token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm', // required
      verbose: false, // default: false
      timeout: 10000, // default: 5000
      https: true, // default: true
      urlCount: 5, // default: 5
      bufferSize: 8, // default: 8
      unit: FastSpeedtest.UNITS.Mbps, // default: Bps
    });

    (async function getSpeed() {
      try {
        const getSpeed = await speedtest.getSpeed();
        console.log('getSpeed', getSpeed);
      } catch (e) {
        console.log(e.message);
      }
    })();

    // st.com/netflix/speedtest/v2?https=true&token=YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm&urlCount=5
    // speedtest
    //   .getSpeed()
    //   .then(s => {
    //     console.log(`Speed: ${s} Mbps`);
    //   })
    //   .catch(e => {
    //     console.error(e.message);
    //   });

    // return () => {};
  }, []);

  return (
    <div>
      <Hello></Hello>
    </div>
  );
};

export default SpeedtestContainer;
