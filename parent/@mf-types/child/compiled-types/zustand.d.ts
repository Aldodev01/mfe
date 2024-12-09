interface ZustandState {
    countZS: number;
    incrementZS: () => void;
    clearZS: () => void;
}
declare const useZustand: import("zustand").UseBoundStore<import("zustand").StoreApi<ZustandState>>;
export default useZustand;
