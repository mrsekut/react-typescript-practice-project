import { createStore, combineReducers, Action, Store } from 'redux';
import reducer, { CounterActions, CounterState } from './modules/DucksModule';

export const configureStore = (): Store => {
  return createStore(
    combineReducers({
      reducer
    })
  );
};
export default configureStore;

export interface ReduxState {
  reducer: CounterState;
}

export type ReduxAction = CounterActions | Action;
