async function convert() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const apiKey = '88dedc07c8b1f8fed4d2eb7f';
    const apiUrl = `https://open.er-api.com/v6/latest/${fromCurrency}?apikey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        if (data.error) {
            throw new Error(data.error);
        }

        const exchangeRate = data.rates[toCurrency];
        const result = (amount * exchangeRate).toFixed(2);

        document.getElementById('currencyResult').innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        document.getElementById('result').innerText = 'Error fetching exchange rates. Please try again later.';
    }
}