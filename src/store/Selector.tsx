export const getCounter = (state: any) => {
  return state.reducer ? state.reducer.counter : 0;
};
