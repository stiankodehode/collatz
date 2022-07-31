// Declaring all the variables for the elements needed
const inputNumber = document.querySelector("#input-number");
const firstNumber = document.querySelector("#first-number");
const highestNumber = document.querySelector("#highest-number");
const amountNumber = document.querySelector("#amount-numbers");

// Event listener that listens for "Enter" keydown then runs the runCollatz function with the inputNumber value.
// Also resets the value back to nothing when its done.

document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        runCollatz(parseInt(inputNumber.value));
        inputNumber.value = "";
    }
});

function runCollatz(number) {
    // Declaring an array that will hold all the numbers through the loop.
    let highestNumberArray = [];

    // Declaring a variable that will be looped untill it is 1
    let collatz = number;

    // Variable that contains the original number.
    const originalNumber = number;

    // While loop that keeps looping the while the collatz number is bigger than 1
    while (collatz > 1) {
        highestNumberArray.push(collatz);
        if (collatz % 2 === 0) {
            collatz = collatz / 2;
        } else {
            collatz = collatz * 3 + 1;
        }
    }
    // After the loop we sort the array from biggest to smallest
    highestNumberArray.sort((a, b) => {
        return b - a;
    });

    // Once we have everything we need, renderInfo() with the correct parameters
    renderInfo(
        originalNumber,
        highestNumberArray[0],
        highestNumberArray.length
    );
}

// Simple function to give all the elements the right textContent
function renderInfo(firstInt, highestInt, amountInt) {
    firstNumber.textContent = firstInt;
    highestNumber.textContent = highestInt;
    amountNumber.textContent = amountInt;
}
