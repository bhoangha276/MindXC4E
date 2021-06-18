const addBtnEl = document.getElementById('addBtn');
const resultDisplayEl = document.getElementById('resultDisplay');
const subBtn = document.getElementById('subBtn');

let curVal = 0;
addBtnEl.addEventListener('click', function(){
    console.log('click add');
    curVal++;
    resultDisplayEl.innerHTML = curVal;
})
subBtn.addEventListener('click', function(){
    console.log('click sub');
    curVal--;
    resultDisplayEl.innerHTML = curVal;
})