// ! Definition

// ?Promise is an object which represents the eventual completion of an asynchronous operation
// Solves the major issue of inversion of control
// Promise object have two properties only -
// *Promise State 
// *Promise Result which will eventually be filled by data 


// ! Consuming Promises

// ? For Example fetch returns promises that promise is needed to be handled
// JS gives us some methods for consumption of promise 
// * .then()--  It creates new promise which can then be handled
// * .catch()-- It is used to handle errors gracefully (so that the real error is shown instead of red error is flashed in  the console which is not visible to the user)
// ? Promises has only three states and these states are immutable. Promises can be resolved only once. 
// * Pending 
// * fullfiled 
// * rejected 



// const cart = ["pants", " socks", "handkercheif", "shirts", "watches"];

//TODO here we have passed our function Proceed to Payment to createOrder Api. Now it is the responsiblity of createOrder Api to call proceedToPayment at will, this is inversion of control

// createOrder(cart, function (){
// proceedToPayment(orderID);   //? orderID coming from the createOrderAPI
// }); 

//TODO instead of passing the function as an parameter we instead wants the api to return a promise and then we can attach pur functioon to that promise (if fulfilled)


// const promise= createOrder(cart);
// ? Promise is nothing but an empty object 
// ? Javascript will go on executing the following code 
// ? Promise state 
// ? promise data value -- it will hold whatever createOrder api sends us 
// ? Api sends data with value undefined for the moment. It will get filled at a later stage when later code with data is executed. After this data (orderID) get fulled we will attach a callback using .then()

// promise.then( function (){
// proceedToPayment(orderID); 
// });

//TODO Actual code - Plz reffer the console log debugger 
const OMDB_API = "http://www.omdbapi.com/?i=tt3896198&apikey=427bab65"

const getMovie = fetch(OMDB_API);
console.log(getMovie);



//! Promise Chaining
// TODO Callback method
createOrder(cart, function (orderID) {
    proceedToPayment(orderID, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});

// TODO Promise chaining method
createOrder(cart).then(function (orderID){return proceedToPayment(orderID)})
.then(function(paymentInfo){return showOrderSummary(paymentInfo) })
.then(function (){ updateWalletBalance() })

 
// ________________________________________________________
//  ! Creating Promises
// __________________________________________________________

const cart = ["pants", " socks", "handkercheif", "shirts", "watches"];
const promise = createOrder(cart);

function createOrder(cart){
    // ? Promise() is a promise constructor which takes function that takes resolve and reject as parameters.
    // ? resolve and reject is not something that we made but given by the javascript as design of promise API

    const pr= new Promise(function (resolve, reject){
        // TODO write the logic for the function for whatever we need to do with the createOrder function
        // createOrder
        // validateCart
        // orderId that will be returned as a success 
        //todo logic for validating cart 
        if (!validCart(cart)) {
            const err = new Error("Cart is not validated")
            reject(err);
        }
        //todo logic for creating Order
        const OrderId ="123455";
        // if we get the order id we will just resolve the promise and make it a success
        if (orderId){
            resolve(orderId);
        }



    });
    return pr;
}