
async function getQuote(){

    let response = await fetch("https://api.kanye.rest")
    let data = await response.json();
    // console.log(data.quote)
}
getQuote();