// get user values
// controller
function getValues() {
    let loanamount = document.getElementById("inputLoanAmount").value;
    let payments = document.getElementById("inputPayments").value;
    let rate = document.getElementById("inputRate").value;

    //convert to integer
    loanamount = parseInt(loanamount);
    payments = parseInt(payments);
    rate = parseInt(rate);

    // validate that it is a integer
    if (Number.isInteger(loanamount) && Number.isInteger(payments) && Number.isInteger(rate)) {
        // call calculate payment
        let calc = calculatePayments(loanamount, payments, rate);
    
        //call view
        displayloan(calc, loanamount, payments);
    }
}


// calculate payments
// logic
function calculatePayments(la, p, r) {
    // setup calc obj for returning values
    // setup arrays for each of the different values to collect
    let calc = {};
    let currentBalance = [];
    let interestPayment = [];
    let principalPayment = [];
    let remainingBalance = [];

    // calculate the monthly payment to start
    let totalMonthlyPayments = la * (r/1200) / (1 - (1 + r/1200)**-p);

    //push the starting loan amount to current balance
    currentBalance.push(la);











} 