function executarAntes() {
    //console.log('Executando ANTES.')
    return this
}

function executarDepois(){
    //console.log('Executando Depois.')
    return this
}

function testeValido(status){
    if (status==true){
        return true
    }  
    return false
}

module.exports = {executarAntes, executarDepois, testeValido}