import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from './Styles/Theme';
import GlobalStyles from './Styles/GlobalStyles';
import Room from './routes/room';
import CreateRoom from './routes/CreateRoom';
import simplechat from './routes/simpleChat/Container';
import copyClipboard from './routes/copyclipboard';
import thunkexample from './routes/thunkTest';
import fullscreenexample from './routes/fullscreen';
import reduxthunkpromise from './routes/reduxThunkPromise';
import PostPage from './routes/reduxThunkPromise/PostPage';
import ReduxSaga from './routes/reduxsaga';
import useEffectPractice from './routes/useeffectpractice';
import speedTestContainer from './routes/speedtest';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {/* <SimpleChat /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CreateRoom} />
          <Route path="/room/:roomID" component={Room} />
          <Route path="/chat" component={simplechat} />
          <Route path="/copytoclipboard" component={copyClipboard} />
          <Route path="/thunkexample" component={thunkexample} />
          <Route path="/fullscreen" component={fullscreenexample} />
          <Route
            path="/reduxthunkpromise"
            exact
            component={reduxthunkpromise}
          />
          <Route path="/reduxthunkpromise/:id" component={PostPage} />
          <Route path="/reduxsaga" component={ReduxSaga} />
          <Route path="/useeffectpractice" component={useEffectPractice} />
          <Route path="/speedtest" component={speedTestContainer} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
