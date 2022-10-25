# counter-upper
Pretty functional timer function. 

## 1. Installation
```
$ npm i counter-upper
```

## 2. Usage

### 2.1. Start and stop, log ticks and tocks to console
```javascript
const timer = require ('counter-upper')

const target = {
    output: (msg) => {
        console.log(msg)
    }
}

let t = timer(target, () => console.log("It begins")).tick((target, ticks) => console.log(`tick ${ticks}`)).tock((target, tocks) => console.log("tock"))

setTimeout(() => {t.stop(()=>console.log("Enough!"))}, 5550)
``` 

### 2.2. Implementing promise
```javascript
const timer = require("counter-upper")

let ticks = 0,
    tocks = 0

const promise = new Promise((resolve, rejects) => {
    let t = timer().tick(() => ticks += 1).tock(() => tocks += 1)

    setTimeout(() => {
        t.stop(()=>{
            resolve('done')
        })
        
    }, 5550)
})

promise.then((status) =>
console.log(ticks, tocks, status))
```