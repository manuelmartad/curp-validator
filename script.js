const formulario = document.querySelector("#formulario");
const curp = document.querySelector("#curp");

function validarCampos(event) {
    event.preventDefault();

    // Validate the curp field is not empty and trim spaces
    if (curp.value.trim() === "") {
        showAlert("Por favor, ingresa tu CURP.");
        return;
    }

    // Check that string length is 18 characters
    if (curp.value.trim().length !== 18) {
        showAlert("La longitud de tu CURP debe ser 18 caracteres.");
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
        showAlert("Por favor, verifica los campos de tu CURP.");
        return;
    }

    formulario.submit();
}

curp.addEventListener("input", (event) => {
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

    if (!esLetra) {
        showAlert("El primer caracter de tu CURP debe ser la primer letra de tu primer apellido.");
        return;
    }
    if (!esVocal) {
        showAlert("La segunda letra de tu CURP debe ser la primer vocal interna de tu primer apellido.");
        return;
    }
    if (!esTercerLetra) {
        showAlert("La tercera letra de tu CURP debe ser la primer letra del segundo apellido.");
        return;
    }
    if (!esCuartaLetra) {
        showAlert("La cuarta letra de tu CURP debe ser la primer letra de tu primer nombre.");
        return;
    }
    if (!esFecha) {
        showAlert("Los caracteres 5 al 10 de tu CURP deben representar tu fecha de nacimiento en formato Año, Mes y Día. Ejemplo: 920528.");
        return;
    }
    if (!esSexo) {
        showAlert("El onceavo caracter de tu CURP debe ser 'H' o 'M'.");
        return;
    }
    if (!esEstado) {
        showAlert("Los caracteres 12 y 13 de tu CURP deben representar las dos letras del lugar de nacimiento de acuerdo al código de la Entidad Federativa. Ejemplo: CH para el estado de Chihuahua");
        return;
    }
});


let alertBox = null;

function showAlert(message) {
    if (alertBox) {
        // If alert box already exists, update message
        alertBox.textContent = message;
    } else {
        // Create new alert box
        alertBox = document.createElement("div");
        alertBox.classList.add("alert", "bg-danger", "text-light", "mt-5", "w-50", "mx-auto");
        alertBox.textContent = message;
        document.querySelector("h1").before(alertBox);
    }

}

formulario.addEventListener("submit", validarCampos);


