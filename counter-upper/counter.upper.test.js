const timer = require("./counter.upper")

let ticks = 0,
    tocks = 0,
    status

const testcase = new Promise((resolve, rejects) => {
    let t = timer().tick(() => ticks += 1).tock(() => tocks += 1)

    setTimeout(() => {
        t.stop(()=>{
            status = 'done'
            resolve('done')
        })
    }, 5550) 
})


test('timer runs to stop', () => {
    testcase.then(()=>{
        expect(status).toBe('done')
    })
}) 

test('count 5 ticks', () => {
    testcase.then(()=>{
        expect(ticks).toBe(5)
    })
})

test('count 5 tocks', () => {
    testcase.then(()=>{
        expect(tocks).toBe(5)
    })
}) 