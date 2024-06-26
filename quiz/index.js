const questions = [
    "How often do you feel included in your team?",
    "Do you believe your workplace promotes diversity?",
    "How comfortable are you with expressing your opinions at work?",
    "Have you witnessed or experienced discrimination in your workplace?",
    "Do you feel that all employees are treated equitably?",
    "How satisfied are you with the company's diversity initiatives?",
    "Do you feel that your company values your cultural background?",
    "How often do you participate in diversity and inclusion activities?",
    "Do you believe there is a need for more diversity in leadership positions?",
    "Would you recommend your company as an inclusive place to work?"
];

$(document).ready(function() {
    const $questionsContainer = $('#questionsContainer');

    // Dynamically create questions
    questions.forEach((question, index) => {
        const questionHtml = `
            <div class="form-group">
                <label>${index + 1}. ${question}</label>
                <select class="form-control" name="question${index + 1}" required>
                    <option value="">Select an answer</option>
                    <option value="1">Strongly Disagree</option>
                    <option value="2">Disagree</option>
                    <option value="3">Neutral</option>
                    <option value="4">Agree</option>
                    <option value="5">Strongly Agree</option>
                </select>
            </div>
        `;
        $questionsContainer.append(questionHtml);
    });

    // Handle form submission
    $('#quizForm').submit(function(event) {
        event.preventDefault();

        const formData = $(this).serializeArray();
        console.log(formData); // You can handle form data here (e.g., send it to a server)

        alert('Thank you for completing the quiz!');
        // Optionally reset the form
        this.reset();
    });
});
