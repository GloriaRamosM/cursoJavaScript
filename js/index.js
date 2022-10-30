let diagnosticoTLP = 0;
let criteriosTLP = 0;
let noHayTLP = 0;

/* Esta funcion es la pregunta para recolectar los datos, el descarte de criterios, 
opciones de respuesta del usuario son A,B o C y tambien cuenta las respuestas*/

function preguntar(textoPregunta) {
    let respuesta = prompt(textoPregunta).toUpperCase()
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

/* Esta funcion es  la que interpreta, segun la cantidad de respuestas y le muestra al usuario el resultado final */

function darResultados() {
    if (diagnosticoTLP >= 5) {
        alert("Cumples con los suficientes criterios diagnosticos para el trastorno de personalidad Limite, (estos valores son solo informativos)")
    }
    else if (criteriosTLP >= 5) {
        alert("Cumples con algunos criterios diagnosticos para el trastorno de personalidad Limite , sin llegar a cumplir con los suficientes criterios para el diagnostico")
    }
    else {
        alert("No cumples con los criterios de TLP")
    }
}

/* Aca estoy usando las funciones en cada momento que las necesito,
 tiene un orden, primero pregunta y recolecta los datos, y luego interpreta*/

preguntar("1.Realizas muchos esfuerzos para evitar el abandono o sentirte desamparado?")

preguntar("2.Sientes que tus relaciones son inestables y/o intensas la mayoria de las veces?")

preguntar("3.Te cuesta aceptarte a ti misma/o y valorar tu autoimagen?")

preguntar("4.En ocasiones puedes llegar a ser impulsiva/o y esas acciones pueden llegar a danarte? ej: gastar en exceso,consumir drogas")

preguntar("5.Algunas vez intentaste o pensaste en suicidarte?")

preguntar("6.Sueles sentirte inestable emocionalmente, y cambiar de un estado a otro en cortos lapsos de tiempo?")

preguntar("7.Te sientes vacia/o la mayor parte del tiempo?")

preguntar("8.Sueles enojarte facilmente, llegando a estados de ira y/o peleas que te cuestan controlar?")

preguntar("9.Tienes ideas paranoides ocasionalmente, sobre todo si te sientes estresada/o?")

darResultados()
