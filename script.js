
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let myBtn = document.querySelector(".check")
myBtn.addEventListener('click', function () {

    let guess = Number(document.querySelector(".guess").value);


    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ Not a Number"

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!"
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "📈 Too High!"
        if (score > 1) {
            score = score - 1;
            document.querySelector(".score").textContent = score;

        } else {
            document.querySelector(".score").textContent = "🤯 You Loose the Game!"

        }


    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "📉 Too Low!"

        if (score > 1) {
            score = score - 1;
            document.querySelector(".score").textContent = score;

        } else {
            document.querySelector(".score").textContent = "🤯 You Loose the Game!"
        }
    }

})

document.querySelector(".again").addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = "Start Guessing..."
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '';

    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

})