/// <reference types="node" />
import { GenericTickerTocker, TickerConfig } from 'generic-ticker-tocker';
export default class Ticker implements GenericTickerTocker {
    ticks: number;
    iteration: number;
    tickInterval: ReturnType<typeof setInterval>;
    tockInterval: ReturnType<typeof setInterval>;
    config: TickerConfig;
    target: EventTarget;
    constructor(config: TickerConfig);
    end: (callback: Function) => this;
    tock: (callback: Function) => this;
    tick: (callback: Function) => this;
}
