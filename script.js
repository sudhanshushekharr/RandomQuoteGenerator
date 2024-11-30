document.addEventListener("DOMContentLoaded",()=>{
   const quote=document.getElementById("quote");
   const author=document.getElementById("author");
   const newquotebtn=document.getElementById("new-quote");

   async function fetchQuotes()
   {
    try {
        console.log("Fetching quote...");
        const response= await fetch("http://api.quotable.io/random");
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
         const data= await response.json();
        
    quote.textContent=`"${data.content}"`;
    author.textContent=`-${data.author}`;

    } catch (error) {
   console.log("Quote didnt load",error);
        
    }
}

fetchQuotes();

newquotebtn.addEventListener("click",fetchQuotes);


})