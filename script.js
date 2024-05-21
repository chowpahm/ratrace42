const startDate = new Date('2022-11-28T00:00:00');
const endDate = new Date('2025-11-28T00:00:00');
const totalDuration = endDate - startDate;

function updateCountdown() {
    const now = new Date();
    const timeElapsed = now - startDate;
    const timeLeft = endDate - now;

    // Calculate percentage
    const percentage = (timeElapsed / totalDuration) * 100;
    document.getElementById('percentage').innerText = `${percentage}%`; // Display percentage without rounding

    // Calculate time left
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown-text').innerText = `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds left`;

    // Show fireworks if countdown is complete
    if (timeLeft <= 0) {
        document.getElementById('fireworks').style.display = 'block';
        createFireworks();
    } else {
        document.getElementById('fireworks').style.display = 'none';
    }

    // Update every second
    setTimeout(updateCountdown, 1000);
}

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworks');
    fireworksContainer.innerHTML = '';

    for (let i = 0; i < 20; i++) {
        const hexagon = document.createElement('div');
        hexagon.className = 'hexagon';
        hexagon.style.top = `${Math.random() * 100}%`;
        hexagon.style.left = `${Math.random() * 100}%`;
        hexagon.style.animationDuration = `${Math.random() * 1 + 1}s`;
        fireworksContainer.appendChild(hexagon);
    }
}

// Initialize countdown
updateCountdown();
