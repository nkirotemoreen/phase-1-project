const button = document.querySelector(".new-quote");
const speech = document.getElementById('audio');   
const copy = document.getElementById('copied');
const twitter = document.getElementById('tweet');
 const author = document.getElementById("author");
 const likebtn = document.getElementById('like')
 const text = document.getElementById("text");
 const join = document.getElementById('submit');
 synth = speechSynthesis;


const fetchQuotes = async()=>{
  try {
    button.classList.add("loading");
    button.innerText = "Loading Quote...";
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
    button.classList.remove("loading");
        button.innerText = "New Quote";
    

  } catch (error) {
    console.log(error.message)
    
  }

}
//adding audio
speech.addEventListener("click", ()=>{
  if(!button.classList.contains("loading")){
      let utterance = new SpeechSynthesisUtterance(`${text.innerText} by ${author.innerText}`);
      synth.speak(utterance);
      setInterval(()=>{
          !synth.speaking ? speech.classList.remove("active") : speech.classList.add("active");
      }, 10);
  }
});
//tweet-button
twitter.addEventListener("click", ()=>{
  let tweetUrl = `https://twitter.com/intent/tweet?url=${text.innerText}`;
  window.open(tweetUrl, "_blank");
});
//copy button
copy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(text.innerText);
  alert("successfully copied to clipboard");

});
//like buttons
likebtn.classList.toggle("fa-thumbs-down");
//submit form
      

fetchQuotes()




