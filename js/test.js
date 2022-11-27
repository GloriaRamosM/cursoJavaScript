
let registroStorage = JSON.parse(localStorage.getItem("registro"));

if (!registroStorage || !registroStorage.email) {
    window.location = "/paginas/registro.html"
}



let diagnosticoTLP = 0;
let criteriosTLP = 0;
let noHayTLP = 0;

/* Esta funcion es la pregunta para recolectar los datos, el descarte de criterios, 
opciones de respuesta del usuario son A,B o C y tambien cuenta las respuestas*/

/*

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
/*
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
*/
/* Aca estoy usando las funciones en cada momento que las necesito,
 tiene un orden, primero pregunta y recolecta los datos, y luego interpreta*/

/*
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
*/

// PREGUNTA 1

let a = document.getElementById("deAcuerdo1");
a.addEventListener("click", () => {
    diagnosticoTLP++
    return;
});


let b = document.getElementById("mediAcuerdo1");
b.addEventListener("click", () => {
    criteriosTLP++
    return
});

let c = document.getElementById("noAcuerdo1");
c.addEventListener("click", () => {
    noHayTLP++
    return
});




// PREGUNTA 2

let d = document.getElementById("deAcuerdo2");
d.addEventListener("click", () => {
    diagnosticoTLP++
    return
});

let e = document.getElementById("mediAcuerdo2");
e.addEventListener("click", () => {
    criteriosTLP++
    return
});

let f = document.getElementById("noAcuerdo2");
f.addEventListener("click", () => {
    noHayTLP++
    return
});

// PREGUNTA 3   

let g = document.getElementById("deAcuerdo3");
g.addEventListener("click", () => {
    diagnosticoTLP++
    return

});

let h = document.getElementById("mediAcuerdo3");
h.addEventListener("click", () => {
    criteriosTLP++
    return
});

let i = document.getElementById("noAcuerdo3");
i.addEventListener("click", () => {
    noHayTLP++
    return
});

// PREGUNTA 4

let j = document.getElementById("deAcuerdo4");
j.addEventListener("click", () => {
    diagnosticoTLP++
    return

});

let k = document.getElementById("mediAcuerdo4");
k.addEventListener("click", () => {
    criteriosTLP++
    return
});

let l = document.getElementById("noAcuerdo4");
l.addEventListener("click", () => {
    noHayTLP++
    return
});


// PREGUNTA 5

let m = document.getElementById("deAcuerdo5");
m.addEventListener("click", () => {
    diagnosticoTLP++
    return
});

let n = document.getElementById("mediAcuerdo5");
n.addEventListener("click", () => {
    criteriosTLP++
    return
});

let o = document.getElementById("noAcuerdo5");
o.addEventListener("click", () => {
    noHayTLP++
    return
});

// PREGUNTA 6 

let p = document.getElementById("deAcuerdo6");
p.addEventListener("click", () => {
    diagnosticoTLP++
    return

});

let q = document.getElementById("mediAcuerdo6");
q.addEventListener("click", () => {
    criteriosTLP++
    return
});

let r = document.getElementById("noAcuerdo6");
r.addEventListener("click", () => {
    noHayTLP++
    return
});

// PREGUNTA 7

let s = document.getElementById("deAcuerdo7");
s.addEventListener("click", () => {
    diagnosticoTLP++
    return

});

let t = document.getElementById("mediAcuerdo7");
t.addEventListener("click", () => {
    criteriosTLP++
    return
});

let u = document.getElementById("noAcuerdo7");
u.addEventListener("click", () => {
    noHayTLP++
    return
});

// PREGUNTA 8

let v = document.getElementById("deAcuerdo8");
v.addEventListener("click", () => {
    diagnosticoTLP++
    return

});

let w = document.getElementById("mediAcuerdo8");
w.addEventListener("click", () => {
    criteriosTLP++
    return
});

let x = document.getElementById("noAcuerdo8");
x.addEventListener("click", () => {
    noHayTLP++
    return
});

// PREGUNTA 9

let y = document.getElementById("deAcuerdo9");
y.addEventListener("click", () => {
    diagnosticoTLP++
    return
});

let z = document.getElementById("mediAcuerdo9");
z.addEventListener("click", () => {
    criteriosTLP++
    return
});

let aa = document.getElementById("noAcuerdo9");
aa.addEventListener("click", () => {
    noHayTLP++
    return
});


function darResultados() {
    if (diagnosticoTLP >= 5) {
        Swal.fire('Cumples con los criterios suficientes para el trastorno de personalidad Limite (estos valores son solo informativos)')


    }
    else if (criteriosTLP >= 5) {

        Swal.fire('Cumples con algunos criterios diagnosticos para el trastorno de personalidad Limite , sin llegar a cumplir con los suficientes criterios para el diagnostico')

    }
    else {

        Swal.fire('No cumples con los criterios para TLP')


    }
}


let resultado = document.getElementById("darResultado");
resultado.addEventListener("click", darResultados);









