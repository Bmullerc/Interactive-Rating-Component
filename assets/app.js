const submitBtn = document.querySelector('.submit');
const ratingNumber = document.getElementsByClassName('rating');
const thankYouPage = document.querySelector('.thankyou-page');
const ratingPage = document.querySelector('.rating-page');
let thankYouText = document.getElementById('result-rating');
let selectedNumber = 0;
let totalSelected = 0;

function pressedNumber() {
    for (let i = 0; i < ratingNumber.length; i++) {
        ratingNumber[i].addEventListener('click', () => {
            ratingNumber[i].classList.toggle('pressed');
            selectedNumber = i + 1;
            totalSelected++
            writeValue(selectedNumber);
            
            if (totalSelected > 1) {
                ratingNumber[i].classList.remove('pressed');
                totalSelected--
                console.log(totalSelected);
            }
        })
    }
}

function writeValue(number) {
    thankYouText.innerText = number;
}

submitBtn.addEventListener('click', () => {
    if (selectedNumber === 0) {
        alert('Please select a rating between 1 and 5.');
    } else if (totalSelected > 1) {
        alert('Please select only one value!');
    } else {
        thankYouPage.classList.toggle('hidden');
        ratingPage.classList.toggle('hidden');
    }
});

pressedNumber()