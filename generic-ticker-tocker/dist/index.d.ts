import Ticker from './ticker';
export declare const ticker: (start?: number, stop?: number, iterations?: number, interval?: number, movement?: (n: number) => number, mod?: (n: number) => number) => Ticker;
