import { Action } from 'redux';

enum ActionNames {
  INC = 'ducksComponent/increment',
  DEC = 'ducksComponent/decrement'
}

interface IncrementAction extends Action {
  type: ActionNames.INC;
  payload: {
    plusAmount: number;
  };
}

export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  payload: {
    plusAmount: amount
  }
});

interface DecrementAction extends Action {
  type: ActionNames.DEC;
  payload: {
    minusAmount: number;
  };
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  payload: {
    minusAmount: amount
  }
});

// reducer
export interface CounterState {
  num: number;
}

export type CounterActions = IncrementAction | DecrementAction;

const initialState: CounterState = { num: 0 };

const reducer = (
  state: CounterState = initialState,
  action: CounterActions
): CounterState => {
  switch (action.type) {
    case ActionNames.INC:
      return { num: state.num + action.payload.plusAmount };
    case ActionNames.DEC:
      return { num: state.num - action.payload.minusAmount };
    default:
      return state;
  }
};

export default reducer;
