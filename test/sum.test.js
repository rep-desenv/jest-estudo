const sum  = require('../sum')
const {executarAntes, executarDepois, testeValido} = require('../userful')

describe('Retorna função true.', () => {
    beforeEach(()=>{
        executarAntes()
    })

    afterEach(()=>{
        executarDepois()
    })

    //acredito que aqui deveria estar separado para que 
    //possamos contar a quantidade de teste executados.
    test('Executar um teste com duas validações.',()=>{
        //console.log('teste sendo executado...')
        expect(testeValido(false)).toBe(false)
        expect(testeValido(true)).toBe(true)
    })
})