import {findUser} from "../js/funcionador.js";
import { showProducts } from "../js/listProducts.js";

const subForm = document.querySelector(".log-form");
const productsList = document.querySelector(".products-list");
subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const main = document.querySelector("main");
    main.innerHTML = "<div class='user-information'></div><div class='products-list'></div>"
    const cedula = document.getElementById("cedula").value;
    const password = document.getElementById("passwrd").value;
    console.log(cedula, password)
    getUser();

    async function getUser() {
        const response = await fetch("http://localhost:4001/usuarios");
        const json = await response.json();
        console.log(json)
        json.forEach((element) => {
            if (cedula === element.id & password === element.pass) {
                alert("Signed in")
                console.log(element)
                if (element.tipoId === "2") {
                    findUser()
                } else if (element.tipoId === "3") {
                    localStorage.setItem("myAcc", element.id)
                    showProducts()
                }
            }
        })
    };

})