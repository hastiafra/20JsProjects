let quoteText = document.getElementById("quote");

let authorText = document.getElementById("author");

let apiQuotes = [];

const randomQuote = () => {
  const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // if author is unknown
  if (newQuote.author) {
    authorText.textContent = newQuote.author;
  } else {
    authorText.textContent = "Unknown";
  }

  //if the quote is long

  if (newQuote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = newQuote.text;
};

// get quotes from API

const getQuotes = async () => {
  const api_url = "https://type.fit/api/quotes";

  try {
    const response = await fetch(api_url);
    apiQuotes = await response.json();
    randomQuote();
  } catch (error) {
    response.status(500).json({ status: "Error", msg: error.message });
  }
};

getQuotes();
