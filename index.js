let diagnosticoTLP = 0;
let criteriosTLP = 0;
let noHayTLP = 0;





function preguntar(textoPregunta) {
    let respuesta = prompt(textoPregunta)
    while (respuesta != "ESC") {
        switch (respuesta) {
            case "A":
                diagnosticoTLP++;
                break;
            case "B":
                criteriosTLP++;
                break;
            case "C":
                noHayTLP++;
                break;
            default:
                alert(" Respuesta incorrecta, elegir A, B o C ");
                respuesta = prompt(textoPregunta);
                break
        }

        break
    }
}

preguntar(" 1. Realizas muchos esfuerzos para evitar el abandono o sentirte desamparado?")

preguntar(" 2.Sientes que tus relaciones son inestables y/o intensas la mayoria de las veces?")

preguntar("3. Te cuesta aceptarte a ti misma/o y valorar tu autoimagen?")

preguntar(" 4.En ocasiones puedes llegar a ser impulsiva/o y esas acciones pueden llegar a danarte? ej: gastar en exceso,consumir drogas")

preguntar(" 5.Algunas vez intentaste o pensaste en suicidarte?")

preguntar(" 6.Sueles sentirte inestable emocionalmente, y cambiar de un estado a otro en cortos lapsos de tiempo?")

preguntar(" 7.Te sientes vacia/o la mayor parte del tiempo?")

preguntar("8.Sueles enojarte facilmente, llegando a estados de ira y/o peleas que te cuestan controlar?")

preguntar("9. Tienes ideas paranoides ocasionalmente, sobre todo si te sientes estresada/o?")

console.log( diagnosticoTLP, criteriosTLP,noHayTLP)



function darResultados (){
    

}




/*


let pregunta2 = prompt(" Tus relaciones son inestables y/o por lo general intensas?")
while (pregunta2 != "ESC") {
    switch .(pregunta2) {
        case "A":
            break;
        case "B":
            break;
        case "C":
            break;
        default:

    }

    break

}

let pregunta3 = prompt(" Dificultad para aceptarte a ti misma/o y tu imagen corporal")
while (pregunta3 != "ESC") {
    switch (pregunta3) {
        case "A":
            break;
        case "B":
            break;
        case "C":
            break;
        default:

    }

    break

}
*/


