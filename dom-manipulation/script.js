const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        category: "Motivational"
    },
    {
        text: "In three words I can sum up everything I've learned about life: it goes on.",
        category: "Life"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        category: "Success"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        category: "Inspirational"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        category: "Life"
    },
    {
        text: "Believe you can and you're halfway there.",
        category: "Motivational"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        category: "Inspirational"
    },
    {
        text: "Your time is limited, so don't waste it living someone else's life.",
        category: "Life"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        category: "Success"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        category: "Motivational"
    }
]

function showRandomQuote(event) {
    // random index between 0 and "quotes" length
    const randomIdx = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIdx].text;

    // Show the quote if the event started by clicking
    // the "Show New Quote" button.
    if (event.target.id === "newQuote") {
        document.getElementById("quoteDisplay").innerHTML = `<p> ${randomQuote} </p>`;
    }
}

function addQuote() {
    const newQuoteText =
      document.getElementById("newQuoteText").value;
    const newQuoteCategory =
      document.getElementById("newQuoteCategory").value;

    quotes.push({
        text: newQuoteText,
        category: newQuoteCategory
    })

    console.log(quotes[quotes.length-1])
}

window.addEventListener("DOMContentLoaded", () => {
    const newQuoteBtn = document.getElementById("newQuote");
    newQuoteBtn.addEventListener("click", showRandomQuote)
})
