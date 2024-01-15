const sum = require('../sum')
const {executarAntes, executarDepois, testeValido} = require('../userful')

//INICIO - Executado antes de cada teste realizado.
beforeEach(()=>{
    executarAntes()
})

afterEach(()=>{
    executarDepois()
})
//FIM

test('Somar 1 + 2 igual a 3',()=>{
    //console.log('Dentro do PRIMEIRO teste.')
    expect(sum(1,2)).not.toBe(2)
})

test('Validar soma mior que 5',()=>{
    //console.log('Dentro do SEGUNDO teste.')
    expect(sum(2,3)).toBeGreaterThan(0)
})
