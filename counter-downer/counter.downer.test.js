const countdown = require("./counter.downer")

const output = {
    ticks: 0,
    tocks: 0,
}
const testcase = new Promise((resolve, rejects) => {
    countdown(output, 5).tick(o => o.ticks += 1).tock(o => o.tocks += 1).end(o => {
        o.status = 'done'
        return resolve('done')
    })

})

test('counter runs to stop', () => {
    testcase.then(()=>{
        expect(output.status).toBeDefined && expect(output.status).toBe('done')
    })
}) 

test('count 5 ticks', () => {
    testcase.then(()=>{
        expect(output.ticks).toBe(5)
    })
})

test('count 5 tocks', () => {
    testcase.then(()=>{
        expect(output.tocks).toBe(5)
    })
}) 