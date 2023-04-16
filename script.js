let start = document.querySelector('#start');
start.addEventListener('click', () => {
    startTimer();
})

let startTimer = () => {
    const timeHeading = document.querySelector('h1');
    let timeSecond = document.querySelector('#input').value;
    
    displayTime(timeSecond);
    
    const countDown = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond)
        if (timeSecond < 0 || timeSecond < 1) {
            endTime();
            clearInterval(countDown);
        }
    }, 1000);
    
    function displayTime(timeValue) {
        const min = Math.floor(timeValue / 60);
        const sec = Math.floor(timeValue % 60);
        timeHeading.textContent = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
    };
    
    let endTime = () => {
        timeHeading.innerText = 'TIME OUT';
    }
};
