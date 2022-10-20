module.exports = function countdown(target = {}, seconds=5, onInit=()=>{}) {
    this.seconds = seconds 
    this.ticks = seconds
    this.target = target
    this.onInit = onInit
    this.onEnd = () => {
        this._end(this.target, this.seconds)
    }

    const _init = () => {
        this.timeout = setTimeout(this.onEnd, seconds * 1000)
        this.onInit(this)
    }

    this.tick = (callback) => {
        let overwrite = this.onTick ? true : false
        this.onTick = () => {
            this.ticks -= 1
            if(this.ticks >= 0) {
               return callback(this.target, this.ticks)
            } 
            clearInterval(this.tickInterval)
            clearInterval(this.tockInterval)
        }
        if (overwrite) {
            clearInterval(this.tickInterval)
            this.tickInterval = setInterval(this.onTick, 1000)
        } else {
            this.tickInterval = setInterval(this.onTick, 1000)
            this.onTick()
        } 
        

        return this
    }

    this.tock = (callback) => {
        let overwrite = this.onTock ? true : false
        this.onTock = () => {
            if(this.ticks >= 0) {
               return callback(this.target, this.ticks)
            } 
        }
        if(overwrite) {
            clearInterval(this.tockInterval)
            clearTimeout(this.tockDelay)
            this.tockDelay = setTimeout(()=> {
                this.tockInterval = setInterval(this.onTock, 1000)
                this.onTock(this.target, this.ticks)
            }, 500)
        }
        this.tockDelay = setTimeout(()=> {
            this.tockInterval = setInterval(this.onTock, 1000)
            this.onTock(this.target, this.ticks)
        }, 500)
        
        return this
    }

    this.end = (callback) => {
        this._end = () => {
            callback(this.target, this)
        }
        
    }
    
    _init(this)
    return this
}