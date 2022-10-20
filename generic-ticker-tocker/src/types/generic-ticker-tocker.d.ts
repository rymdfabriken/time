declare module 'generic-ticker-tocker' {
    export type TickerConfig = {
        start?: number,
        stop?: number,
        interval?: number,
        iterations?:number,
        movement?: (n:number) => number,
        mod?: (n:number) => number  
    }
    export interface GenericTickerTocker {
        tick(callback:Function): this;
        tock(callback:Function): this;
        end(callback:Function): this;
        ticks: number;
        iteration?:number;
        config: TickerConfig;
        target: EventTarget;
    }
    
    export function ticker(
        start?: number, /// starting position
        stop?: number, /// stop (or restart) position
        interval?: number, /// interval between ticks (milliseconds)
        iterations?:number, /// number of iterations
        movement?: (n:number) => number, /// how to transform ticks on trigger. (n) => n  + 1 to tick up by 1
        mod?: (n:number) => number  /// how to modify the interval between ticks and tocks. (n) => n / 2 to tock at half-interval
    ):GenericTickerTocker
}
