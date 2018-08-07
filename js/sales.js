'use strict';

/*********************************************************
 *                     Define functions
 *********************************************************/
// Store constructor
function Store(name, maxCustomers, minCustomers, avgCookiesPerCustomer){
  this.name = name;
  this.maxCust = maxCustomers;
  this.minCust = minCustomers;
  this.avgCookiesPerCust = avgCookiesPerCustomer;
}

//sum function used for .reduce()
function sum(a, b){
  return a + b;
}


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


//Adds a table with header to the page.
function addStoreTable(){
  //Create table
  var storeInfoDiv = document.getElementById('store-data');
  var storeTable = document.createElement('table');
  storeTable.setAttribute('id', 'store-table');

  //Create header
  var tableHeader = document.createElement('thead');
  var thRow = document.createElement('tr');
  tableHeader.appendChild(thRow);

  //Create a header row
  thRow.appendChild(document.createElement('th'));
  //Create a column name for each hour of the store's day
  for(var i=0; i < 15; i++){
    var hour = (i + 6) % 24; //Get actual hour
    //Set am/pm
    if(hour > 12){ 
      hour = (hour - 12) + 'pm';
    }
    else if(hour === 12){
      hour = hour + 'pm';
    }
    else{
      hour = hour + 'am';
    }
    var columnName = document.createElement('th');
    columnName.textContent = hour;
    thRow.appendChild(columnName);
  }
  //Add sales total column
  columnName = document.createElement('th');
  columnName.textContent = 'Sales Total';
  thRow.appendChild(columnName);
  
  storeTable.appendChild(tableHeader);
  //Create table body
  var body = document.createElement('tbody');
  storeTable.appendChild(body);
  body.setAttribute('id', 'storeTableBody');
  storeInfoDiv.appendChild(storeTable);
  return storeTable;
}


//Adds a store's data to a table as a row
function renderStoreData(){
  //Create row and add to table body
  var storeRow = document.createElement('tr');
  var tableBody = document.getElementById('storeTableBody');
  tableBody.appendChild(storeRow);

  //Add the store's name
  var storeName = document.createElement('td');
  storeName.textContent = this.name;
  storeRow.appendChild(storeName);

  var total = 0; //For tracking total sales for a store

  //For each attribute, create a cell
  var storeSalesData = this.getHourlySales();
  //console.log(storeSalesData);
  for(var i=0; i < storeSalesData.length; i++){
    var salesDataCell = document.createElement('td');
    salesDataCell.textContent = storeSalesData[i];
    salesDataCell.className = i + this.name;
    storeRow.appendChild(salesDataCell);
    total += storeSalesData[i];
  }
  salesDataCell = document.createElement('td');
  salesDataCell.textContent = total;
  storeRow.appendChild(salesDataCell);
  tableBody.appendChild(storeRow);
}


// Adds a footer with sales totals for each hour to the table
function addHourlyTotalsFooter(){
  var table = document.getElementById('store-table');

  //Create a table footer, append to table
  var footer = document.createElement('tfoot');
  table.appendChild(footer);

  //Create a table row, append to footer
  var footerRow = document.createElement('tr');
  footer.appendChild(footerRow);

  //Add a dummy cell for the first column
  footerRow.appendChild(document.createElement('td'));

  //For each hour, calculate total
 

  //Create a table cell with total and append to footer

}


// Add methods to Store prototype
Store.prototype.getHourlyCustomers = customersPerHour;
Store.prototype.getHourlySales = getHourlySales;
Store.prototype.createStoreRow = renderStoreData;



/*********************************************************
 *                    Start Page Action
 *********************************************************/
var storeData = [['First and Pike', 23, 65, 6.3], ['Seatac', 3, 24, 1.2], 
  ['Seattle Center', 11, 38, 3.7], ['Capitol Hill', 20, 38, 2.3], ['Alki', 2, 16, 4.6]];

//Create stores
var firstAndPike, seatac, seattleCenter, capitolHill, alki;
var stores = [firstAndPike, seatac, seattleCenter, capitolHill, alki];

for(var i=0; i < stores.length; i++){
  stores[i] = new Store(storeData[i][0], storeData[i][1], storeData[i][2], storeData[i][3]);
}

//Create table
addStoreTable();

//Add store data to table
for(i=0; i < stores.length; i++){
  stores[i].createStoreRow();
}


