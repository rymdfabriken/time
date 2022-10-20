const { ticker } = require('./dist')

let 
    ticks = 0,
    tocks = 0,
    iterations = 0

const tickertest = new Promise((resolve, reject) => {
    ticker(5, 0, 2, 100, (n) => n-1, (n) => (n / 2) * 1.33)
    .tick((i,t)=> {
        ticks += 1
    }).tock((i,t)=>{
        tocks += 1
    }).end((i,t) => {
        iterations = i
        resolve('done')
    })
})

test('Ticker starts and runs to finsih', () => {
    tickertest.then(status => {
        expect(status).toBe('done')
        expect(ticks).toBe(9)
        expect(tocks).toBe(9)
        expect(iterations).toBe(2)
    })
})

