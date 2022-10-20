# Generic Ticker Tocker
Sequencer, countdown, timer, or the embryo for Metric Time Reform. You decide. No dependencies.

## installation

```bash
$ npm i generic-ticker-tocker
```

## Usage
Function ticker returns a new Ticker with arguments:

```typescript
start?: number, /// starting position
stop?: number, /// stop (or restart) position
interval?: number, /// interval between ticks (milliseconds)
iterations?:number, /// number of iterations
movement?: (n:number) => number, /// how to transform ticks on trigger. (n) => n  + 1 to tick up by 1
mod?: (n:number) => number  /// how to modify the interval between ticks and tocks. (n) => n / 2 to tock at half-interval
```
 
```js
const { ticker } = require('generic-ticker-tocker')

// tick up to 15 seconds 8 times (total time to end 2 minutes)
ticker(0, 15, 8, 1000, (n) => n + 1, (n) => (n/2) * 1.25)
.start((i,t) => {
    console.log("ticker started ", i, t) // 'tickerstart' callback. Runs on reiteration
}).tick((i,t) => {
    console.log(i, t) // 'tick' callback. runs at 'interval'
}).tock((i,t) => {
    console.log(". ") // 'tock' callback. runs at 'interval' with an offset of 'mod(interval)'
}).end((i,t) => {
    console.debug("Timer ended at: ", i, t) // 'tickerend' callback. runs when ticker reaches 'stop' and 'iterations' ('i === iterations && t === stop')
})
```
