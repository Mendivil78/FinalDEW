var categorias;
var catalogo;
// Añade 2 categorías más de temas que  quieras
var strCategorias = '[{"nombre":"Jamones"}]';
// Añade 3 imágenes a cada categorías para tenerlas ya desde el comienzo
var strCatalogo = '[{"id":1,"src":"https://cdn.metro-group.com/es/es_pim_74739001001_01.png?w=400&h=400&mode=pad","titulo":"Sanches Alcaraz ETG Jamón serrano reserva","categoria":"Jamones"},{"id":2,"src":"https://cdn.metro-group.com/es/es_pim_23262001001_01.png?w=400&h=400&mode=pad","titulo":"La era Jamón serrano reserva ETG 7,2/7,5kg","categoria":"Jamones"}]';
//Función IIFE
(function () {
    const DOM = {

    };
    // Obtenemos las categorias del localStorage ... y si no hay las cargamos del string JSON
    categorias = JSON.parse(localStorage.getItem("categorias"));
    if (!categorias){
        categorias = JSON.parse(strCategorias);
    }    
    // Obtenemos el catálogo del localStorage ... y si no hay lo cargamos del string JSON
    catalogo = JSON.parse(localStorage.getItem("catalogo"));
    if (!catalogo){
        catalogo = JSON.parse(strCatalogo);
    }    
    crearlista();
    mostrarCatalogo(catalogo);
})();
function crearlista() {
    //Crear e insertar div de la lista de imagenes
    mainlist = document.createElement('div');
    mainlist.className = "lista-imagenes"
    var button = document.getElementById("contenedor");
    button.insertAdjacentElement("beforeend", mainlist);
}
function mostrarCatalogo(catalogo) {
    //Crear e insertar div de la lista de imagenes
    let milista = document.getElementsByClassName("lista-imagenes");
    milista[0].innerHTML = "";
    //Crear e insertar img de las imagenes
    catalogo.forEach(aphone => {
      //Crear e insertar div de imagen
      let imgdiv = document.createElement('div');
      imgdiv.className = "imagen";
      milista[0].insertAdjacentElement("afterbegin", imgdiv);
      //Crear e insertar img de las imagenes
      let a = document.createElement('img');
      a.setAttribute("src", aphone.src);
      imgdiv.insertAdjacentElement("afterbegin", a);
    })
}
function Anadir(url) {
    if (url != "") {
        catalogo.splice(catalogo.length + 1, 0, url)
        localStorage.setItem("imgdew", JSON.stringify(phones));
        mostrarCatalogo(phones);
    }
    else {
        throw mostrarError("La url no puede estar vacía")
    }
}

