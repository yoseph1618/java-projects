function rollDice() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Select the dice button and display the number rolled
    const diceButton = document.querySelector('.dice6');
    diceButton.textContent = randomNumber;

    // Log the rolled number to the console (optional)
    console.log(randomNumber);

    // Select the roll history list
    const historyList = document.getElementById('history-list');

    // Create a new list item and add the rolled number to it
    const listItem = document.createElement('li');
    listItem.textContent = `Rolled: ${randomNumber}`;
    
    // Append the list item to the history list
    historyList.appendChild(listItem);
}

// Add an event listener to the dice button to roll the dice on click
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.dice6').addEventListener('click', rollDice);
});