
let registroStorage = JSON.parse(localStorage.getItem("registro"));

if (!registroStorage || !registroStorage.email) {
    window.location = "./registro.html"
}

let diagnosticoTLP = 0;
let criteriosTLP = 0;
let noHayTLP = 0;

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
        Swal.fire(registroStorage.nombreUsuario + ' cumples con los criterios suficientes para el trastorno de personalidad Limite (estos valores son solo informativos)')


    }
    else if (criteriosTLP >= 5) {

        Swal.fire(registroStorage.nombreUsuario + ' cumples con algunos criterios diagnosticos para el trastorno de personalidad Limite , sin llegar a cumplir con los suficientes criterios para el diagnostico')

    }
    else {

        Swal.fire(registroStorage.nombreUsuario + 'no cumples con los criterios para TLP')


    }
}


let resultado = document.getElementById("darResultado");
resultado.addEventListener("click", darResultados);









