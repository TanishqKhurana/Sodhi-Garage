function updateLoanAmount() {
    const carSelect = document.getElementById('car-select');
    const loanAmountInput = document.getElementById('loan-amount');
    const downPaymentInput = document.getElementById('down-payment-input');
    const selectedCarAmount = parseFloat(carSelect.value);
    const downPaymentPercentage = parseFloat(downPaymentInput.value);
    const loanAmount = selectedCarAmount - (selectedCarAmount * (downPaymentPercentage / 100));
    loanAmountInput.value = loanAmount.toFixed(2);
  }

  // Function to update down payment slider display
  function updateDownPayment() {
    const slider = document.getElementById('down-payment-slider');
    const input = document.getElementById('down-payment-input');
    const display = document.getElementById('down-payment-display');
    slider.value = input.value;
    display.textContent = input.value;
  }

  // Function to update interest rate slider display
  function updateInterestRate() {
    const slider = document.getElementById('interest-rate-slider');
    const input = document.getElementById('interest-rate-input');
    const display = document.getElementById('interest-rate-display');
    slider.value = input.value;
    display.textContent = input.value;
  }

  // Function to update loan tenure slider display
  function updateLoanTenure() {
    const slider = document.getElementById('loan-tenure-slider');
    const input = document.getElementById('loan-tenure-input');
    const display = document.getElementById('loan-tenure-display');
    slider.value = input.value;
    display.textContent = input.value;
  }
  
  // Function to calculate EMI
  function calculateEMI() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate-input').value);
    const loanTenure = parseFloat(document.getElementById('loan-tenure-input').value);

    // Calculate monthly interest rate
    const monthlyInterestRate = (interestRate / 100) / 12;

    // Calculate EMI using formula: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    // Display the result
    document.getElementById('emi-result').innerHTML = `EMI: $${emi.toFixed(2)} per month`;
  }

  // Initialize loan amount, down payment, interest rate, and loan tenure display
  updateLoanAmount();
  updateDownPayment();
  updateInterestRate();
  updateLoanTenure();

  function updateCarPrice() {
    const carSelect = document.getElementById('car-select');
    const carPriceInput = document.getElementById('car-price');
    const carPrice = parseFloat(carSelect.value);
    carPriceInput.value = `$${carPrice.toFixed(2)}`;
  }

  function calculateResaleValue() {
    const carPrice = parseFloat(document.getElementById('car-select').value);
    const condition = parseFloat(document.getElementById('condition').value);
    const kilometers = parseFloat(document.getElementById('kilometers').value);
    const year = parseFloat(document.getElementById('year').value);
    const owner = parseFloat(document.getElementById('owner').value);

    // Calculate depreciation based on condition, kilometers, and year
    let depreciation = condition * (1 - (kilometers / 100000)) * (1 - ((new Date().getFullYear() - year) / 10));
    depreciation = Math.max(depreciation, 0); // Ensure depreciation is not negative

    // Calculate resale value
    const resaleValue = carPrice * depreciation * owner;

    // Display the result
    document.getElementById('resale-value').innerHTML = `Resale Value: $${resaleValue.toFixed(2)}`;
  }