# counter-downer
Functional countdown that accepts seconds and trigger callbacks on full seconds (ticks) and in-betweens (tocks) as well as on init and end.

## 1. Installation
```
$ npm i counter-downer
```

## 2. Usage

### 2.1. Simple countdown that logs each tick by callback
```javascript
const countdown = require('counter-downer')

let time = 3

countdown(null, time, console.log('Timer started.'))
    .tick((target, ticks) => console.log(ticks))
    .end(()=>console.log('Time\'s up!'))
```

### 2.2. Countdown with overwritten tick-callback
```javascript
const countdown = require('timer')

let time = 4

countdown(null, time, console.log('Timer started.'))
    .tick(() => console.log('oh sh*t!'))
    .tick(()=>console.log('tick'))
    .end(()=>console.log('BOOM'))
```

### 2.3. Countdown with callbacks on both ticks and tocks, modifying target object on callback
```javascript
const countdown = require("counter-downer")

let time = 10
let obj = { }

function onInit(source) {
    source.target.output = (msg) => {
        console.log(msg)
    }
    source.target.output(`Timer started for ${source.seconds} seconds`)
}

function onTick(target, ticks) {
    target.output(`tick ${ticks}`)
}
function onTock(target, ticks) {
    target.output(`tock`)
}
// 
function onEnd(target, source) {
    target.output(`Your ${source.seconds} seconds are up!`)
}

countdown(obj, time, onInit).tick(onTick).tock(onTock).end(onEnd)
```

### 2.4 Implementing promise

```javascript
const countdown = require('counter-downer')

const output = {
    ticks: 0,
    tocks: 0,
}

const promise = new Promise((resolve, rejects) => {
    countdown(output, 5).tick(o => o.ticks += 1).tock(o => o.tocks += 1).end(o => {
        o.status = 'done'
        resolve('done')
    })

})

promise.then(r => {
    console.log(r)
    console.log(output)
})
```
