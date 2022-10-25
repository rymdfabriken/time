this.stop = (callback) => {
    clearTimeout(this.timeout)
    return callback(this.target, this.ticks)
}

this.start = (seconds, callback = () => {}) => {
    clearTimeout(this.timeout)
    this.seconds = seconds || this.seconds
    this.timeout = setTimeout(this.onEnd)
    callback(this.target, this.seconds)
    return this
}

new EventTarget(target)