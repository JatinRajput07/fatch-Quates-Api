// AOS.init();


 const getQuotes = async () => {
  const api = 'https://type.fit/api/quotes';
   try {
      const data = await fetch(api).then(data => data.json());

      const realData = Math.floor(Math.random() * data.length);

      const quotesData = data[realData];

      document.getElementById('quotes').innerText = quotesData.text;

      if(quotesData.author == null)
      {
        document.getElementById('author').innerText = "unKnown";
      }else{
        document.getElementById('author').innerText = quotesData.author;
      }

      const tweetNow = () =>{
        const tweet = `https://twitter.com/intent/tweet?text=${quotesData.text} ${quotesData.author}`;
        window.open(tweet);
      }
      document.getElementById('ribbon').addEventListener('click',tweetNow);

   } catch (error) {
     
   }
 }


//  setInterval(getQuotes,2000)
 document.getElementById('btn').addEventListener('click',getQuotes);

