//Bai1:
let arrItems = ['Jeans', 'T-shirt', 'Socks'];
while (true) {
    let inputCRUD = prompt('Hi there, welcome to shop admin panel, what do you want(C, R, U, D)?');
    if (!inputCRUD) { break; }
    inputCRUD.toLowerCase();
    if (inputCRUD === 'r') {

        console.log('The current items are:');
        for (let i = 0; i < arrItems.length; i++) {
            console.log(`${i+1}. ${arrItems[i]}\n`);
        }

    } else if (inputCRUD === 'c') {
        arrItems.push(prompt('Enter the name of the new item'));
        alert('Done');

    } else if (inputCRUD === 'u') {
        let updateItem = Number(prompt('Enter the position you want update'));
        let newNameItem = prompt('Enter the new name');
        arrItems[updateItem - 1] = newNameItem;
        alert('Done');
    } else if (inputCRUD === 'd') {
        let delItem = Number(prompt('Enter the position you want delete'));
        arrItems.splice(delItem - 1, 1);
    } else { alert('This command is not supported!'); break; }
}

//Bai2:
let array = [3, 4, 6, -9, 10, -88, 2];
//2.1
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(`Tong mang = ${sum}`);
//2.2
console.log('So duong: ');
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        console.log(array[i]);
    }
}
//2.3
let number = Number(prompt('Enter a number'));
let i, bool;
for (i = 0; i < array.length; i++) {
    if (number == Number(array[i])) {
        bool = true;
        break;
    }
}
if (bool == true)
    alert(`${number} is FOUND in my array at index ${i}`);
else alert(`${number} is NOT found in my array`);

//Bai3:
let string = prompt('Nhap mot day so:');
let strToArr = string.split(" ");
console.log(strToArr);

//Bai4:
let squenceNumber = prompt('Enter a squence of numbers, separated by ","');
let arr = squenceNumber.split(",");
console.log(arr);
let min = Number(arr[0])
for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) < min)
        min = Number(arr[i]);
}
alert(`The smallest number is ${min}`);

//Bai5:
//C1:
let squenceName = prompt('Nhap danh sach');
let arrName = squenceName.split(",");
console.log(arrName);
let upperName = [];
for (let i = 0; i < arrName.length; i++) {
    upperName[i] = arrName[i].toUpperCase();
}
console.log(upperName);
alert(upperName);

//C2:
let squence_Name = prompt('Nhap danh sach');
let arr_Name = squence_Name.split(",");
console.log(arr_Name);
let upper_Name = arr_Name.map(name => name.toUpperCase());
alert(upper_Name);

//Bai6:
//C1:
let squenceNumbers = prompt('Enter a squence of numbers, separated by ","');
let arrNumbers = squenceNumbers.split(",");
console.log(arrNumbers);
let arrOddNumbers = [];
for (let i = 0; i < arrNumbers.length; i++) {
    if (Number(arrNumbers[i]) % 2 !== 0) {
        arrOddNumbers.push(arrNumbers[i]);
    }
}
console.log(arrOddNumbers);
alert(arrOddNumbers);


//C2:
let squence_Numbers = prompt('Enter a squence of numbers, separated by ","');
let arr_Numbers = squence_Numbers.split(",");
console.log(arr_Numbers);
let result = arr_Numbers.filter(arrNumbers => arrNumbers % 2 !== 0);
alert(result);