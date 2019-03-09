import {
  createStore,
  combineReducers,
  Action,
  Store,
  compose,
  applyMiddleware
} from 'redux';
import reducer, { CounterActions, CounterState } from './modules/DucksModule';
import { reducer as formReducer } from 'redux-form';

/* tslint:disable */
const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const configureStore = (): Store =>
  createStore(
    combineReducers({
      reducer,
      form: formReducer
    }),
    composeEnhancers(applyMiddleware())
  );

export default configureStore;

export interface ReduxState {
  reducer: CounterState;
}

export type ReduxAction = CounterActions | Action;
