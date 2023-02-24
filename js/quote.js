const Quote = () => {
  fetch("https://api.kanye.rest")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quote) => {
  console.log(quote);
  const displayQuoteShow = document.getElementById("quote");
  displayQuoteShow.innerHTML = `
    <h2>${quote.quote}</h2>
    `;
};

Quote();
