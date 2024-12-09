import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

// Define the state type
interface CounterState {
  countRX: number;
}

// Initial state with explicit type
const initialState: CounterState = {
  countRX: 0,
};

export const counterSlice = createSlice({
  name: "counterRX",
  initialState,
  reducers: {

    incrementRX: (state) => {
      state.countRX += 1;
    },
    clearRX: (state) => {
      state.countRX = 0;
    },
  },
});

export const { incrementRX, clearRX } = counterSlice?.actions;

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Create store with explicit typing
export const store = configureStore({
  reducer: {
    counterRX: counterSlice?.reducer,
  },
});

// Type for dispatch
export type AppDispatch = typeof store.dispatch;

// Custom hook with proper type annotations
export function useStore() {
  const countRX = useSelector((state: RootState) => state.counterRX.countRX);
  const dispatch = useDispatch<AppDispatch>();
  return {
    countRX,
    incrementRX: () => dispatch(incrementRX()),
    clearRX: () => dispatch(clearRX()),
  };
}

// Provider component with type for children
export function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}