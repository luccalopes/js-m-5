//pending
//resolved
//rejected
/*const p = new Promise((resolve, reject) => {
    console.log('A promise esta sendo executada')
    setTimeout(() => {
        if (true) {
            reject(false)
        }
        console.log('resolvendo a promise')
        resolve(true)
    }, 1000 * 2)
})
console.log(p)

setTimeout(() => {
    console.log(p)
}, 1000 * 3)*/

function executed() {
    return new Promise((resolve, reject) => {
        console.log('a promise esta sendo executada')
        setTimeout(() => {
            console.log('resolvendo a promise')
            resolve('resultado')
        })
    })
}
const p = executed()
console.log(p)
setTimeout(() => {
    console.log(p)
}, 2000)