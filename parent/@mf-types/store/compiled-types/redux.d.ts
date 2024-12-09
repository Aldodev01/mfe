import { ReactNode } from "react";
interface CounterState {
    countRX: number;
}
export declare const counterSlice: import("@reduxjs/toolkit").Slice<CounterState, {
    incrementRX: (state: import("immer").WritableDraft<CounterState>) => void;
    clearRX: (state: import("immer").WritableDraft<CounterState>) => void;
}, "counterRX", "counterRX", import("@reduxjs/toolkit").SliceSelectors<CounterState>>;
export declare const incrementRX: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counterRX/incrementRX">, clearRX: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counterRX/clearRX">;
export type RootState = ReturnType<typeof store.getState>;
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    counterRX: CounterState;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        counterRX: CounterState;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export declare function useStore(): {
    countRX: number;
    incrementRX: () => {
        payload: undefined;
        type: "counterRX/incrementRX";
    };
    clearRX: () => {
        payload: undefined;
        type: "counterRX/clearRX";
    };
};
export declare function StoreProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export {};
