let startBtnEl = document.getElementById('startBtn');
let stopBtnEl = document.getElementById('stopBtn');
let inputEl = document.getElementById('countInp');
let statusEl = document.getElementById('status');

let timer = null;
    startBtnEl.addEventListener('click', function(){
    startBtnEl.setAttribute('disabled', true);
    stopBtnEl.removeAttribute('disabled');

    let startTime = +inputEl.value;
    statusEl.innerHTML = startTime; 
      

    timer = setInterval(function(){
        startTime--;
        statusEl.innerHTML = startTime;
        if(startTime < 0){
            clearInterval(timer);
            statusEl.innerHTML = "Time 's up";
            startBtnEl.removeAttribute('disabled');
            stopBtnEl.setAttribute('disabled', true);
        }
    }, 500)
})

stopBtnEl.addEventListener('click', function(){
    if(timer){
        clearInterval(timer);
    }
    startBtnEl.removeAttribute('disabled');
    stopBtnEl.setAttribute('disabled', true);
    statusEl.innerHTML = 0;
    inputEl.value = 20;
})