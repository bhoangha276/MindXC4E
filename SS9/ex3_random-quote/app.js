let quotes = [
    {
        content: 'A house divided against itself can not stand.',
        author:'Abraham Lincoln'
    },
    {
        content:'Well gegun is half done.',
        author:'Aristotle'
    },
    {
        content:'Love all, trust a few, do wrong to none.',
        author:'William Shakespeare'
    },
    {
        content:'Be kind where possible. It is always possible.',
        author:'Dalai Lama'
    }
]

let contentEl = document.getElementById('content');
let authorEl = document.getElementById('author');
let reloadBtnEl = document.getElementById('reloadBtn');

function randomQuote(){
    const rand = Math.floor(Math.random() * quotes.length);
    const randQuote = quotes[rand];

    contentEl.innerHTML = randQuote.content;
    authorEl.innerHTML = randQuote.author;
}
randomQuote();

reloadBtnEl.addEventListener('click', randomQuote);