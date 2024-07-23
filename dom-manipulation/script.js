// Load existing quotes.
const quotes = JSON.parse(localStorage.getItem("quotes") || "[]");

function showRandomQuote(event) {
    // random index between 0 and "quotes" length
    const randomIdx = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIdx];

    // Show the quote if the event started by clicking
    // the "Show New Quote" button, and there is a quote
    if (event.target.id === "newQuote"
        && randomQuote ) {
        document.getElementById("quoteDisplay").innerHTML = `<p> ${randomQuote.text} </p>`;

        // Store this quote as the latest viewed quote
        // in session stroage
        sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote))
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

    // Empty inputs value
    document.getElementById("newQuoteText").value = ""
    document.getElementById("newQuoteCategory").value = "";

    // Update "quotes" in localStorage
    localStorage.setItem("quotes", JSON.stringify(quotes));
}

function handleExportToJson() {
    const quotes =
      JSON.parse(localStorage.getItem("quotes") || "[]")
      .map(quote => quote.text + " / ");

    if (!quotes.length) {
        alert("No quotes found! try adding some quotes.");
        return
    }

    const blob = new Blob(quotes, {type: "text/plain"})
    const url = URL.createObjectURL(blob, {type: "text/plain;charset=UTF-8"})

    let link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', "quotes.txt");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
}

function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      localStorage.setItem("quotes", JSON.stringify(quotes))
      alert('Quotes imported successfully!');
    };
    fileReader.readAsText(event.target.files[0]);
}

window.addEventListener("DOMContentLoaded", () => {
    const newQuoteBtn = document.getElementById("newQuote");
    const exportToJSONBtn = document.getElementById("exportToJSON");

    newQuoteBtn.addEventListener("click", showRandomQuote);
    exportToJSONBtn.addEventListener("click", handleExportToJson);
})
