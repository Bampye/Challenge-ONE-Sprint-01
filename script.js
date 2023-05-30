
const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

function encriptar() {

    const contenedor = document.getElementById('contenedor-salida')
    const entrada = document.getElementById('entrada')
    const salida = document.getElementById('salida')
    const vacio = document.getElementById('vacio')

    // texto normalizado, minusculas y sin caracteres especiales
    let texto = entrada.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")

    // Encriptado, remplazamos cada uno de las letras
    for (const [letra, codigo] of Object.entries(diccionario)) {
        texto = texto.replaceAll(letra, codigo)
    }

    // Asignamos a salida, el texto encriptado
    salida.value = texto

    // Si texto es vacio, regresamos el "ningun mensaje fue encontrado"
    if (texto === '') {
        contenedor.classList.add('hidden')
        vacio.classList.remove('hidden')
    } else {
        contenedor.classList.remove('hidden')
        vacio.classList.add('hidden')
    }
}

function desencriptar() {

    const contenedor = document.getElementById('contenedor-salida')
    const entrada = document.getElementById('entrada')
    const salida = document.getElementById('salida')
    const vacio = document.getElementById('vacio')

    // texto normalizado, minusculas y sin caracteres especiales
    let texto = entrada.value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")

    // Desencriptado, remplazamos cada uno de los codigos
    for (const [letra, codigo] of Object.entries(diccionario)) {
        texto = texto.replaceAll(codigo, letra)
    }

    // Asignamos a salida, el texto desencriptado
    salida.value = texto

    // Si texto es vacio, regresamos el "ningun mensaje fue encontrado"
    if (texto === '') {
        contenedor.classList.add('hidden')
        vacio.classList.remove('hidden')
    } else {
        contenedor.classList.remove('hidden')
        vacio.classList.add('hidden')
    }
}

function copiar() {

    const salida = document.getElementById('salida')
    const copiar = document.getElementById('copiar')

    // Temporalmente "copiado" y regresamos texto original
    copiar.textContent = '¡Copiado!'
    setTimeout(() => copiar.textContent = 'Copiar', 500)

    // Copiamos salida al portapapeles
    navigator.clipboard.writeText(salida.value);
}