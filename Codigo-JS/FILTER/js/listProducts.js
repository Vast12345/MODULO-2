export async function showProducts(cedu) {
    const productList = document.querySelector(".products-list");

    const response = await fetch("http://localhost:4001/perfumes");
    const json = await response.json();

    for(let i = 0; i<json.length; i++) {
        const div = document.createElement("div")
        div.innerHTML = `<div class="Product ${i+1}"><div>${json[i].id}</div><div>${json[i].name}</div><div>${json[i].marca}</div><button class="addButton ${i+1}">Add to register</button></div>`;
        productList.appendChild(div);
    }

    const buttons = document.querySelectorAll(".addButton");
    buttons.forEach((button) => {
        const array = Array.from(button.classList);
        const product = array[1];
        button.addEventListener("mousedown", () => {
            addToRegister(product, cedu);
        })
    })
}

async function addToRegister(prod, ced) {
    const responseGet = await fetch("http://localhost:4001/registros");
    const jsonGet = await responseGet.json();
    let userMatch = false;

    jsonGet.forEach((element) => {
        if(element.usuarioId === ced) {
            userMatch = true;
            const now = new Date();
            const id = element.id
            const object = new Object();
            object.fecha = `date; ${now.getTime()}`;
            object.perfumeId = prod
            const compras = element.compras;
            compras.push(object)

            fetch(`http://localhost:4001/registros/${id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    "compras": compras,
                    "comentarios": compras.length
                })
            })
                .then((response) => response.json())
                .then((json) => console.log(json))
                .catch((error) => console.log("ERROR!!!: "+error))
                .finally(console.log("Task finished"))
        }
    })
    if(!userMatch) {
        userMatch = true;
        const now = new Date();
        const object = new Object();
        object.fecha = `date; ${now.getTime()}`;
        object.perfumeId = prod
        const compras = new Array();
        compras.push(object)

        fetch(`http://localhost:4001/registros`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 1000) + 1,
                usuarioId: ced,
                compras: compras
            })
        })
    }
}