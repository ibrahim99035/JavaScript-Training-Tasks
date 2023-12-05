async function fetchQuote(){
    try{
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return `${data.content} - (${data.author})`;
    } catch(error){
        console.error('Error fetching quote:', error);
        return 'Failed to fetch a quote at the moment.';
    }
}

async function generateRandomQuote() {
    const quote = await fetchQuote();
    const copyButton = document.getElementById('copyButton');
    document.getElementById('quote-text').textContent = quote;
    copyButton.innerText = 'Copy'
    copyButton.style.display = 'block';
}

function copyToClipboard() {
    // Get the text content to copy
    const copyText = document.getElementById('quote-text');
    const copyButton = document.getElementById('copyButton');

    // Create a range and select the text
    const range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand('copy');

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Alert or notify the user (optional)
    copyButton.innerText = 'Copied'
}

function shareOnTwitter() {
    var currentQuote = document.getElementById("quote-text").textContent;
    var twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(currentQuote);
    window.open(twitterURL, "_blank");
}

function shareOnFacebook() {
    var currentQuote = document.getElementById("quote-text").textContent;
    var facebookURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(currentQuote);
    window.open(facebookURL, "_blank");
}