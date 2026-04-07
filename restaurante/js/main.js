/**********************HEADER********************** */
//MENÚ TRES LÍNEAS

let b3lineas = document.getElementById("b3lineas");

b3lineas.onclick = function () {
    var div = document.createElement("div");

}

/**********************BODY********************** */

//BOTÓN ESCANEAR QR

let bEscanearQR = document.getElementById("bEscanearQR");

bEscanearQR.onclick = function () {
    window.location.href = '../HTML/CLIENTE/cartaMenus.html';
}

//BOTÓN REGISTRA TU RESTAURANTE

let bRegistraResta = document.getElementById("bRegistraResta");

bRegistraResta.onclick = function () {
    window.location.href = '../HTML/RESTAURANTE/introducirCarta.html';
}

