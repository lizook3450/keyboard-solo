const words = [
    "actually", "atom",
    "belt", "bound",
    "contrast", "fine",
    "great", "organized",
    "terrible", "wife",
    "weather", "shown",
    "sale", "pour",
    "open", "monkey",
    "feet", "end",
    "dark", "castle"
]
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const randomWord = document.querySelector('.word');


function getRandomWord() {
    
    const fragment = new DocumentFragment();
    const word = words[randomNumber(0, words.length - 1)];
    
    for (let letter of word) {
        const letterContainer = document.createElement('span');
        letterContainer.textContent = letter;
        fragment.append(letterContainer); 
        
    }
    randomWord.append(fragment)
    
    console.log(randomWord)
}
getRandomWord();

let i = 0;

document.addEventListener('keydown', function (event) {
    const nodeSpanCollection = randomWord.querySelectorAll('span');
    const spanCollection = Array.from(nodeSpanCollection);
    
   
    if (event.key == spanCollection[i].textContent) {
        spanCollection[i].classList.remove('w');
        spanCollection[i].classList.add('c');
        i++;
    } else {
        spanCollection[i].classList.remove('c');
        spanCollection[i].classList.add('w');
    }

})


