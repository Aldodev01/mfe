import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

// Define the state type
interface CounterState {
  count: number;
}

// Initial state with explicit type
const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {

    increment: (state) => {
      state.count += 1;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

const { increment, clear } = counterSlice.actions;

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Create store with explicit typing
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Type for dispatch
export type AppDispatch = typeof store.dispatch;

// Custom hook with proper type annotations
export function useStore() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();
  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
  };
}

// Provider component with type for children
export function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}