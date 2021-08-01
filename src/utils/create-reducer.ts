const createReducer = (initialState: any, reducerMap: any) => {
  return (state = initialState, action: any) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action.payload) : state;
  };
};

export default createReducer;
