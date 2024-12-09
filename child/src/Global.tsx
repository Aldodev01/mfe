import React, { 
    createContext, 
    useContext, 
    useState, 
    ReactNode 
  } from 'react';
  
  // Definisi tipe untuk context value
  interface CountContextType {
    countGS: number;
    incrementGS: () => void;
    clearGS: () => void;
  }
  
  // Buat context dengan default value
  const CountContext = createContext<CountContextType | undefined>(undefined);
  
  // Provider component dengan TypeScript
  export const CountProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [countGS, setCountGS] = useState<number>(0);
  
    const incrementGS = () => {
      setCountGS(prevCount => prevCount + 1);
    };
  
    const clearGS = () => {
      setCountGS(0);
    };
  
    // Value yang akan disediakan ke context
    const contextValue: CountContextType = {
      countGS,
      incrementGS,
      clearGS
    };
  
    return (
      <CountContext.Provider value={contextValue}>
        {children}
      </CountContext.Provider>
    );
  };
  
  // Custom hook untuk menggunakan context
  export const useCountGS = () => {
    // Throw error jika hook digunakan di luar provider
    const context = useContext(CountContext);
    
    if (context === undefined) {
      throw new Error('useCount must be used within a CountProvider');
    }
    
    return context;
  };