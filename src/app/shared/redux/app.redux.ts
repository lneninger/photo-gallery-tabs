export class AppState{
  constructor(){
    this.adapter = {
      set: (state: State, payload: State) => payload,
      reset: (state: State, payload: any, initialState: State) => initialState,
      selectors: {
        state: (state: State) => state,
      },
    } satisfies Adapter<State, any, any>;
  }
}
