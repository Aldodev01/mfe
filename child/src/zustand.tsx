import { create } from 'zustand';

// Define the state interface
interface ZustandState {
  countZS: number;
  incrementZS: () => void;
  clearZS: () => void;
}

// Create the store with proper typing
const useZustand = create<ZustandState>((set) => ({
  countZS: 0,
  incrementZS: () => set((state) => ({ countZS: state.countZS + 1 })),
  clearZS: () => set(() => ({ countZS: 0 })),
}));

export default useZustand;