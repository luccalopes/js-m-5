function executed() {
    return new Promise((resolve, reject) => {
        console.log('a promise esta sendo executada')
        setTimeout(() => {
            if (false) {
                reject(false)
            } else {
                console.log('resolvendo a promise')
                resolve(42)
            }
        }, 1000 * 2)
    })
}
executed().then((result) => {
    console.log(`a promise foi resolvida. o resultado foi: ${result}`)
}).catch((err) => {
    console.log(`a promise foi rejeitada. motivo: ${err}`)
}).finally(() => {
    console.log('a promise foi finalizada')
})