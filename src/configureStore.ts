import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { default as rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

import rootSaga from './rootSaga';

const configureStore = (preloadedState: {}) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;