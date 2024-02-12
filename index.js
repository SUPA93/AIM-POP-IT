const counterDisplay = document.querySelector("h3")
const timeDisplay = document.querySelector("h5")
const startButton = document.querySelector("#start");
let counter = 0;
let time = 60;
let isGameActive = false;

const startGame = () => {
    counter = 0;
    time = 60;
    isGameActive = true;
    counterDisplay.textContent = counter;
    timeDisplay.textContent = time;
    startButton.style.display = "none";

    const bubbleMaker = () => {
        const bubble = document.createElement("span");
        bubble.classList.add("bubble");

        document.body.appendChild(bubble);

        const size = Math.random() * 100 + 100 + "px";
        bubble.style.height = size;
        bubble.style.width = size;

        bubble.style.top = Math.random() * 100 + 100 + "%";
        bubble.style.left = Math.random() * 100 + "%";

        const plusMinus = Math.random() > 0.5 ? 1 : -1;
        bubble.style.setProperty('--left', Math.random(plusMinus) * 100 + "%");

        bubble.addEventListener('click', () => {
            if (isGameActive) {
                bubble.remove();
                counter++;
                counterDisplay.textContent = counter;
            }
        });

        setTimeout(() => {
            bubble.remove();
        }, 8000)
    };
    const timerInterval = setInterval(() => {
        time--;
        timeDisplay.textContent = time;
        if (time <= 10){
            timeDisplay.style.color = "red";
        }else{
            timeDisplay.style.color = "rgba(222, 176, 108, 0.677)";
        }

        if (time <= 0) {
            clearInterval(timerInterval);
            isGameActive = false;
            timeDisplay.style.color = "rgba(222, 176, 108, 0.677)";
        }
    }, 1000);

    const bubbleInterval = setInterval(bubbleMaker, 600);
    const clearBubbles = () => {
        document.querySelectorAll('.bubble').forEach(bubble => {
            bubble.remove();
        });
    };
    setTimeout(() => {
        clearInterval(bubbleInterval);
        clearBubbles();
        startButton.style.display = "";
    }, 60000);

};
startButton.addEventListener('click', startGame);
timeDisplay.textContent = `${time}`;