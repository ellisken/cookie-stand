'use strict';

/*********************************************************
 *                     Define functions
 *********************************************************/
// Generates a random whole number of customers
// within the range of [minCust, maxCust]
// rounding down
function customersPerHour(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
}


// Calculates projected sales =
// average cookies per customer * # of customers
// rounding down
function salesPerHour(){
  return Math.floor(this.avgCookiesPerCust * this.hourlyCustomers());
}



/*********************************************************
 *               Define store object literals
 *********************************************************/
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  hourlyCustomers: customersPerHour,
  hourlySales: salesPerHour,
  storeInfo: [this.minCust, this.maxCust, this.avgCookiesPerCust, this.hourlyCustomers, this.hourlySales]
};

var seatac = {
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  hourlyCustomers: customersPerHour,
  hourlySales: salesPerHour,
  storeInfo: [this.minCust, this.maxCust, this.avgCookiesPerCust, this.hourlyCustomers, this.hourlySales]
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  hourlyCustomers: customersPerHour,
  hourlySales: salesPerHour,
  storeInfo: [this.minCust, this.maxCust, this.avgCookiesPerCust, this.hourlyCustomers, this.hourlySales]
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  hourlyCustomers: customersPerHour,
  hourlySales: salesPerHour,
  storeInfo: [this.minCust, this.maxCust, this.avgCookiesPerCust, this.hourlyCustomers, this.hourlySales]
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  hourlyCustomers: customersPerHour,
  hourlySales: salesPerHour,
  storeInfo: [this.minCust, this.maxCust, this.avgCookiesPerCust, this.hourlyCustomers, this.hourlySales]
};