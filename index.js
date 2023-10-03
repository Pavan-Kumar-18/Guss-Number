const Input = document.querySelector("input");
const Button = document.querySelector("button");
const Output = document.querySelector("span");

function randomNumber() {
  const Random = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
  const Value = parseInt(Input.value); // Parse the input value to an integer

  if (isNaN(Value) || Value < 1 || Value > 100) {
    Output.textContent = "Please enter a valid number between 1 and 100.";
    Input.focus();
    return;
  }

  if (Value === 18) {
    Output.textContent = "Congratulations! You guessed the number 🎇🎉🎉";
  } else {
    Output.textContent = "Random number was " + Random + " 😥";
  }
}

Button.addEventListener("click", () => {
  randomNumber();
});

