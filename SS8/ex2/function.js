//2.1
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");


btn1.addEventListener('click', function (e) {
  console.log(e.target);
});

btn2.addEventListener('click', function (e) {
  console.log(e.target);
});

//=>e.target là phát hiện ra sự kiện thông qua đối tượng e khi klick vào button

//2.2
document.getElementById("keydown").addEventListener('keydown', function(e){
  console.log(e.key);
})
