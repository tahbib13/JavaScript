// Currency-Converter.js

const API_KEY = ""; // Collect Your actual API Key from exchangerate-api.com
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest`; //https://app.exchangerate-api.com/keys

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Assuming countryList is defined and accessible (e.g., from codes.js)
// Make sure codes.js is loaded before this script in your HTML.

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "BDT") {
            newOption.selected = true;
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateExchangeRate = async () => {
    let amountInput = document.querySelector(".amount input");
    let amtVal = parseFloat(amountInput.value);

    if (isNaN(amtVal) || amtVal < 1) {
        amtVal = 1;
        amountInput.value = "1";
    }

    const fromCurrencyCode = fromCurr.value;
    const toCurrencyCode = toCurr.value;

    const URL = `${BASE_URL}/${fromCurrencyCode}`;

    try {
        let response = await fetch(URL);

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to fetch exchange rate: HTTP status ${response.status} - ${errorDetails}`);
        }

        let data = await response.json();

        if (data.result === "error") {
            throw new Error(`API error: ${data["error-type"]}`);
        }

        let rate = data.conversion_rates[toCurrencyCode];

        if (typeof rate !== 'number' || isNaN(rate)) {
            throw new Error("Invalid exchange rate data received from API.");
        }

        let finalAmount = amtVal * rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

    } catch (error) {
        console.error("Error updating exchange rate:", error);
        msg.innerText = "Error: Could not retrieve exchange rate. Please try again.";
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    if (countryCode) {
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    } else {
        console.warn(`No country code found for currency: ${currCode}. Flag not updated.`);
    }
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

window.addEventListener("load", () => {
    updateExchangeRate();
    updateFlag(fromCurr);
    updateFlag(toCurr);
});