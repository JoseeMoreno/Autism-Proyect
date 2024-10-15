// cargamos los archivos de sonido desde la carpeta "sfx"
const sounds = [
    new Audio('sfx/pop.mp3'),
    new Audio('sfx/yepi.mp3'),
    new Audio('sfx/augh.mp3'),
    // De momento si queremos agregar mas sonidos tendremos que modificar este script manualmente, no sé si quieran presentar en el sprint 
    // los sonidos ya completos
];

// valor aleatorio para mostrar un sonido aleatorio
let rnd = 0;

// función para obtener un sonido aleatorio del arreglo de sonidos
function getRandomSound() {
    rnd = Math.floor(Math.random() * sounds.length);  // Funciona seleccionando el indice del sonido dentro del arreglo
    return sounds[rnd];
}

// Evento de click en botones
function handleButtonClick() {
    document.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
            const randomSound = getRandomSound();  // Aqui se selecciona un sonido aleatorio
            randomSound.play();                    // y aqui se reproduce
        });
    });
}

// Eventos de tecleo
function handleKeyPress() {
    let keyCount = 0;

    document.addEventListener('keydown', (event) => {
        if (event.target.tagName !== 'TEXTAREA' && event.target.tagName !== 'INPUT') {
            // Tecleos fuera de inputs, osea fuera de casillas de texto de cualquier tipo
            const randomSound = getRandomSound();
            randomSound.play();
        } else {
            // Contar teclas en el input
            keyCount++;
            if (keyCount % 1 === 0) { // Reproducir sonido por cada tecla (lo podemos cambiar si llegamos a creer que es molesto tanto sonido al escribir)
                const randomSound = getRandomSound();  /// Aqui se selecciona un sonido aleatorio
                randomSound.play();                     // y aqui se reproduce, justo como arriba
            }
        }
    });
}

// Ejecutar al cargar la página en la que se encuentre el script
window.addEventListener('DOMContentLoaded', () => {
    handleButtonClick();
    handleKeyPress();
});
