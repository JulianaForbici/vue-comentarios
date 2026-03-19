//criação de promessa

const myPromise = new Promise((resolve, reject) => {
const nome = 'juliana'

if(nome === 'juliana'){
    resolve('Usuário encontrado')
} else {
    reject('Usuário não encontrado')
}
})

myPromise.then((data) => {
    console.log(data)
})

// encadeamento de thens

const myPromise2 = new Promise((resolve, reject) => {
const nome = 'juliana'

if(nome === 'juliana'){
    resolve('Usuário encontrado')
} else {
    reject('Usuário não encontrado')
}
})

myPromise2.then((data) => {
    return data.toLowerCase()
}).then((stringModificada) => {
    console.log(stringModificada)
})

// retorno do catch

const myPromise3 = new Promise((resolve, reject) => {
const nome = 'juliano'

if(nome === 'juliana'){
    resolve('Usuário encontrado')
} else {
    reject('Usuário não encontrado')
}
})

myPromise3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// resolver varias promessas com all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P1 OK!')
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 OK!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 OK!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

console.log('Depois do all()')

// várias promessas com race

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 OK! Timeout')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 OK!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 OK!')
})

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'juliana-forbici'

fetch(`https://api.github.com/users/${userName}`{
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },

}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(`O nome do usuário é: ${data.name}`)
}).catch((err) => {
    console.log(`Houve um erro: ${err} `)
})