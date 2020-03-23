export const isBrowser = () => typeof window !== 'undefined';

export function createReducer(initialState, reducerMap) {
  return (state, action) => {
    if (!state) state = initialState;

    const reducer = reducerMap[action.type];

    return reducer ? reducer({ ...state }, action) : state;
  };
}

export function createRequestReducer(state, action, reducerMap) {
  const reducer = reducerMap[action.status];
  return reducer ? reducer(state, action) : state;
}
