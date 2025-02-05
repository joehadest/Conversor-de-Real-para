const form = document.getElementById('form');
const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

const conversionRates = {
    usd: 5.59,
    eur: 6.11,
    gbp: 7.45,
    jpy: 0.051,
    aud: 4.12,
    cad: 4.45,
    chf: 6.01,
    cny: 0.87,
    sek: 0.61,
    nzd: 3.98,
    // Adicione mais taxas de conversão conforme necessário
};

form.addEventListener('submit', handleSubmit);
inputValue.addEventListener('input', formatInputValue);

function handleSubmit(e) {
    e.preventDefault();

    if (!inputValue.value || parseFloat(inputValue.value.replace(/\./g, '')) < 0) {
        alert('Informe um valor correto!');
        return;
    } else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        return;
    }

    converter();
}

function converter() {
    const selectedCurrencyValue = selectedCurrency.value;
    const inputValueNumber = parseFloat(inputValue.value.replace(/\./g, ''));

    if (conversionRates[selectedCurrencyValue]) {
        valueConverted = inputValueNumber / conversionRates[selectedCurrencyValue];
        result.innerHTML = valueFormatter(valueConverted, 'pt-BR', selectedCurrencyValue.toUpperCase());
        animateResult();
    } else {
        result.innerHTML = 'Selecione uma moeda válida.';
    }
}

function valueFormatter(value, locale, currency) {
    return value.toLocaleString(locale, { style: 'currency', currency: currency });
}

function animateResult() {
    // Função de animação do resultado
}

function formatInputValue() {
    let value = inputValue.value.replace(/\D/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    inputValue.value = value;
}