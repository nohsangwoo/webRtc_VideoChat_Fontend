import TextField from '@material-ui/core/TextField';
import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './Container.css';

type StateData = {
  message: string | null;
  name: string | null;
};

function Container() {
  const [state, setState] = useState<StateData>({ message: '', name: '' });
  const [chat, setChat]: Array<StateData | any> = useState([]);

  const socketRef: any = useRef();
  //process.env.REACT_APP_SERVICE_BACKEND

  useEffect(() => {
    // @ts-ignore
    socketRef.current = io.connect(process.env.REACT_APP_SERVICE_BACKEND);
    socketRef.current.on('message', ({ name, message }: StateData) => {
      setChat([...chat, { name, message }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onTextChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e: any) => {
    const { name, message } = state;
    socketRef.current.emit('message', { name, message });
    e.preventDefault();
    setState({ message: '', name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }: StateData, index: number) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField
            name="name"
            onChange={e => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <TextField
            name="message"
            onChange={e => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default Container;
