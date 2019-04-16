import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';
import createCompressor from 'redux-persist-transform-compress';

const compressor = createCompressor();

const config = {
  timeout: null,
  debug: true,
  whitelist: ['user'],
  blacklist: ['form'],
  key: 'app',
  storage,
  transforms: [compressor],
};

const reducer = persistReducer(config, reducers);

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);

const persistor = persistStore(store);

export { persistor, store };
