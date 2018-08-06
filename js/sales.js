'use strict';

/*First, create a separate JS object literal (no constructor functions... yet) for 
each shop location that does the following:

Stores the min/max hourly customers, and the average cookies per customer, 
in object properties

Uses a method of that object to generate a random number of customers per hour. 
Objects/Math/random

Calculate and store the simulated amounts of cookies purchased for each hour at 
each location using average cookies purchased and the random number of customers generated

Store the results for each location in a separate array... perhaps as a property 
of the object representing that location

Display the values of each array as unordered lists in the browser*/


/*********************************************************
 *                     Define functions
 *********************************************************/ 
// Generates a random whole number of customers
// within the range of [minCust, maxCust]
 function customersPerHour(){
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
}


// Calculates projected sales = 
// average cookies per customer * # of customers
 function salesPerHour(){
  return this.avgCookiesPerCust * this.customersPerHour();
}




/*********************************************************
 *               Define store object literals
 *********************************************************/ 
 var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  hourlyCustomers: customersPerHour,
  salesPerHour: salesPerHour
 }

 var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  hourlyCustomers: customersPerHour,
  salesPerHour: salesPerHour
 }

 var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7, 
  hourlyCustomers: customersPerHour,
  salesPerHour: salesPerHour
 }

 var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3
  hourlyCustomers: customersPerHour,
  salesPerHour: salesPerHour
 }

 var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6 
  hourlyCustomers: customersPerHour,
  salesPerHour: salesPerHour
 }