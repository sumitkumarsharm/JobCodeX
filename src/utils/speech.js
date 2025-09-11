// AI Voice Output
export function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}

// User Voice Input
let recognition;
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";
}

export function startListening(callback) {
    if (!recognition) return;
    recognition.start();
    recognition.onresult = (event) => {
        const text = event.results[0][0].transcript;
        callback(text);
    };
}

export function stopListening() {
    if (recognition) recognition.stop();
}
