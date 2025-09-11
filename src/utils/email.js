import emailjs from "@emailjs/browser";

export function sendMail(to, name, report) {
    emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
            to_email: to,
            to_name: name,
            message: `Congratulations ${name}, you are shortlisted for next round! 
      Score: ${report.score}/10
      Strengths: ${report.strengths}
      Weaknesses: ${report.weaknesses}`
        },
        import.meta.env.VITE_EMAILJS_PUBLIC
    );
}
