// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6R-7dykg98HilN5KdsoQRwy-Vqw-pzd8",
    authDomain: "crud-38c64.firebaseapp.com",
    databaseURL: "https://crud-38c64-default-rtdb.firebaseio.com",
    projectId: "crud-38c64",
    storageBucket: "crud-38c64.appspot.com",
    messagingSenderId: "903292111702",
    appId: "1:903292111702:web:3c117e1cf089e38922e4f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove
}
from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const db = getDatabase();

const registerForm = document.getElementById('register-form');

registerForm, addEventListener('submit', (e) => {
    e.preventDefault()



    const nombre = registerForm['name'].value
    const apellido = registerForm['apellido'].value
    const telefono = registerForm['tel'].value
    const correo = registerForm['correo'].value
    const dia = registerForm['dia'].value
    const mes = registerForm['mes'].value
    const ano = registerForm['ano'].value

    const dbref = ref(db);

    get(child(dbref, "Usuarios/" + telefono)).then((snapshot) => {
        if (snapshot.exists()) {
            alert('usario ya registrado')
        } else {

            set(ref(db, "Usuarios/" + telefono), {
                    nombre: nombre,
                    apellido: apellido,
                    telefono: telefono,
                    correo: correo,
                    dia: dia,
                    mes: mes,
                    ano: ano

                })
                .then(() => {
                    alert("Usuario registrado con exito");
                    registerForm.reset();
                    window.location.href = "/index.html";

                })
                .catch((error) => {
                    alert("unsuccesful");
                })


        }
    })




})

function selectData() {



}