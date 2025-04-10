const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = document.getElementById("guess").value;
    const message = document.getElementById("message");

    if (guess < randomNumber) {
        message.textContent = "Zu niedrig!";
        message.style.color = "#ff4d4d";
    } else if (guess > randomNumber) {
        message.textContent = "Zu hoch!";
        message.style.color = "#ff4d4d";
    } else {
        message.textContent = "Glückwunsch! Du hast die Zahl erraten!";
        message.style.color = "#4CAF50";
    }
}
