
let registroStorage = JSON.parse(localStorage.getItem("registro"));

if (!registroStorage || !registroStorage.email) {
    window.location = "./registro.html"
}


const respuestas = [
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}, 
    { diagnosticoTLP : false , criteriosTLP : false, noHayTLP : false}
]





// PREGUNTA 1


let a = document.getElementById("deAcuerdo1");
a.addEventListener("click", (event) => {
    respuestas[0].diagnosticoTLP = true
    respuestas[0].criteriosTLP = false
    respuestas[0].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo1").removeAttribute("disabled");
    document.getElementById("noAcuerdo1").removeAttribute("disabled");
});


let b = document.getElementById("mediAcuerdo1");
b.addEventListener("click", (event) => {
    respuestas[0].diagnosticoTLP = false
    respuestas[0].criteriosTLP = true
    respuestas[0].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo1").removeAttribute("disabled");
    document.getElementById("noAcuerdo1").removeAttribute("disabled");
});

let c = document.getElementById("noAcuerdo1");
c.addEventListener("click", (event) => {
    respuestas[0].diagnosticoTLP = false
    respuestas[0].criteriosTLP = false
    respuestas[0].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo1").removeAttribute("disabled");
    document.getElementById("deAcuerdo1").removeAttribute("disabled");
});




// PREGUNTA 2

let d = document.getElementById("deAcuerdo2");
d.addEventListener("click", (event) => {
    respuestas[1].diagnosticoTLP = true
    respuestas[1].criteriosTLP = false
    respuestas[1].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo2").removeAttribute("disabled");
    document.getElementById("noAcuerdo2").removeAttribute("disabled");
});

let e = document.getElementById("mediAcuerdo2");
e.addEventListener("click", (event) => {
    respuestas[1].diagnosticoTLP = false
    respuestas[1].criteriosTLP = true
    respuestas[1].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo2").removeAttribute("disabled");
    document.getElementById("noAcuerdo2").removeAttribute("disabled");
});

let f = document.getElementById("noAcuerdo2");
f.addEventListener("click", (event) => {
    respuestas[1].diagnosticoTLP = false
    respuestas[1].criteriosTLP = false
    respuestas[1].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo2").removeAttribute("disabled");
    document.getElementById("deAcuerdo2").removeAttribute("disabled");
});



// PREGUNTA 3   

let g = document.getElementById("deAcuerdo3");
g.addEventListener("click", (event) => {
    respuestas[2].diagnosticoTLP = true
    respuestas[2].criteriosTLP = false
    respuestas[2].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo3").removeAttribute("disabled");
    document.getElementById("noAcuerdo3").removeAttribute("disabled");

});

let h = document.getElementById("mediAcuerdo3");
h.addEventListener("click", (event) => {
    respuestas[2].diagnosticoTLP = false
    respuestas[2].criteriosTLP = true
    respuestas[2].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo3").removeAttribute("disabled");
    document.getElementById("noAcuerdo3").removeAttribute("disabled");
});

let i = document.getElementById("noAcuerdo3");
i.addEventListener("click", (event) => {
    respuestas[2].diagnosticoTLP = false
    respuestas[2].criteriosTLP = false
    respuestas[2].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo3").removeAttribute("disabled");
    document.getElementById("deAcuerdo3").removeAttribute("disabled");
});



// PREGUNTA 4

let j = document.getElementById("deAcuerdo4");
j.addEventListener("click", (event) => {
    respuestas[3].diagnosticoTLP = true
    respuestas[3].criteriosTLP = false
    respuestas[3].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo4").removeAttribute("disabled");
    document.getElementById("noAcuerdo4").removeAttribute("disabled");

});

let k = document.getElementById("mediAcuerdo4");
k.addEventListener("click", (event) => {
    respuestas[3].diagnosticoTLP = false
    respuestas[3].criteriosTLP = true
    respuestas[3].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo4").removeAttribute("disabled");
    document.getElementById("noAcuerdo4").removeAttribute("disabled");
});

let l = document.getElementById("noAcuerdo4");
l.addEventListener("click", (event) => {
    respuestas[3].diagnosticoTLP = false
    respuestas[3].criteriosTLP = false
    respuestas[3].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo4").removeAttribute("disabled");
    document.getElementById("deAcuerdo4").removeAttribute("disabled");
});


// PREGUNTA 5

let m = document.getElementById("deAcuerdo5");
m.addEventListener("click", (event) => {
    respuestas[4].diagnosticoTLP = true
    respuestas[4].criteriosTLP = false
    respuestas[4].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo5").removeAttribute("disabled");
    document.getElementById("noAcuerdo5").removeAttribute("disabled");
});

let n = document.getElementById("mediAcuerdo5");
n.addEventListener("click", (event) => {
    respuestas[4].diagnosticoTLP = false
    respuestas[4].criteriosTLP = true
    respuestas[4].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo5").removeAttribute("disabled");
    document.getElementById("noAcuerdo5").removeAttribute("disabled");
});

let o = document.getElementById("noAcuerdo5");
o.addEventListener("click", (event) => {
    respuestas[4].diagnosticoTLP = false
    respuestas[4].criteriosTLP = false
    respuestas[4].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo5").removeAttribute("disabled");
    document.getElementById("deAcuerdo5").removeAttribute("disabled");
});



// PREGUNTA 6 

let p = document.getElementById("deAcuerdo6");
p.addEventListener("click", (event) => {
    respuestas[5].diagnosticoTLP = true
    respuestas[5].criteriosTLP = false
    respuestas[5].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo6").removeAttribute("disabled");
    document.getElementById("noAcuerdo6").removeAttribute("disabled");

});

let q = document.getElementById("mediAcuerdo6");
q.addEventListener("click", (event) => {
    respuestas[5].diagnosticoTLP = false
    respuestas[5].criteriosTLP = true
    respuestas[5].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo6").removeAttribute("disabled");
    document.getElementById("noAcuerdo6").removeAttribute("disabled");
});

let r = document.getElementById("noAcuerdo6");
r.addEventListener("click", (event) => {
    respuestas[5].diagnosticoTLP = false
    respuestas[5].criteriosTLP = false
    respuestas[5].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo6").removeAttribute("disabled");
    document.getElementById("deAcuerdo6").removeAttribute("disabled");
});




// PREGUNTA 7

let s = document.getElementById("deAcuerdo7");
s.addEventListener("click", (event) => {
    respuestas[6].diagnosticoTLP = true
    respuestas[6].criteriosTLP = false
    respuestas[6].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo7").removeAttribute("disabled");
    document.getElementById("noAcuerdo7").removeAttribute("disabled");

});

let t = document.getElementById("mediAcuerdo7");
t.addEventListener("click", (event) => {
    respuestas[6].diagnosticoTLP = false
    respuestas[6].criteriosTLP = true
    respuestas[6].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo7").removeAttribute("disabled");
    document.getElementById("noAcuerdo7").removeAttribute("disabled");
});

let u = document.getElementById("noAcuerdo7");
u.addEventListener("click", (event) => {
    respuestas[6].diagnosticoTLP = false
    respuestas[6].criteriosTLP = false
    respuestas[6].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo7").removeAttribute("disabled");
    document.getElementById("deAcuerdo7").removeAttribute("disabled");
});



// PREGUNTA 8

let v = document.getElementById("deAcuerdo8");
v.addEventListener("click", (event) => {
    respuestas[7].diagnosticoTLP = true
    respuestas[7].criteriosTLP = false
    respuestas[7].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo8").removeAttribute("disabled");
    document.getElementById("noAcuerdo8").removeAttribute("disabled");


});

let w = document.getElementById("mediAcuerdo8");
w.addEventListener("click", (event) => {
    respuestas[7].diagnosticoTLP = false
    respuestas[7].criteriosTLP = true
    respuestas[7].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo8").removeAttribute("disabled");
    document.getElementById("noAcuerdo8").removeAttribute("disabled");
});

let x = document.getElementById("noAcuerdo8");
x.addEventListener("click", (event) => {
    respuestas[7].diagnosticoTLP = false
    respuestas[7].criteriosTLP = false
    respuestas[7].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo8").removeAttribute("disabled");
    document.getElementById("deAcuerdo8").removeAttribute("disabled");
});



// PREGUNTA 9

let y = document.getElementById("deAcuerdo9");
y.addEventListener("click", (event) => {
    respuestas[8].diagnosticoTLP = true
    respuestas[8].criteriosTLP = false
    respuestas[8].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo9").removeAttribute("disabled");
    document.getElementById("noAcuerdo9").removeAttribute("disabled");
});

let z = document.getElementById("mediAcuerdo9");
z.addEventListener("click", (event) => {
    respuestas[8].diagnosticoTLP = false
    respuestas[8].criteriosTLP = true
    respuestas[8].noHayTLP = false
    event.target.setAttribute("disabled", "true");
    document.getElementById("deAcuerdo9").removeAttribute("disabled");
    document.getElementById("noAcuerdo9").removeAttribute("disabled");
});

let aa = document.getElementById("noAcuerdo9");
aa.addEventListener("click", (event) => {
    respuestas[8].diagnosticoTLP = false
    respuestas[8].criteriosTLP = false
    respuestas[8].noHayTLP = true
    event.target.setAttribute("disabled", "true");
    document.getElementById("mediAcuerdo9").removeAttribute("disabled");
    document.getElementById("deAcuerdo9").removeAttribute("disabled");
});




function darResultados() {
    if (totalDiagnosticoTLP >= 5) {
        Swal.fire(registroStorage.nombreUsuario + ' cumples con los criterios suficientes para el trastorno de personalidad Limite (estos valores son solo informativos)')


    }
    else if (totalCriteriosTLP >= 5) {

        Swal.fire(registroStorage.nombreUsuario + ' cumples con algunos criterios diagnosticos para el trastorno de personalidad Limite , sin llegar a cumplir con los suficientes criterios para el diagnostico')

    }
    else {

        Swal.fire(registroStorage.nombreUsuario + ' no cumples con los criterios para TLP')


    }


}

let totalDiagnosticoTLP = 0;
let totalCriteriosTLP = 0;
let totalNoHayTLP = 0;

let resultado = document.getElementById("darResultado");
resultado.addEventListener("click", ()=> {
    for (let index = 0; index < respuestas.length; index++) {
        const element = respuestas[index];
    
        if(element.diagnosticoTLP){
            totalDiagnosticoTLP++
        }
        else if(element.criteriosTLP){
            totalCriteriosTLP++
        }
        else{
            totalNoHayTLP++
        }

    }

    darResultados();

}) ;










