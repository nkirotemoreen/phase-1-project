const button = document.querySelector(".new-quote");
const speech = document.getElementsByClassName('speech');   
const copy = document.getElementsByClassName('copy');
const twitter = document.getElementById('tweet');
 const author = document.getElementById("author")
 const text = document.getElementById("text")


const fetchQuotes = async()=>{
  try {
    let url ="https://type.fit/api/quotes";
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    
    //getting the random quote
    const index = Math.floor(Math.random() * data.length)
    const quote = data[index].text;//get single quote to display
    const author1 = data[index].author ?? "Anonymous"
    text.innerText = quote;
    author.innerText = author1;
    

  } catch (error) {
    console.log(error.message)
    
  }

}
twitter.addEventListener("click", ()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?url=${text.innerText}`;
  window.open(tweetUrl, "_blank");
});

fetchQuotes()




