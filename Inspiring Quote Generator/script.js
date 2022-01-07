let quoteText = document.getElementById("quote");
let tweetBtn = document.getElementById("tweet");
let newQuote = document.getElementById("newQuote");
let authorText = document.getElementById("author");
const loader = document.getElementById("loader");
const quoteContainer = document.getElementById("quoteContainer");

let apiQuotes = [];

const showLoading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeLoading = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

const randomQuote = () => {
  showLoading();
  const newQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // if author is unknown
  if (newQuote.author !== null) {
    authorText.textContent = `"${newQuote.author}"`;
  } else {
    authorText.textContent = "Unknown";
  }

  //if the quote is too long

  if (newQuote.text.length > 100) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = newQuote.text;
  removeLoading();
};

// get quotes from API

const getQuotes = async () => {
  showLoading();

  const api_url = "https://type.fit/api/quotes";

  try {
    const response = await fetch(api_url);
    apiQuotes = await response.json();
    randomQuote();
  } catch (error) {
    response.status(500).json({ status: "Error", msg: error.message });
  }
};

//tweet the quote

const tweetQuote = () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(tweetUrl, "_blank");
};

newQuote.addEventListener("click", randomQuote);
tweetBtn.addEventListener("click", tweetQuote);

getQuotes();
