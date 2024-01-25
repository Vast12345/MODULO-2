export async function findUser() {
    console.log("successful")
    const userDiv = document.querySelector(".user-information");
    userDiv.innerHTML = `<br><form class="user-infoForm"><label for="cedula-info">Cedula: </label><input type="number" name="cedula-info"id="cedula-info"></form><div class="div-infoBoard"></div>`

    const form = document.querySelector(".user-infoForm");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const infoBoard = document.querySelector(".div-infoBoard");
        infoBoard.innerHTML = "";

        const cedula = document.getElementById("cedula-info").value;
        console.log(cedula)
        const response = await fetch("http://localhost:4001/registros");
        const json = await response.json();
        console.log(json)

        let matchFound = false;
        json.forEach((element) => {
            console.log(element)
            if (element.usuarioId === cedula) {
                console.log(element)
                matchFound = true;
                infoBoard.classList.toggle("info-boardStyle");

                infoBoard.innerHTML = `<br><h3>USER</h3><div>REGISTRO ID: ${JSON.stringify(element.id)}</div><div>USER ID: ${JSON.stringify(element.usuarioId)}</div><div>COMENTARIOS: ${JSON.stringify(element.comentarios)}</div><br><div class="user-compras"><h3>COMPRAS</h3></div>`
                const userCompras = document.querySelector(".user-compras");
                const compras = element.compras;
                compras.forEach((compra) => {
                    const div = document.createElement("div");
                    div.innerHTML = `<div>FECHA: ${compra.fecha}</div><div>PERFUME ID: ${compra.perfumeId}</div>`
                    userCompras.appendChild(div);
                })
            }
        })
        if (!matchFound) {
            alert("Incorrect credentials, please try again.")
        }
    })
}