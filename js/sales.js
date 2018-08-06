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
function getHourlySales(){
  //For each hour in the workday (6am - 8pm)
  //generate a projected sales per hour and store 
  //in the salesPerHour array
  var salesArray = [];
  for(var i = 0; i < 15; i++){
    salesArray.push(Math.floor(this.avgCookiesPerCust * this.getHourlyCustomers()));
  }
  return salesArray;
}


//Adds a child of the given elementType with the
//specified textContent to parent
function addChildWithText(elementType, textContent, parent){
  var newElement = document.createElement(elementType);
  newElement.textContent = textContent;
  parent.appendChild(newElement);
}


// Creates an unordered list with a store's information
// in the DOM
function addStoreInfo(){
  //Grab the div called "store-lists"
  var storeInfoDiv = document.getElementById('store-lists');

  //Create a new header and add to page
  addChildWithText('h3', this.name, storeInfoDiv);

  //Create a new unordered list
  var storeList = document.createElement('ul');
  //Append unordered list to the parent div
  storeInfoDiv.appendChild(storeList);
  //Create array with store's sales data
  var storeData = this.getSalesData();
  console.log(storeData);
  //For each number in the sales data list
  var total = 0;
  for(var i = 0; i < storeData.length; i++){
    //Add to running total
    total += storeData[i];
    var hour = (i + 6) % 12; //Get actual hour
    //Set hour to '1' if result from above is zero
    if(hour === 0){
      hour++;
    }
    //Set am/pm
    if(i < 12){ 
      hour = hour + 'am';
    }
    else{
      hour = hour + 'pm';
    }
    //Create list element and append to unordered list
    addChildWithText('li', `${hour}: ${storeData[i]} cookies`, storeList);
  }
  //Create "total cookies" list item and append
  addChildWithText('li', `Total: ${total} cookies`, storeList);
}



/*********************************************************
 *               Define store object literals
 *********************************************************/
var firstAndPike = {
  name: 'First and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  getHourlyCustomers: customersPerHour,
  getSalesData: getHourlySales,
  addStoreInfo: addStoreInfo
};

var seatac = {
  name: 'Seatac',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCust: 1.2,
  getHourlyCustomers: customersPerHour,
  getSalesData: getHourlySales,
  addStoreInfo: addStoreInfo
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCust: 3.7,
  getHourlyCustomers: customersPerHour,
  getSalesData: getHourlySales,
  addStoreInfo: addStoreInfo
};

var capitolHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCust: 2.3,
  getHourlyCustomers: customersPerHour,
  getSalesData: getHourlySales,
  addStoreInfo: addStoreInfo
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCust: 4.6,
  getHourlyCustomers: customersPerHour,
  getSalesData: getHourlySales,
  addStoreInfo: addStoreInfo
};

var storeList = [firstAndPike, seatac, seattleCenter, capitolHill, alki];

/*********************************************************
 *                    Start Page Action
 *********************************************************/
for(var i=0; i < storeList.length; i++){
  storeList[i].addStoreInfo();
}