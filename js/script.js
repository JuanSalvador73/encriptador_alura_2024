let texto_Encriptar = document.querySelector('#campoTexto');
let texto_Encriptado = document.querySelector('#campoTextoEncriptado');
let texto_Aviso = document.querySelector('#aviso');
//let textoCripto = texto_Encriptar.value;

const CONSONANTS_VOCALS = {
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat'
}

const CONSONANTS_PHRASE = {
    'ai':'a',
    'enter':'e',
    'imes':'i',
    'ober':'o',
    'ufat':'u'
}

//La funcion que llama al Encriptamiento
function EncriptarTexto(){

   CheckString();
   //ValidarTexto();
   //EncriptamientoTexto();
}

//Aqui hacemos la comparacion de valores con una matriz usando 'for'
function EncriptamientoTexto(){
    textoCripto = texto_Encriptar.value;
    textoCripto = textoCripto.replace(/[aeiou]/g, matched => CONSONANTS_VOCALS[matched]);
    texto_Encriptado.value = textoCripto;
    texto_Encriptar.value = '';
    console.log(textoCripto);
    texto_Aviso.innerHTML = '';
}


function Desencriptar(){
    textoADesencriptar = texto_Encriptado.value;
    textoADesencriptar = textoADesencriptar.replace(/ai|enter|imes|ober|ufat/g, matched => CONSONANTS_PHRASE[matched]);
    texto_Encriptar.value = textoADesencriptar;
    texto_Encriptado.value = '';
    console.log('textoADesencriptar');
}

// Checamos si el campo esta vacio
function CheckString(){
    if(texto_Encriptar.value == ''){
        texto_Aviso.innerHTML = 'El campo esta vacio';
        console.log('Campo vacio');
    } else {
        ValidarTexto();
    }
}

// Checamos si el texto escrito es valido
// la funcion 'test' se usa con expresiones regulares y devuelve 'true' o 'false'
function ValidarTexto(){
    if(!/^[a-z\s]+$/.test(texto_Encriptar.value)){
        texto_Aviso.innerHTML = 'Solo minusculas y sin caracteres especiales';
    } else {
        EncriptamientoTexto();
    }
}

//Borrar todos los campos
function Borrar(){
    texto_Encriptar.value = '';
    texto_Encriptado.value = '';
    texto_Aviso.innerHTML = '';
}