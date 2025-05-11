// Animación de íconos interactivos
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.experience-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            this.style.transform = 'rotate(720deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 1000);
        });
    });
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}

// Auto-advance carousel
setInterval(nextSlide, 5000);

// Quiz Game
const questions = [
    {
        question: "¿Qué año se considera el nacimiento de la IA?",
        options: ["1950", "1960", "1970", "1980"],
        correct: 0
    },
    {
        question: "¿Cuál de estas es una aplicación de IA en educación?",
        options: ["Sistemas de tutoría inteligentes", "Evaluación automática", "Personalización del aprendizaje", "Todas las anteriores"],
        correct: 3
    },
    {
        question: "GPT significa:",
        options: ["General Processing Technology", "Generative Pre-trained Transformer", "Global Programming Tool", "Graphical Pattern Transformer"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let gameActive = false;

function startQuiz() {
    if (gameActive) return;
    gameActive = true;
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const resultDiv = document.getElementById('game-result');
    const question = questions[currentQuestion];
    
    let html = `<h4>${question.question}</h4><div style="margin-top: 1rem;">`;
    
    question.options.forEach((option, index) => {
        html += `<button class="game-button" style="margin: 0.5rem; padding: 0.5rem 1rem; background-color: ${score >= 0 ? '#005CA9' : '#662962'};" onclick="checkAnswer(${index})">${option}</button>`;
    });
    
    html += '</div>';
    resultDiv.innerHTML = html;
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const resultDiv = document.getElementById('game-result');
    
    if (selectedIndex === question.correct) {
        score++;
        resultDiv.innerHTML += `<p style="color: green; margin-top: 1rem;">¡Correcto! ✓</p>`;
    } else {
        resultDiv.innerHTML += `<p style="color: red; margin-top: 1rem;">Incorrecto. La respuesta correcta es: ${question.options[question.correct]} ✗</p>`;
    }
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        setTimeout(showQuestion, 2000);
    } else {
        setTimeout(() => {
            resultDiv.innerHTML = `<h4>Juego Completado!</h4><p>Tu puntuación: ${score}/${questions.length}</p><button class="game-button" onclick="startQuiz()">Jugar de nuevo</button>`;
            gameActive = false;
        }, 2000);
    }
}

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});