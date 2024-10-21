// firestore.js

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDZGH-M9RjVQ_0iXX15hHqAX36Cpjvu3hQ",
    authDomain: "feedbacks-d5981.firebaseapp.com",
    projectId: "feedbacks-d5981",
    storageBucket: "feedbacks-d5981.appspot.com",
    messagingSenderId: "450937754382",
    appId: "1:450937754382:web:45906d32467ddd462f7d5f",
    measurementId: "G-CQSJ0T3FXD"
};

// Inicializa o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

// Função para salvar feedback no Firestore
export async function salvarFeedbackNoFirestore(feedbackData) {
    try {
        await db.collection("feedbacks").add(feedbackData);
        console.log("Feedback salvo no Firestore!");
        return true; // Retorna verdadeiro se a gravação for bem-sucedida
    } catch (error) {
        console.error("Erro ao salvar feedback no Firestore:", error);
        return false; // Retorna falso se houver erro
    }
}
