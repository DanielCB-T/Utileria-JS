document.addEventListener('DOMContentLoaded', () => {
    // Referencias al formulario y campos
    const formulario = document.getElementById('formularioLogin');
    const campoCorreo = document.getElementById('correo');
    const campoContrasena = document.getElementById('contrasena');

    // Función auxiliar: marca un campo como válido o inválido
    const marcarEstado = (campoInput, esValido) => {
        const grupoCampo = campoInput.closest('.grupo-campo');
        if (esValido) {
            grupoCampo.classList.remove('invalido');
            grupoCampo.classList.add('valido');
        } else {
            grupoCampo.classList.remove('valido');
            grupoCampo.classList.add('invalido');
        }
        return esValido;
    };

    // Funciones de validación individuales
    const validarCampoCorreo = () => {
        return marcarEstado(campoCorreo, validarCorreo(campoCorreo.value.trim()));
    };

    const validarCampoContrasena = () => {
        return marcarEstado(campoContrasena, validarPassword(campoContrasena.value));
    };

    // Escuchadores en tiempo real (sin console.log)
    campoCorreo.addEventListener('input', validarCampoCorreo);
    campoContrasena.addEventListener('input', validarCampoContrasena);

    // Envío del formulario
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const correoValido = validarCampoCorreo();
        const contrasenaValida = validarCampoContrasena();

        if (correoValido && contrasenaValida) {
            alert('¡Inicio de sesión exitoso!');
            formulario.reset();
            document.querySelectorAll('.grupo-campo').forEach(grupo => {
                grupo.classList.remove('valido', 'invalido');
            });
        } else {
            alert('Por favor, ingresa credenciales válidas.');
        }
    });
});