const formulario = document.querySelector("#formulario");
const curp = document.querySelector("#curp");
const btnValidar = document.querySelector("#btn-validar");

function validarCampos(event) {
    event.preventDefault();

    // Validate the curp field is not empty and trim spaces
    if (curp.value.trim() === "") {
        showAlert("Por favor, ingresa tu CURP.", "red");
        return;
    }

    // Check that string length is 18 characters
    if (curp.value.trim().length !== 18) {
        showAlert("La longitud de tu CURP debe ser 18 caracteres.", "red");
        return;
    }

    const cadena = curp.value.trim();
    const [primeraLetra, segundaLetra, tercerLetra, cuartaLetra] = cadena;

    const esLetra = /^[A-Za-z]$/.test(primeraLetra);
    const esVocal = /[aeiouáéíóú]/i.test(segundaLetra);
    const esTercerLetra = /^[A-Za-z]$/.test(tercerLetra);
    const esCuartaLetra = /^[A-Za-z]$/.test(cuartaLetra);
    const fechaNacimiento = cadena.substr(4, 6);
    const esFecha = /^\d{6}$/.test(fechaNacimiento);
    const sexo = cadena.charAt(10);
    const esSexo = /^[HM]$/i.test(sexo);
    const estado = cadena.substr(11, 2);
    const esEstado = /^[A-Za-z]{2}$/.test(estado);

    if (!esLetra || !esVocal || !esTercerLetra || !esCuartaLetra || !esFecha || !esSexo || !esEstado) {
        showAlert("Por favor, verifica los campos de tu CURP.", "red");
        return;
    }

    // setTimeout(() => {
    //     formulario.submit();
    // }, 5000);

}

curp.addEventListener("input", (event) => {

    btnValidar.setAttribute("disabled", true)

    const cadena = event.target.value;
    const [primeraLetra, segundaLetra, tercerLetra, cuartaLetra] = cadena;

    const esLetra = /^[A-Za-z]$/.test(primeraLetra);
    const esVocal = /[aeiouáéíóú]/i.test(segundaLetra);
    const esTercerLetra = /^[A-Za-z]$/.test(tercerLetra);
    const esCuartaLetra = /^[A-Za-z]$/.test(cuartaLetra);
    const fechaNacimiento = cadena.substr(4, 6); // Extract the date of birth substring
    const esFecha = /^\d{6}$/.test(fechaNacimiento);
    const sexo = cadena.charAt(10);
    const esSexo = /^[HM]$/i.test(sexo);
    const estado = cadena.substr(11, 2); // Extract the estado substring
    const esEstado = /^[A-Za-z]{2}$/.test(estado); // Validate the estado format
    const consonanteApellidoPaterno = cadena.charAt(13);
    const esConsonanteApellidoPaterno = /^[bcdfghjklmnpqrstvwxyz]/i.test(consonanteApellidoPaterno);
    const consonanteApellidoMaterno = cadena.charAt(14);
    const esConsonanteApellidoMaterno = /^[bcdfghjklmnpqrstvwxyz]/i.test(consonanteApellidoMaterno);
    const consonantePrimerNombre = cadena.charAt(15);
    const esConsonantePrimerNombre = /^[bcdfghjklmnpqrstvwxyz]/i.test(consonantePrimerNombre);

    const palabrasInconvenientes = [
        { palabra: "BACA", reemplazo: "BXCA" },
        { palabra: "BAKA", reemplazo: "BXKA" },
        { palabra: "BUEI", reemplazo: "BXEI" },
        { palabra: "BUEY", reemplazo: "BXEY" },
        { palabra: "CACA", reemplazo: "CXCA" },
        { palabra: "CACO", reemplazo: "CXCO" },
        { palabra: "CAGA", reemplazo: "CXGA" },
        { palabra: "CAGO", reemplazo: "CXGO" },
        { palabra: "CAKA", reemplazo: "CXKA" },
        { palabra: "CAKO", reemplazo: "CXKO" },
        { palabra: "COGE", reemplazo: "CXGE" },
        { palabra: "COGI", reemplazo: "CXGI" },
        { palabra: "COJA", reemplazo: "CXJA" },
        { palabra: "COJE", reemplazo: "CXJE" },
        { palabra: "COJI", reemplazo: "CXJI" },
        { palabra: "COJO", reemplazo: "CXJO" },
        { palabra: "COLA", reemplazo: "CXLA" },
        { palabra: "CULO", reemplazo: "CXLO" },
        { palabra: "FALO", reemplazo: "FXLO" },
        { palabra: "FETO", reemplazo: "FXTO" },
        { palabra: "FUCK", reemplazo: "FXCK" },
        { palabra: "GETA", reemplazo: "GXTA" },
        { palabra: "GUEI", reemplazo: "GXEI" },
        { palabra: "GUEY", reemplazo: "GXEY" },
        { palabra: "JETA", reemplazo: "JXTA" },
        { palabra: "JOTO", reemplazo: "JXTO" },
        { palabra: "LOCO", reemplazo: "LXCO" },
        { palabra: "LOKA", reemplazo: "LXKA" },
        { palabra: "LOKO", reemplazo: "LXKO" },
        { palabra: "MAME", reemplazo: "MXME" },
        { palabra: "MAMO", reemplazo: "MXMO" },
        { palabra: "MEAR", reemplazo: "MXAR" },
        { palabra: "MEAS", reemplazo: "MXAS" },
        { palabra: "MEON", reemplazo: "MXON" },
        { palabra: "MIAR", reemplazo: "MXAR" },
        { palabra: "MION", reemplazo: "MXON" },
        { palabra: "MOCO", reemplazo: "MXCO" },
        { palabra: "MOKO", reemplazo: "MXKO" },
        { palabra: "MULA", reemplazo: "MXLA" },
        { palabra: "MULO", reemplazo: "MXLO" },
        { palabra: "NACA", reemplazo: "NXCA" },
        { palabra: "NACO", reemplazo: "NXCO" },
        { palabra: "PEDA", reemplazo: "PXDA" },
        { palabra: "PEDO", reemplazo: "PXDO" },
        { palabra: "PENE", reemplazo: "PXNE" },
        { palabra: "PIPI", reemplazo: "PXPI" },
        { palabra: "PITO", reemplazo: "PXTO" },
        { palabra: "POPO", reemplazo: "PXPO" },
        { palabra: "PUTA", reemplazo: "PXTA" },
        { palabra: "PUTO", reemplazo: "PXTO" }
    ];

    if (!esLetra) {
        showAlert("El primer caracter de tu CURP debe ser la primer letra de tu primer apellido.", "red");
        return;
    }
    else if (!esVocal) {
        showAlert("El segundo caracter de tu CURP debe ser la primer vocal interna de tu primer apellido.", "red");
        return;
    }
    else if (!esTercerLetra) {
        showAlert("El tercer caracter de tu CURP debe ser la primer letra del segundo apellido.", "red");
        return;
    }
    else if (!esCuartaLetra) {
        showAlert("el cuarto caracter de tu CURP debe ser la primer letra de tu primer nombre.", "red");
        return;
    }
    else if (!esFecha) {
        showAlert("Los caracteres 5 al 10 de tu CURP deben representar tu fecha de nacimiento en formato Año, Mes y Día. Ejemplo: 920528.", "red");
        return;
    }
    else if (fechaNacimiento === "000000") {
        showAlert("El formato de la fecha no es correcto.", "red");
        return;
    }
    else if (!esSexo) {
        showAlert("El onceavo caracter de tu CURP debe ser 'H' para hombre o 'M' para mujer.", "red");
        return;
    }
    else if (!esEstado) {
        showAlert("Los caracteres 12 y 13 de tu CURP deben representar las dos letras del lugar de nacimiento de acuerdo al código de la Entidad Federativa. Ejemplo: CH para el estado de Chihuahua", "red");
        return;
    }
    else if (!esConsonanteApellidoPaterno) {
        showAlert("El caracter 14 de la CURP debe ser la primera consonante no incial del apellido paterno. Ejemplo: Hernandez, R", "red");
        return;
    }
    else if (!esConsonanteApellidoMaterno) {
        showAlert("El caracter 15 de la CURP debe ser la primera consonante no incial del apellido materno. Ejemplo: Perez, R", "red");
        return;
    }
    else if (!esConsonantePrimerNombre) {
        showAlert("El caracter 16 de la CURP debe ser la primera consonante no incial del primer nombre. Ejemplo: Manuel, N", "red");
        return;
    }
    else if (cadena.length != 18) {
        showAlert("La longitud de la CURP debe ser de 18 caracteres.", "red");
        return;
    }
    else {

        // Apply replacement
        let modifiedCurp = cadena.toUpperCase();
        palabrasInconvenientes.forEach(item => {
            modifiedCurp = modifiedCurp.replace(item.palabra, item.reemplazo);
        });

        console.log(cadena.toUpperCase());
        console.log(modifiedCurp);

        showAlert("El formato de tu CURP es valido: " + modifiedCurp, "green")
        btnValidar.removeAttribute("disabled")
    }
});


let alertBox = null;

function showAlert(message, bgColor) {
    if (alertBox) {
        // If an alert box already exists, update message and alert color
        alertBox.textContent = message;
        alertBox.style.backgroundColor = bgColor;

    } else {
        // Create a new alert box
        alertBox = document.createElement("div");
        alertBox.classList.add("alert", "text-light", "mt-5", "mx-auto", "alerta");
        alertBox.style.backgroundColor = bgColor;
        alertBox.textContent = message;
        document.querySelector("h1").before(alertBox);
    }

}

// Event listener for form submission
formulario.addEventListener("submit", validarCampos);

