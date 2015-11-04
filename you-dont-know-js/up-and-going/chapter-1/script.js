/**
 * 1. Write a program to calculate the total price of your phone purchase. You
 *    will keep purchasing phones (hint: loop!) until you run out of money in
 *    your bank account. You'll also buy accessories for each phone as long as
 *    your purchase amount is below your mental spending threshold.
 * 2. After you've calculated your purchase amount, add in the tax, then print
 *    out the calculated purchase amount, properly formatted. Finally, check
 *    the amount against your bank account balance to see if you can afford it
 *    or not.
 * 3. You should set up some constants for the "tax rate," "phone price,"
 *    "accessory price," and "spending threshold," as well as a variable for
 *    your "bank account balance.""
 * 4. You should define functions for calculating the tax and for formatting
 *    the price with a "$" and rounding to two decimal places.
 * 5. Bonus Challenge: Try to incorporate input into this program, perhaps
 *    with the prompt(..) covered in "Input" earlier. You may prompt the user
 *    for their bank account balance, for example. Have fun and be creative!
 */


// CONSTANTS
const SPENDING_THRESHOLD = 1000;
const TAX_RATE           = 0.1;
const PHONE_PRICE        = 240;
const ACCESSORY_PRICE    = 80;

// VARS
var bankAccountBalance   = 800;
var accessoryTotal       = 0;
var grandTotal           = 0;


// Calculate tax
var calculateTax = function(p_amount) {
    var total = p_amount * TAX_RATE;
    return total;
}
//console.log(calculateTax(106));


// Format price
var formatPrice = function(p_amount) {
    var price = "TOTAL: $" + p_amount.toFixed(2);
    return price;
}
//console.log(formatPrice(99.9123));


// Check spending
var checkSpending = function() {
    if (grandTotal < bankAccountBalance) {
        for (var i = 0; i < 0; i++) {
            console.log("Keep spending!");
        };
    } else {
        console.log("Your money has run out.");
    }
}


// Input calculation
var myPhoneSpending = function(p_bank_balance, p_phone_amount, p_accessory_amount) {
    var bankAccountBalance  = p_bank_balance || bankAccountBalance;
    var phoneAmount         = p_phone_amount;
    var accessoryAmount     = p_accessory_amount;
};


// Initialise
checkSpending();
//myPhoneSpending();