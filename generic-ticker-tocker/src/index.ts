import Ticker from './ticker';

export const ticker = (
    start:number = 0, 
    stop:number = 0, 
    iterations:number = 1, 
    interval:number = 1000,
    movement = (n:number) => n + 1, 
    mod = (n:number) => n / 2
) => {

return new Ticker({
    start: start,
    stop: stop,
    interval: interval,
    iterations: iterations,
    movement: movement,
    mod: mod
})
}