let apiQuotes = [];

const randomQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random()) * apiQuotes.length];
  console.log(quote)
};
// get quotes from API

const getQuotes = async () => {
  const api_url = "https://type.fit/api/quotes";

  try {
    const response = await fetch(api_url);
    apiQuotes = await response.json();
    randomQuote();
  } catch (error) {}
};

getQuotes();
