function addAPI() {
    const elemHTML = document.querySelector("main");
    elemHTML.innerHTML = "<table><tbody id='tdatos'></tbody></table>";

    for (let i = 1; i <= 6; i++) {

        const url = `https://rickandmortyapi.com/api/character/${i}`

        fetch(url)
            .then(data => data.json())
            .then(data2 => {
                console.table(data2)

                mostrarCharacter(elemHTML, data2)
            })

    }

}

function mostrarCharacter(html, data) {
    const tableBody = document.getElementById("tdatos");

    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = `<img src="${data.image}" alt="">`;
    cell2.innerHTML = data.name;
    cell3.innerHTML = data.status;


}

addAPI();