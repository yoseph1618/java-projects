let timers = [];
let activeTimer = null;

class Timer {
    constructor(name) {
        this.name = name;
        this.time = 0;
        this.intervalId = null;
        this.element = this.createTimerElement();
    }

    // Create timer UI element
    createTimerElement() {
        const timerDiv = document.createElement('div');
        timerDiv.classList.add('timer');

        const nameElement = document.createElement('div');
        nameElement.classList.add('timer-name');
        nameElement.textContent = this.name;
        timerDiv.appendChild(nameElement);

        const timeElement = document.createElement('div');
        timeElement.classList.add('timer-time');
        timeElement.textContent = this.formatTime(this.time);
        timerDiv.appendChild(timeElement);

        const button = document.createElement('button');
        button.textContent = 'Start';
        button.onclick = () => this.toggleTimer(button);
        timerDiv.appendChild(button);

        document.getElementById('timer-container').appendChild(timerDiv);
        return { timerDiv, timeElement, button };
    }

    // Start the timer
    start() {
        if (activeTimer && activeTimer !== this) {
            activeTimer.stop();
        }
        activeTimer = this;
        this.intervalId = setInterval(() => {
            this.time++;
            this.element.timeElement.textContent = this.formatTime(this.time);
        }, 1000);
    }

    // Stop the timer
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    // Toggle the timer between start and stop
    toggleTimer(button) {
        if (this.intervalId) {
            this.stop();
            button.textContent = 'Start';
        } else {
            this.start();
            button.textContent = 'Pause';
        }
    }

    // Format the time in HH:MM:SS
    formatTime(seconds) {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hrs}:${mins}:${secs}`;
    }
}

// Add a new timer
function addTimer() {
    const name = document.getElementById('timer-name-input').value.trim();
    if (name === '') {
        alert('Please enter a name.');
        return;
    }

    const timer = new Timer(name);
    timers.push(timer);
    document.getElementById('timer-name-input').value = ''; // Clear input field
}
