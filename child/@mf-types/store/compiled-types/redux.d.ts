import { ReactNode } from "react";
interface CounterState {
    count: number;
}
export declare const counterSlice: import("@reduxjs/toolkit").Slice<CounterState, {
    increment: (state: import("immer").WritableDraft<CounterState>) => void;
    clear: (state: import("immer").WritableDraft<CounterState>) => void;
}, "counter", "counter", import("@reduxjs/toolkit").SliceSelectors<CounterState>>;
export type RootState = ReturnType<typeof store.getState>;
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counter: CounterState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counter: CounterState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export declare function useStore(): {
    count: number;
    increment: () => {
        payload: undefined;
        type: "counter/increment";
    };
    clear: () => {
        payload: undefined;
        type: "counter/clear";
    };
};
export declare function StoreProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
