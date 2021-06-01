import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
// import myLogger from './middlewares/myLogger';
import rootReducer, { rootSaga } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';

export const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
// export default createStore(rootReducer, applyMiddleware(myLogger, logger));
export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware, //사가 미들웨얼ㄹ 적용
      logger
    )
  )
); // 여러개의 미들웨어를 적용 가능

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해 줍니다
