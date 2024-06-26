const courses = [
    {
        id: 1,
        title: "Foundation Workshop",
        description: "This workshop develops attitudes, skills and knowledge of cultural diversity so you're able to create naturally inclusive environments..."
    },
    {
        id: 2,
        title: "Becoming a Diversity & Inclusion Champion",
        description: "It provides your delegates with practical knowledge, skills, awareness and confidence to successfully promote it across their area of operation..."
    },
    {
        id: 3,
        title: "Inclusive Leadership",
        description: "This workshop is developed to take your leadership team on a journey to assist them in becoming role models for inclusive leadership behaviours..."
    },
    {
        id: 4,
        title: "The True Meaning of Bias",
        description: "Understanding and mitigating bias in the workplace..."
    },
    {
        id: 5,
        title: "Inclusive Recruitment",
        description: "Strategies and best practices for inclusive recruitment..."
    },
    {
        id: 6,
        title: "It's All About Race",
        description: "Focused on racial diversity and inclusion..."
    },
    {
        id: 7,
        title: "Train the Trainer",
        description: "Empowering your teams to run workshops and facilitate conversations on diversity and inclusion..."
    }
];

const questions = [
    {
        question: "What is your main goal?",
        options: [
            { text: "Develop attitudes and knowledge of cultural diversity", courseId: 1 },
            { text: "Promote diversity and inclusion within my team", courseId: 2 },
            { text: "Enhance leadership skills for inclusive leadership", courseId: 3 },
            { text: "Understand and address bias", courseId: 4 },
            { text: "Learn about inclusive recruitment practices", courseId: 5 },
            { text: "Focus on racial diversity and inclusion", courseId: 6 },
            { text: "Train others in diversity and inclusion practices", courseId: 7 }
        ]
    },
    {
        question: "What best describes your role?",
        options: [
            { text: "Employee", courseId: 1 },
            { text: "Manager", courseId: 2 },
            { text: "Leader/Executive", courseId: 3 },
            { text: "HR/Recruiter", courseId: 5 },
            { text: "Trainer/Facilitator", courseId: 7 }
        ]
    },
    {
        question: "Which area do you want to focus on?",
        options: [
            { text: "Cultural diversity", courseId: 1 },
            { text: "Creating high-performing teams", courseId: 2 },
            { text: "Leadership development", courseId: 3 },
            { text: "Bias and discrimination", courseId: 4 },
            { text: "Recruitment practices", courseId: 5 },
            { text: "Racial diversity", courseId: 6 },
            { text: "Training others", courseId: 7 }
        ]
    }
];

$(document).ready(function() {
    const $questionsContainer = $('#questionsContainer');
    const $resultContainer = $('#resultContainer');

    // Dynamically create questions
    questions.forEach((question, index) => {
        const questionHtml = `
            <div class="form-group">
                <label>${index + 1}. ${question.question}</label>
                <select class="form-control" name="question${index + 1}" required>
                    <option value="">Select an answer</option>
                    ${question.options.map(option => `<option value="${option.courseId}">${option.text}</option>`).join('')}
                </select>
            </div>
        `;
        $questionsContainer.append(questionHtml);
    });

    // Handle form submission
    $('#quizForm').submit(function(event) {
        event.preventDefault();

        const formData = $(this).serializeArray();
        const courseCounts = {};

        // Count course IDs from answers
        formData.forEach(answer => {
            const courseId = answer.value;
            if (courseCounts[courseId]) {
                courseCounts[courseId]++;
            } else {
                courseCounts[courseId] = 1;
            }
        });

        // Find the course with the highest count
        const bestCourseId = Object.keys(courseCounts).reduce((a, b) => courseCounts[a] > courseCounts[b] ? a : b);
        const bestCourse = courses.find(course => course.id == bestCourseId);

        // Display the result
        $resultContainer.html(`
            <h2>Recommended Course</h2>
            <h3>${bestCourse.title}</h3>
            <p>${bestCourse.description}</p>
        `);
    });
});
