/* Referencia al Storage */
const storage = window.localStorage

/* Selectores elementos Dom */

const check2 = document.querySelector('.toggle');
const body2 = document.querySelector('.body');

let oscuro = Boolean(storage.getItem('oscuro'))

const comprobarOscuro = oscuro => {
    if (oscuro) {
        body2.classList.add('change-color')
        check2.checked = true
    } else {
        body2.classList.remove('change-color')
        check2.checked = false
    }
}

comprobarOscuro(oscuro);


check2.addEventListener('click', function() {

    if (this.checked) {
        body2.classList.add('change-color')
        storage.setItem('oscuro', true)
    } else {
        body2.classList.remove('change-color')
        storage.removeItem('oscuro')
    }
})