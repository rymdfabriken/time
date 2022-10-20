import { GenericTickerTocker, TickerConfig } from 'generic-ticker-tocker'

export default class Ticker implements GenericTickerTocker {
    ticks: number
    iteration:number
    tickInterval: ReturnType<typeof setInterval>
    tockInterval: ReturnType<typeof setInterval>
    config: TickerConfig
    target: EventTarget

    constructor (config:TickerConfig) {
        this.config = config
        this.ticks = this.config.start
        this.iteration = 1
        _init(this)
        return this
    }
    
    start = (callback:Function) => {
        this.target.addEventListener('tickerstart', () => {
            callback(this.iteration, this.ticks)
        })
        return this
    }

    end = (callback:Function) => {
        this.target.addEventListener('tickerend', () => {
            callback(this.iteration, this.ticks)
        })
        return this
    }

    tock = (callback:Function) => {
        this.target.addEventListener('tock', () => {
            callback(this.iteration, this.ticks)
        })
        return this
    }

    tick = (callback:Function) => {
        this.target.addEventListener('tick', () => {
            callback(this.iteration, this.ticks)
        })
        return this
    }
}


function _tick (_t:Ticker):void {
    _t.ticks = _t.config.movement(_t.ticks)
    if(_t.ticks === _t.config.stop) {
        if(_t.iteration  === _t.config.iterations) {
            _end(_t)
        } else {
            _t.target.dispatchEvent(new Event('tickerstart'))
            _t.target.dispatchEvent(new Event('tick'))
            _t.iteration += 1
            _t.ticks = _t.config.start
        }
    } else {
        _t.target.dispatchEvent(new Event('tick'))
    }
}

function _tock (_t:Ticker):void {
    let e = new Event('tock')
    _t.target.dispatchEvent(e)
}    

function _end (_t:Ticker):void {
    _t.target.dispatchEvent(new Event('tickerend'))
    clearInterval(_t.tickInterval)
    clearInterval(_t.tockInterval)
}

function _init (_t:Ticker):void {
    _t.target = new EventTarget()
    _t.target.dispatchEvent(new Event('tickerstart'))
    _t.tickInterval = setInterval(_tick, _t.config.interval, _t)
    
    setTimeout(()=>{
        _t.tockInterval = setInterval(_tock, _t.config.interval, _t)
    },_t.config.mod(_t.config.interval))        
}


