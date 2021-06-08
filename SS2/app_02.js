/*//Bai1.1
for (let i = 0; i < 7; i++) {
    console.log(i);
}

//Bai1.2
let n1 = prompt('Nhap n:');
for (let i = 0; i < n1; i++) {
    console.log(i);
}

//Bai1.3
let n2 = prompt('Nhap n:');
for (let i = 3; i < n2; i++) {
    console.log(i);
}

//Bai1.4
let n3 = prompt('Nhap n:');
let c = prompt('Nhap c:');
for (let i = c; i < n3; i++) {
    console.log(i);
}

//Bai1.5
let n4 = Number(prompt('Nhap n:'));
let c1 = Number(prompt('Nhap c:'));
let s = Number(prompt('Nhap s:'));
for (let i = c1; i < n4; i += s) {
    console.log(i);
}

//Bai2
let n5 = Number(prompt('Nhap so n:'));
let giaiThua = 1;
for (let i = 1; i <= n5; i++) {
    giaiThua *= i;
}
alert(`Giai thua cua ${n5} bang ${giaiThua}`);

//Bai3
let age = prompt('Bạn bao nhiêu tuổi?');
if (age >= 14) alert('Zô luôn thôi');
else alert('Bạn không đủ tuổi để tiếp tục!');

//Bai4
let number = prompt('Nhap x:');
if (number % 2 == 0) alert(`${number} la so chan`);
else alert(`${number} la so le`);
*/
//Bai5
//C1:
// let user = '';
// let pass = '';
// while (user !== 'mindx' || pass !== 'codethechange') {
//     user = prompt('Username:');
//     pass = prompt('Password:');
//     if (user !== 'mindx')
//         alert('Wrong username');
//     else if (pass !== 'codethechange')
//         alert('Wrong password');
//     else { alert('Success!'); }
// }
//C2:
let user = '';
let pass = '';
while (true) {
    user = prompt('Username:');
    pass = prompt('Password:');
    if (user !== 'mindx')
        alert('Wrong username');
    else if (pass !== 'codethechange')
        alert('Wrong password');
    else { alert('Success!'); break; }
}