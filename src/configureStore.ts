import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { default as rootReducer } from './rootReducer';
import thunk from 'redux-thunk';

import rootSaga from './rootSaga';
import { GlobalState } from './common/index';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const configureStore = (preloadedState: {}) => {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

    const sagaMiddleware = createSagaMiddleware();

    const enhancer = composeEnhancers(
        applyMiddleware(thunk, sagaMiddleware),
    );

    const savedStore = localStorage.getItem('store') && JSON.parse(localStorage.getItem('store') || '');

    if (savedStore) {
        preloadedState = savedStore;
    }

    const store = createStore(
        rootReducer,
        preloadedState,
        enhancer
    );
    sagaMiddleware.run(rootSaga);

    store.subscribe(() =>  {
        localStorage.setItem('store', JSON.stringify(store.getState()));
    });

    return store as Store<GlobalState>;
};

export default configureStore;