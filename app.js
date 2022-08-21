let quote = document.querySelector(".quotes")
let btn = document.querySelector("#new-quote")
let bkr = document.querySelector(".main-container")


async function getQuote(){
   
    let response = await fetch("https://api.kanye.rest") 
    let data = await response.json()
    quote.innerText = data.quote
}


btn.addEventListener('click', () => {
    getQuote()
})