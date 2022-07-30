const addButton = document.querySelector('.add');
const subButton = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
const range = document.querySelector('.range');
const rangeValue = document.querySelector('#range-value');
const scoreValue = document.querySelector('#score');

let userValue = 1;
let userScore = 0;

const updateUI = userScore => {
    scoreValue.textContent = userScore;
};

range.addEventListener('input', () => {
    rangeValue.textContent = range.value
});

range.addEventListener('change', () => {
    userValue = range.value
    rangeValue.textContent = range.value
});

addButton.addEventListener('click', () => {
    userScore += Number(userValue);
    scoreValue.textContent = userScore;
    console.log(userScore)
});

subButton.addEventListener('click', () => {
    if(userScore > 0){
        userScore -= Number(userValue);
        if(userScore < 0){
            userScore = 0
            updateUI(userScore);
        } else {
            updateUI(userScore);
        }
    }
});

reset.addEventListener('click', () => {
    userScore = 0;

    updateUI(userScore)
});