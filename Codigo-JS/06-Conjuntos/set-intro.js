//Crear el conjunto
let letras = new Set()

//Agregar elementos
letras.add("b")
letras.add("c")
letras.add("y")

console.log(letras)

//Borrar elementos
console.log(letras.delete('b'))

//si el elemento existe dentro consjunto)
console.log(letras.has('y'))
console.log(letras.has('c'))

// Recorrido con foreach
letras.forEach(l => console.log(l))

// Recorrido con for of
for (const l of letras.values()) {
    console.log(l)
}

console.log("Tamaño del conjunto: " + letras.size)