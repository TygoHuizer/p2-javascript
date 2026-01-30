let timeLeft = 25 * 60; // 25 minuten in seconden
let totalTime = 25 * 60;
let timerInterval = null;
let isRunning = false;
let sessionCount = 0;
let isBreakMode = false;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
  document.getElementById('timerDisplay').textContent = formatTime(timeLeft);
  
  // Update progress bar
  const progress = (timeLeft / totalTime) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
}

function startTimer() {
  if (isRunning) return;
  
  isRunning = true;
  document.getElementById('message').textContent = '';
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft <= 0) {
      completeSession();
    }
  }, 1000);
}

function pauseTimer() {
  isRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  timeLeft = totalTime;
  updateDisplay();
  document.getElementById('message').textContent = '';
  document.body.className = isBreakMode ? 'break-mode' : '';
}

function completeSession() {
  pauseTimer();
  timeLeft = 0;
  updateDisplay();
  
  // Verander achtergrondkleur naar groen
  document.body.className = 'completed';
  
  if (!isBreakMode) {
    sessionCount++;
    document.getElementById('sessionCount').textContent = sessionCount;
    document.getElementById('message').textContent = '✅ Pomodoro sessie voltooid!';
  } else {
    document.getElementById('message').textContent = '☕ Pauze voltooid!';
  }
}

function setShortBreak() {
  pauseTimer();
  totalTime = 5 * 60; // 5 minuten
  timeLeft = totalTime;
  isBreakMode = true;
  updateDisplay();
  document.getElementById('message').textContent = '';
  document.body.className = 'break-mode';
  document.getElementById('progressBar').style.background = '#3498db';
}

function setLongBreak() {
  pauseTimer();
  totalTime = 15 * 60; // 15 minuten
  timeLeft = totalTime;
  isBreakMode = true;
  updateDisplay();
  document.getElementById('message').textContent = '';
  document.body.className = 'break-mode';
  document.getElementById('progressBar').style.background = '#3498db';
}

// Initialiseer display
updateDisplay();