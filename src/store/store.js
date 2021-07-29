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
      // ReduxThunk.withExtraArgument: thunk사용시 추가 인자를 전달한다는 의미(3번째부터 extra argument를 받아온다)
      // thunk함수에서 3번째 인자로 history라는 인자가 추가되고
      // createBrowserHistory로 만들어진 customHistory가 history에 할당된다.
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware, //사가 미들웨어 적용
      logger
    )
  )
); // 여러개의 미들웨어를 적용 가능

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해 줍니다
