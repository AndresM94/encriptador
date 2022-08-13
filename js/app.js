const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');

const mayus = /[A-Z]/g;
const caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;

/**
 * It copies the text from the textarea to the clipboard.
 */
function copiarPortapapel() {
    let copiado = document.getElementById('salida-text');
    copiado.select();
    document.execCommand('copy');
    alert("Copiado");
}

/**
 * If the input field is not empty, then the text content of the output field is set to the value of
 * the input field, the "no message" message is hidden, and the output field is shown. Otherwise, the
 * output field is hidden and the "no message" message is shown.
 */
function mostrarMensaje() {
    let contenido = document.getElementById('salida-text');
    let sinMensaje = document.getElementById('sin-texto');
    let textoEntrada = document.getElementById('input-text');
    let mensajeSalida = document.getElementById('texto-salir');
    if(textoEntrada.value !== '') {
        contenido.textContent = textoEntrada;
        sinMensaje.classList.add('ocultar');
        mensajeSalida.classList.remove('ocultar');
    } else {
        mensajeSalida.classList.add('ocultar')
        sinMensaje.classList.remove('ocultar');
    }
}

/**
 * It takes the value of the input text, checks if it's empty, if it has uppercase letters, if it has
 * special characters, and if it doesn't have any of those, it replaces the words "ai", "enter",
 * "imes", "ober" and "ufat" with the letters "a", "e", "i", "o" and "u" respectively.
 */
function desencriptar(){
    let textoDesencritado = document.getElementById('salida-text');
    let textoEncriptado = document.getElementById('input-text').value;
    let msjDesencriptado = "";

    if(textoEncriptado == ""){
        alert("Necesita ingresar texto");
        mostrarMensaje();
    }else if (textoEncriptado.match(mayus) != textoEncriptado.match(mayus)){
        alert("No se admiten mayusculas")
        mostrarMensaje();
    }else if (textoEncriptado.match(caracteres) != textoEncriptado.match(caracteres)){
        alert("No se aceptan acentos y/o caracteres especiales")    
        mostrarMensaje();
    }else{
        mostrarMensaje();
        msjDesencriptado = textoEncriptado.replace(/ai/g, "a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u"); 
        textoDesencritado.textContent = msjDesencriptado;
    }
}

/**
 * It takes a string, replaces the vowels with a string of letters, and returns the new string.
 */
function encriptar(){
    let mensajeSalida = document.getElementById('salida-text');
    let mensaje = document.getElementById('input-text').value;
    let msjEncriptado = "";

    if(mensaje == ""){
        alert("no debe estar vacio");
        mostrarMensaje();
    }else if (mensaje.match(mayus) != mensaje.match(mayus)){
        alert("No puede contener mayusculas");
        mostrarMensaje();
    }else if (mensaje.match(caracteres) != mensaje.match(caracteres)){
        alert("no puede contener acentos ni caracteres especiales");
        mostrarMensaje();
    }else{
        for(let i = 0; i < mensaje.length; i++){
            if(mensaje[i] == "a"){
                var encriptando = mensaje[i].replace("a","ai",);
                msjEncriptado = msjEncriptado + encriptando;
            }else if(mensaje[i] == "e"){
                var encriptando = mensaje[i].replace("e","enter");
                msjEncriptado = msjEncriptado + encriptando;
            }else if(mensaje[i] == "i"){
                var encriptando = mensaje[i].replace("i","imes");
                msjEncriptado = msjEncriptado + encriptando;
            }else if(mensaje[i] == "o"){
                var encriptando = mensaje[i].replace("o","ober");
                msjEncriptado = msjEncriptado + encriptando;
            }else if(mensaje[i] == "u"){
                var encriptando = mensaje[i].replace("u","ufat");
                msjEncriptado = msjEncriptado + encriptando;
            }else{
                msjEncriptado = msjEncriptado + mensaje[i];
            }
        }
        mostrarMensaje();
        mensajeSalida.textContent = msjEncriptado;
    }
}

btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);