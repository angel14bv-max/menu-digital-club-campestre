const buscador = document.querySelector(".buscador input");
const platillos = document.querySelectorAll(".platillo");

let tiempoEspera;

buscador.addEventListener("input", () => {

    clearTimeout(tiempoEspera);

    tiempoEspera = setTimeout(() => {

        let texto = buscador.value.toLowerCase();

        platillos.forEach(platillo => {

            let nombre = platillo.innerText.toLowerCase();

            if (nombre.includes(texto)) {

                platillo.style.display = "flex";

                if (texto.length > 2) {
                    platillo.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                }

            } else {
                platillo.style.display = "none";
            }

        });

        if (texto === "") {
            platillos.forEach(platillo => {
                platillo.style.display = "flex";
            });
        }

    }, 1000);

});
let posicionAnterior = window.scrollY;

window.addEventListener("scroll", () => {

    let posicionActual = window.scrollY;
    let categorias = document.querySelector(".categorias");

    if(posicionActual > posicionAnterior){
        categorias.style.transform = "translateY(-120%)";
    }else{
        categorias.style.transform = "translateY(0)";
    }

    posicionAnterior = posicionActual;

});
const categorias = document.querySelectorAll(".categoria");

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        categorias.forEach(c => c.classList.remove("activa"));

        categoria.classList.add("activa");

    });

});