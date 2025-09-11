export async function getQuestions(userData) {
    // call OpenAI API here with userData.resume + job info
    return [
        "Tell me about yourself.",
        "What projects have you built with React?",
        "How do you optimize performance in web apps?"
    ];
}

export async function evaluateAnswer(question, answer, userData) {
    // call OpenAI API to evaluate
    return `Good explanation for "${question}". Needs more detail.`;
}

export async function finalEvaluation(answers, userData) {
    // send all answers + resume to AI for scoring
    return {
        score: 8,
        strengths: "Good technical knowledge, clear communication",
        weaknesses: "Needs improvement in system design"
    };
}
