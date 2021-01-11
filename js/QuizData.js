const QuizData = {
    quizID: "",
    quizMetaData:
    { title: "Lisser Art Museum Quiz", ImageURL: "https://www.lamlisse.nl/wp-content/uploads/2018/03/LAM-Lisse-logo-white.svg" },
    quizEndingData: 
    {
        images: { image1: "./afbeeldingen/quiz_afbeeldingen/abstract.jpg", image2: "./afbeeldingen/quiz_afbeeldingen/Blij.jpeg", image3: "./afbeeldingen/quiz_afbeeldingen/random.jpg", image4: "./afbeeldingen/quiz_afbeeldingen/somber.jpg" },
        text: { ending1: "Je bent vrij negatief en vind het allemaal een beetje saai, dit kunstwerk ben jij.", ending2: "Je staat blij in het leven en je staat open om vrijwel alles te doen, dit kunstwerk ben jij!", ending3: "Je weet het nog allemaal niet zo goed en moet nog jou eigen kijk op alles ontdekken, dit kunstwerk ben jij.", ending4: "Je hebt niet echt een mening je vind het allemaal wel goed, dit kunstwerk ben jij."}
    },

    quizContent: [
        {
            question: "Wat vewacht je van het LAM?",
            hint: "Het is best leuk",
            answers: [{
                answer: "Ik denk dat het saai is.",
                feedback: 1
            },
            {
                answer: "Ik denk dat het leuk is als uitje.",
                feedback: 2
            },
            {
                answer: "Ik verwacht er niet zo heel veel van.",
                feedback: 3
            },
            {
                answer: "Geen mening",
                feedback: 4
            }]
        },
        {
            question: "Wat lijkt jou het leukste aan het LAM?",
            hint: "Geen Hint",
            answers: [{
                answer: "Het Cafe",
                feedback: 1
            },
            {
                answer: "De kunstwerken",
                feedback: 2
            },
            {
                answer: "Ik weet het nog niet zo goed",
                feedback: 3
            },
            {
                answer: "Geen mening",
                feedback: 4
            }]
        },
        {
            question: "Wat voor kunst vind jij interessant?",
            hint: "Geen Hint",
            answers: [{
                answer: "Abstracte kunst",
                feedback: 1
            },
            {
                answer: "Food Art",
                feedback: 2
            },
            {
                answer: "Ik heb niet echt een specifieke smaak",
                feedback: 3
            },
            {
                answer: "Geen van de bovenstaande",
                feedback: 4
            }]
        },
        {
            question: "Stel je voor het LAM heeft een nieuwe naam nodig, welke zou je kiezen?",
            hint: "Het is LAM is een Food Art Museum",
            answers: [{
                answer: "Tieten Plein Museum",
                feedback: 1
            },
            {
                answer: "Lisser Modern Food Art",
                feedback: 2
            },
            {
                answer: "Lisser Food",
                feedback: 3
            },
            {
                answer: "Geen mening",
                feedback: 4
            }]
        },
        {
            question: "Zou je met meerdere mensen hier naar toe gaan?",
            hint: "Ik zou het wel doen",
            answers: [{
                answer: "Nee",
                feedback: 1
            },
            {
                answer: "Ja, Natuurlijk!",
                feedback: 2
            },
            {
                answer: "Misschien wel",
                feedback: 3
            },
            {
                answer: "Geen idee",
                feedback: 4
            }]
        }
    ]
}