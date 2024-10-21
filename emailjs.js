// emailjs.js

// Inicializa o EmailJS com a chave pública
(function() {
    emailjs.init("dDWLYAbLMPlBXA9Dp"); // Substitua pela sua chave pública
})();

// Função para enviar feedback via EmailJS
async function enviarEmail(feedbackData) {
    try {
        // Envia o feedback para o EmailJS
        await emailjs.send('service_1s24rqp', 'template_5wqwjdp', feedbackData);
        console.log("Feedback enviado com sucesso!");
        return true; // Retorna verdadeiro se o envio for bem-sucedido
    } catch (error) {
        console.error("Erro ao enviar feedback via EmailJS:", error);
        return false; // Retorna falso se houver erro
    }
}
