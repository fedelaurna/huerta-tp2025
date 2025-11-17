import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyDXbBUDJ-ZjKG36--lPh9Po_-7n41vXMB0",
  authDomain: "huerta-2025.firebaseapp.com",
  databaseURL: "https://huerta-2025-default-rtdb.firebaseio.com",
  projectId: "huerta-2025",
  storageBucket: "huerta-2025.firebasestorage.app",
  messagingSenderId: "423826580167",
  appId: "1:423826580167:web:9f43b9effffb895d7994e2"
};

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const parrafo = document.getElementById("datos")

const refHuerta = ref(db, "Huerta")

onValue(refHuerta, (snapshot) => {
  const huerta = snapshot.val()
  console.log("Datos recibidos:", huerta)

  if (huerta) {
    parrafo.innerHTML = `
      Temperatura: ${huerta.temperatura}°C<br>
      Humedad del Aire: ${huerta.humedadAire}%<br>
      Humedad del Suelo: ${huerta.humedadSuelo}%
    `
  }})
