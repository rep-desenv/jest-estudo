const sum = require('../sum')
const {executarAntes, executarDepois, testeValido} = require('../userful')

//INICIO - Executado uma única após iniciado o teste.
beforeAll(()=>{
    executarAntes()
})

afterAll(()=>{
    executarDepois()
})
//FIM

test('Somar 1 + 2 igual a 3',()=>{
    //console.log('Dentro do PRIMEIRO teste.')
    expect(sum(1,2)).toBe(3)
})

test('Validar soma mior que 5',()=>{
    //console.log('Dentro do SEGUNDO teste.')
    expect(sum(2,3)).toBeGreaterThan(0)
})
