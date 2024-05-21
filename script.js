const startDate = new Date('2022-11-28T00:00:00');
const endDate = new Date('2025-11-28T00:00:00');
const totalDuration = endDate - startDate;

function updateCountdown() {
    const now = new Date();
    const timeElapsed = now - startDate;
    const timeLeft = endDate - now;

    // Calculate percentage
    const percentage = (timeElapsed / totalDuration) * 100;
    document.getElementById('percentage').innerText = `${percentage.toFixed(2)}%`; // Limit to 2 decimal places

    // Calculate time left
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown-text').innerText = `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds left`;

    // Update every second
    setTimeout(updateCountdown, 1000);
}

// Initialize countdown
updateCountdown();
