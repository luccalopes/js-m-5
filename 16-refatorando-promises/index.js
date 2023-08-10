async function imc(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return weight / (height * height)
}

async function showImc(weight, height) {
    try {
        console.log(`Calculando IMC para peso ${weight} e altura ${height}`)
        const result = await imc(weight, height)
        console.log(`O resultado do IMC foi de ${result}.`)
        if (result < 18.5) console.log('Situação: MAGREZA')
        else if (result < 25) console.log('Situação: NORMAL')
        else if (result < 30) console.log('Situação: SOBREPESO')
        else if (result < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    } catch(err) {
        console.log(err)
    }
}


showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, 'text')
showImc(82, 1.72)
showImc(120, 1.89)
showImc(105, 1.60)