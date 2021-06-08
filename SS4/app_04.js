//Bai1:
alert('Hi there, this is dev dictionary');
let dictionary = {
    keyWord: ["debug", "done", "defect", "pm", "ui/ux", ],
    explanation: ["The process of figuring out why your program has a certain error and how to fix it",
        "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
        "The formal word for ‘error’",
        "The short version  of Project Manager, the person in charge of the final result of a project",
        "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
    ]
}
while (true) {
    let input = prompt('Enter a keyword');
    // console.log(dictionary.keyWord[0]);
    // console.log(input);
    if (!input) { break; }
    let bool;
    for (let i = 0; i < dictionary.keyWord.length; i++) {
        if (input === dictionary.keyWord[i]) {
            bool = true;
            alert(input + "\n" + dictionary.explanation[i]);
            break;
        }
    }
    if (bool !== true) {
        dictionary.explanation.push(prompt(`We could not find your word: ${input}, leave your explanation`));
        dictionary.keyWord.push(input);
        alert('Done');
    }

}
//console.log(dictionary);

//Bai2:
//2.1: x cp gia tri la property
const productt = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
for (let x in productt) {
    console.log(x);
}

//2.2
for (let x in productt) {
    console.log(x + ": " + productt[x]);
}

//Bai3:
let products = [];
products[0] = {
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 428,
    color: 'White',
    category: 'Charger'
};
products[1] = {
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: 5487,
    color: 'Black',
    category: 'Phone'
}
products[2] = {
    name: 'IPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'Gray',
    category: 'Phone'
}
products[3] = {
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: 8490,
    color: 'Blue',
    category: 'Phone'
}

//3.1
for (let i = 0; i < products.length; i++) {
    console.log(`---------------------------------------\n`)
    console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
}

3.2
for (let i = 0; i < products.length; i++) {
    console.log(`#${i+1}. ${products[i].name}\n    Price: ${products[i].price}`);

}

let inputPosition = Number(prompt('Enter product position:') - 1);
for (let i = 0; i < products.length; i++) {
    for (let x in products[i]) {
        if (inputPosition === i) {
            console.log(`${x}: ${products[i][x]}`);
        }
    }
}

3.3
let inputCategory = String(prompt('Enter your category?'));
let upperCaseC = inputCategory.charAt(0).toUpperCase() + inputCategory.slice(1);
for (let i = 0; i < products.length; i++) {
    if (upperCaseC === products[i].category) {
        console.log(`-----------------------------------\n`);
        console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
    }

}

3.4
products[0].providers = 'Phukienzero Dientuccc'
products[1].providers = 'Tgdd Ddghn VhStore'
products[2].providers = 'Tgdd'
products[3].providers = 'Tgdd'

for (let i = 0; i < products.length; i++) {
    console.log(`---------------------------------------\n`)
    console.log(`#${i+1}. ${products[i].name}\n    Price: ${products[i].price}\n    Providers: ${products[i].providers}`);
}

3.5
let inputProvider = String(prompt('Enter provider'));
let upperCaseP = inputProvider.charAt(0).toUpperCase() + inputProvider.slice(1);

for (let i = 0; i < products.length; i++) {
    let arrP = products[i].providers.split(" ");
    console.log(`-----------------------------------\n`);
    for (let j = 0; j < arrP.length; j++) {
        for (let x in products[i]) {
            if (upperCaseP === arrP[j]) {
                console.log(`${x}: ${products[i][x]}`);
            }
        }
    }
}