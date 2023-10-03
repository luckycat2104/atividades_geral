function juroSimples(capitalInicial,taxa,tempo){
    var montante = capitalInicial + capitalInicial * taxa * tempo
    console.log(montante)
}
juroSimples(600, 5, 0.12)

function juroComposto (capitalInicial, taxa, tempo){
    let juros = capitalInicial*(1+taxa)**tempo
    console.log(juros)
}
juroComposto(238,5,0.3)