const output = document.getElementById("output");
const btn = document.getElementById("btn");
const input = document.getElementById("userInput");

let x = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

btn.addEventListener("click", function(e) {
    e.preventDefault();
    
    const userGuess = Number(input.value);
    attempts++;

    if (!input.value) {
        output.innerHTML = "Enter A Number!!";
        output.style.color = "red";
        return;
    } 
    if (userGuess < 1 || userGuess > 100) {
        output.innerHTML = "Number must be between 1 and 100!";
        output.style.color = "red";
        return;
    }

    if (userGuess === x) {
        output.innerHTML = `You guessed Right! Your number is ${x}`;
        output.style.color = "#00e300";
        document.body.style.pointerEvents = "none";

        clearInterval(intervalId); 
        let intervalId = setInterval(() => {
            output.innerHTML += ".";
        }, 500);
        
        setTimeout(() => {
            location.reload(); 
        }, 2000);
    } else if (userGuess < x) {
        output.innerHTML = "You guessed Low!";
        output.style.color = "orange";
    
    } else {
        output.innerHTML = "You guessed High!";
        output.style.color = "orange";
    }
            const distance = Math.abs(userGuess - x);
        const closeness = distance <= 10 ? "You're close!" : "You're far!";
        output.innerHTML += ` ${closeness}`;
})

