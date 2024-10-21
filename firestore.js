// firestore.js
// Importar as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDZGH-M9RjVQ_0iXX15hHqAX36Cpjvu3hQ",
    authDomain: "feedbacks-d5981.firebaseapp.com",
    projectId: "feedbacks-d5981",
    storageBucket: "feedbacks-d5981.appspot.com",
    messagingSenderId: "450937754382",
    appId: "1:450937754382:web:45906d32467ddd462f7d5f"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para salvar feedback no Firestore
export async function salvarFeedbackNoFirestore(feedbackData) {
    try {
        const docRef = await addDoc(collection(db, "feedbacks"), feedbackData);
        console.log("Feedback salvo com ID:", docRef.id);
        return true;
    } catch (e) {
        console.error("Erro ao salvar feedback:", e);
        return false;
    }
}
