const sum  = require('../sum')
const {executarAntes, executarDepois, testeValido} = require('../userful')

describe('Retorna função true.', () => {
    beforeEach(()=>{
        executarAntes()
    })

    afterEach(()=>{
        executarDepois()
    })

    test('Valida teste',()=>{
        console.log('teste sendo executado...')
        expect(testeValido(true)).toBe(true)
    })
})

