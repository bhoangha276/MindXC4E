let btn = document.getElementById("upper_btn");
let text = document.getElementById("text1");
let reSul = document.getElementById("result");
btn.addEventListener('click', function(){
    console.log("Upper it!!! just clicked");
    console.log(`User's name ${text.value}`);
    console.log(`User's name uppercase: ${text.value.toUpperCase()}`);
    reSul.innerHTML = text.value.toUpperCase();
})

text.addEventListener("keydown", function(e){
    console.log(e.target);
})