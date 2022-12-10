var categorias;
var catalogo;
// Añade 2 categorías más de temas que  quieras
var strCategorias = `[
    {
        "nombre":"jamones"},
    {
        "nombre":"peliculas"},
    {
        "nombre":"videojuegos"}
    ]` ;
// Añade 3 imágenes a cada categorías para tenerlas ya desde el comienzo
var strCatalogo = `[
    {
        "id":1,
        "src":"https://cdn.metro-group.com/es/es_pim_74739001001_01.png?w=400&h=400&mode=pad",
        "titulo":"Sanches Alcaraz ETG Jamón serrano reserva",
        "categoria":"Jamones"},
    {
        "id":2,
        "src":"https://cdn.metro-group.com/es/es_pim_23262001001_01.png?w=400&h=400&mode=pad",
        "titulo":"La era Jamón serrano reserva ETG 7,2/7,5kg",
        "categoria":"Jamones"},
    {
        "id":3,
        "src":"https://www.ibergour.com/images/paletilla_5j_cinco_jotas_1_ficha.webp",
        "titulo":"JAMON 5J CINCO JOTAS HAM",
        "categoria":"Jamones"},
    {
        "id":4,
        "src":"https://th.bing.com/th/id/OIP.YYU636Gz4-cn1la9RKi0qAHaLG?pid=ImgDet&rs=1",
        "titulo":"The Godfather",
        "categoria":"Peliculas"},
    {
        "id":5,
        "src":"https://3.bp.blogspot.com/-MolC9ANyXUo/WCijRIkeqhI/AAAAAAAATss/bJeCjX6PXE0C8HtU0wtRA-2_HlGwBNHvwCLcB/s1600/12-hombres-sin-piedad_62439.jpg",
        "titulo":"Doce hombres sin piedad",
        "categoria":"Peliculas"},
    {
        "id":6,
        "src":"https://th.bing.com/th/id/OIP.NY-gX_p7PIX5T5e1LmwXEgHaK4?pid=ImgDet&rs=1",
        "titulo":"La lista de Schindler",
        "categoria":"Peliculas"},
    {
        "id":7,
        "src":"https://th.bing.com/th/id/R.7afd44613fc38bc887f0a5304660263f?rik=%2bN5Q6Xd2PMjxLg&pid=ImgRaw&r=0",
        "titulo":"Persona 5 Royal",
        "categoria":"Videojuegos"},
    {
        "id":8,
        "src":"https://th.bing.com/th/id/OIP.yKLKWRfZgfKM1lQhzf-XNAHaEw?w=251&h=180&c=7&r=0&o=5&pid=1.7",
        "titulo":"Red Dead Redemption 2",
        "categoria":"Videojuegos"},
    {
        "id":9,
        "src":"https://th.bing.com/th/id/OIP.ItpWfriwW4fkSjeNqUjVPwHaEK?pid=ImgDet&rs=1",
        "titulo":"Elden Ring",
        "categoria":"Videojuegos"}
    ]`;
//Función IIFE
(function () {
    const DOM = {
        allhtml: document.getElementsByTagName("html"),
        cuarto: document.querySelector(".cuarto")
    }
    DOM.allhtml[0].addEventListener('click', LeerEvent);
    // Obtenemos las categorias del localStorage ... y si no hay las cargamos del string JSON
    categorias = JSON.parse(localStorage.getItem("categorias"));
    if (!categorias) {
        categorias = JSON.parse(strCategorias);
    }
    // Obtenemos el catálogo del localStorage ... y si no hay lo cargamos del string JSON
    catalogo = JSON.parse(localStorage.getItem("catalogo"));
    if (!catalogo) {
        catalogo = JSON.parse(strCatalogo);
    }
    crearlista();
    let chosencate;
})();

function crearlista() {
    //Crear e insertar div de la lista de imagenes
    mainlist = document.createElement('div');
    mainlist.className = "lista-imagenes"
    var button = document.getElementById("cabecera");
    button.insertAdjacentElement("afterend", mainlist);
}
function mostrarCatalogo(catalogo) {
    //Crear e insertar div de la lista de imagenes
    let milista = document.getElementsByClassName("lista-imagenes");
    milista[0].innerHTML = "";
    //Crear e insertar img de las imagenes
    catalogo.forEach(aphone => {
        //Crear e insertar div de imagen
        let card = document.createElement('div');
        card.className = "card";
        milista[0].insertAdjacentElement("afterbegin", card);
        //Crear e insertar img de las imagenes
        let imgdiv = document.createElement('div');
        imgdiv.className = "divimg";
        card.insertAdjacentElement("afterbegin", imgdiv)
        //Insertar el cuadro de texto
        let textdiv = document.createElement('div');
        textdiv.className = "text";
        textdiv.textContent += aphone.titulo;
        card.insertAdjacentElement("beforeend", textdiv)
        let a = document.createElement('img');
        a.setAttribute("src", aphone.src);
        a.setAttribute("id", aphone.id);
        imgdiv.insertAdjacentElement("afterbegin", a);
    })
}
//Seleccionar la categoría con la que trabajar
function SelectCategoria(categoria) {
    switch (categoria) {
        case "Jamones": {
            let filtrado = catalogo.filter((item) => { return (item.categoria == "Jamones") });
            chosencate = categoria;
            mostrarCatalogo(filtrado);
            break;
        }
        case "Peliculas": {
            let filtrado = catalogo.filter((item) => { return (item.categoria == "Peliculas") });
            chosencate = categoria;
            mostrarCatalogo(filtrado);
            break;
        }
        case "Videojuegos": {
            let filtrado = catalogo.filter((item) => { return (item.categoria == "Videojuegos") });
            chosencate = categoria;
            mostrarCatalogo(filtrado);
            break;
        }
    }
}
//Leer clicks de la página
let idseleleccionado = [];
//let allhtml = document.getElementsByTagName("html");
//allhtml[0].addEventListener('click', LeerEvent);
function LeerEvent(e) {
    let target = e.target;
    if (target.tagName == 'IMG') {  //Comprobar que el click es en una imagen
        let imageid = target.attributes.id.value;
        if (idseleleccionado.length != 0) { //Se comprueba si no es la unica imagen seleccionada
            let index = idseleleccionado.indexOf(imageid);
            if (index == -1) { //Comprobamos que no este seleccionada ya esa imagen
                if (e.ctrlKey) {    //Si pulsa la tecla Ctrl selecciona la imagen
                    let index = idseleleccionado.indexOf(imageid);
                    if (index == -1) { //Comprobamos que no este seleccionada ya esa imagen
                        idseleleccionado.splice(idseleleccionado.length, 0, imageid); //Sino lo esta se añade
                        target.classList.add("seleccionado");
                    }
                    else { //Si lo esta, se elimina de la seleccion
                        idseleleccionado.splice(index, 1);
                    }
                }
                else {   //Sino la ha pulsado, se desmarcan las demás y se queda marcada solo esa
                    idseleleccionado.length = 0;
                    let imagenes = document.getElementsByTagName("img");
                    for (let i = 0; i < imagenes.length; i++) {
                        imagenes[i].classList.remove("seleccionado");
                    }
                    idseleleccionado.splice(0, 0, imageid);
                    target.classList.add("seleccionado");
                    /*imagenes.namedItem.map((item=>{
                        item.classList.remove("seleccionado");
                    }));*/
                }
            }
            else {   //Si es una unica imagen pero la misma
                idseleleccionado.length = 0;
                target.classList.remove("seleccionado");
            }
        }
        else {   //Si es la unica imagen se selecciona normal
            idseleleccionado.splice(idseleleccionado.length, 0, imageid)
            target.classList.add("seleccionado");

        }
        mostrar(idseleleccionado);
    }
    else {   //Si es fuera de la imagen se deselecciona todo
        idseleleccionado.length = 0;
        let imagenes = document.getElementsByTagName("img");
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].classList.remove("seleccionado");
        }
    }
}
function mostrar(seleccion) {
    if (seleccion.length == 1) {
        document.getElementById("tercero").style.visibility = "";
    }
    else {
        document.getElementById("tercero").style.visibility = "hidden";
    }
}
/*function ModificarClass(imagen) {
    if (imagen.parentNode.classList.contains("seleccionado")) {
        imagen.parentNode.classList.remove("seleccionado");
    }
    else {
        imagen.parentNode.classList.add("seleccionado");
    }
}*/
function mostrarError(msgError) {
    let input = document.getElementById("Url")
    let error = document.createElement("p")
    input.insertAdjacentElement("afterend", error)
    error.innerHTML = `<span>${msgError}</span>`
}
function Anadir(url, title) {

    let nuevo = new Product(catalogo.length + 1, url, title, chosencate);
    catalogo.splice(catalogo.length + 1, 0, nuevo)
    SelectCategoria(chosencate);
}
function Modificar(url, title) {
    let imageid = idseleleccionado[0];
    let index = idseleleccionado.indexOf(imageid);
    if (index != -1) {
        let nuevo = new Product(imageid, url, title, chosencate);
        catalogo.splice(index, 1, nuevo)
    }
}

function CambiarCate(categ) {

}
function Save() {
    //Guardamos en el localstorage las categorias
    localStorage.setItem("categorias", JSON.stringify(categorias));
    //Guardamos en el localstorage el catalogo
    localStorage.setItem("catalogo", JSON.stringify(catalogo));
}
function Product(pid, purl, ptitle, pcategoria) {
    if (purl != "") {
        if (ptitle != "") {
            if (pcategoria != "") {
                if (pid != "") {
                    this.id = pid;
                    this.src = purl;
                    this.titulo = ptitle;
                    this.categoria = pcategoria;
                }
                else {
                    throw mostrarError("El id es obligatorio");
                }

            }
            else {
                throw mostrarError("Debe seleccionar una categoría");
            }
        }
        else {
            throw mostrarError("El título no puede estar vacio");
        }
    }
    else {
        throw mostrarError("La url no puede estar vacía");
    }
}
