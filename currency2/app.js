document.addEventListener("DOMContentLoaded", () => {
  const convertButton = document.getElementById("convertButton");
  const resultElement = document.getElementById("result");
  const usdAmountElement = document.getElementById("usdAmount");

  convertButton.addEventListener("click", async function () {
    const usdAmount = parseFloat(usdAmountElement.value);

    try {
      const response = await fetch(
        "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json"
      );
      const data = await response.json();
      const usdToInrRate = data.usd.inr;

      const inrAmount = usdAmount * usdToInrRate;
      resultElement.textContent = `${usdAmount} USD is approximately ${inrAmount.toFixed(
        2
      )} INR`;
    } catch (error) {}
  });
});
