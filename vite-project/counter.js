// Fetch exchange rates and populate currency options
export function populateCurrencyOptions() {
  const currencySelects = document.querySelectorAll('select');
  fetch(`https://open.exchangerate-api.com/v6/latest`)
      .then(response => response.json())
      .then(data => {
          const currencies = Object.keys(data.rates);
          currencies.forEach(currency => {
              const option1 = document.createElement('option');
              const option2 = document.createElement('option');
              option1.value = currency;
              option1.textContent = currency;
              option2.value = currency;
              option2.textContent = currency;
              currencySelects[0].appendChild(option1);
              currencySelects[1].appendChild(option2);
          });
      })
      .catch(error => console.error('Error fetching exchange rates:', error));
}

// Convert currency when button is clicked
export function convertCurrency() {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  if (amount === '') {
      alert('Please enter an amount.');
      return;
  }

  fetch(`https://open.exchangerate-api.com/v6/latest`)
      .then(response => response.json())
      .then(data => {
          const rate = data.rates[toCurrency] / data.rates[fromCurrency];
          const convertedAmount = (amount * rate).toFixed(2);
          document.getElementById('result').textContent = 
              `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch(error => console.error('Error converting currency:', error));
}
