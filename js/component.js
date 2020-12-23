
function composicao(f1, f2) {
    return function (value) {
        return f2(f1(value))
    }
}

function separandoText(text) {
    return `${text.split('').join(" ")} !!\n`
}


function formatanDoUpper(value) {
    return `${value.toUpperCase()}    .  .  ." `
}
const referencia = composicao(
    separandoText,
    formatanDoUpper
)

console.log(referencia("Listando Sessão A25 - CINE-JS"))
//-----------------------Iniciando Logica ------------------------


let dia = 'Domingo'.toUpperCase()
let cadeira = new Array();

if (dia === "domingo".toUpperCase()) {
    for (let i = 0; i < 6; i++) {

        if (i == 4) {
            continue
        } else {
            cadeira.push(`Cadeira  número ${i} Reservada com sucesso`)
        }
    }

    for (let i = 0; i < cadeira.length; i++) {

        if (parseInt(i) == parseInt(3)) {
            console.log("Cadeira reservada para Clientes ITAU MASTER")
        } else {
            console.log(cadeira[i].toUpperCase())
        }

    }
}




