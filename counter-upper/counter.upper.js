module.exports = function timer(target = {}, onInit = () => {}) {
    this.target = target
    this.ticks = 0
    this.tocks = 0
    this.onInit = onInit

    const _init = () => {
        onInit(this)
    }
    const _stop = (callback) => {
        clearInterval(this.tickInterval)
        clearInterval(this.tockInterval)
        callback(this.target, this)
    }

    this.tick = (callback) => {
        this.onTick = () => {
            this.ticks += 1
            callback(this.target, this.ticks)
        }
        setTimeout(()=> {
            this.tickInterval = setInterval(this.onTick, 1000)
            this.onTick(this.target, this.ticks)
        }, 1000)
        return this
    }

    this.tock = (callback) => {
        this.onTock = () => {
            this.tocks += 1
            callback(this.target, this.tocks)
        }
        setTimeout(()=> {
            this.tockInterval = setInterval(this.onTock, 1000)
            this.onTock(this.target, this.tocks)
        }, 1500)
        return this
    }

    this.stop = (callback) => {
        _stop(callback)
    }
    _init()

    return this
}