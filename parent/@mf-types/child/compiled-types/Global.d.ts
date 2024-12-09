import React, { ReactNode } from 'react';
interface CountContextType {
    countGS: number;
    incrementGS: () => void;
    clearGS: () => void;
}
export declare const CountProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useCountGS: () => CountContextType;
export {};
