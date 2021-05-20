
//
const loanForm = document.querySelector('#loan-form');
const results = document.querySelector('#results');
const loading = document.querySelector('#loading');



// Custom Function
myFunction();

function myFunction() {
    loanForm.addEventListener('submit', show);
}

// Function 1: Show
function show(e) {
    results.style.display = 'none';
    loading.style.display = 'block';

    setTimeout(calculateResult, 2000);
    e.preventDefault();
}

// Function 2: Calculate Result 
function calculateResult() {
    const principle = document.querySelector('#amount');
    const interest = document.querySelector('#interest');
    const years = document.querySelector('#years');

    const monthlyPayment = document.querySelector('#monthly-payment');
    const totalInterest = document.querySelector('#total-interest');
    const totalPayment = document.querySelector('#total-payment');

    const p = parseFloat(principle.value);      // p from principals
    const r = parseFloat(interest.value) / 100 / 12; // r from rate of interest of month
    const n = parseFloat(years.value) * 12; //n from number of months

    const x = Math.pow(1 + r, n);
    const monthly = (p * x * r) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalInterest.value = ((monthly * n) - p).toFixed(2);
        totalPayment.value = (monthly * n).toFixed(2);
        results.style.display = 'block';
        loading.style.display = 'none';
    } else {
        showError('Please Recheck Your Inputs');
    }
}
// Function 3: Show Error
function showError(error){
    results.style.display = 'none';
    loading.style.display = 'none';

    const errorDiv = document.createElement('div');
    errorDiv.classList ='alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    const card =document.querySelector('.card');
    const heading =document.querySelector('.heading');

    card.insertBefore(errorDiv, heading);
    setTimeout(clearError, 3000);
}
// Function 4: Clear Error
function clearError(){
    document.querySelector('.alert').remove();
}