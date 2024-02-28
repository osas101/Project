// Set the target date 9 days from now
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 9);

// Update the countdown every second
const timer = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    // Check if the countdown is over
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "Countdown is over!";
        return;
    }

    // Calculate remaining time
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('countdown').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}
