const dateEl = document.getElementById('date');
const forecastEl = document.getElementById('forecast');
const previousSearchEl = document.getElementById('previous-search');
const searchEl = document.getElementById('search');
const cityEl = document.getElementById('city');
const weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=5264f5c6cb00caeab126066957171739"

var weatherData = new Object();
var date = moment();
var previousSearchArray = [];
if (localStorage.getItem("previousSearch")) {
    previousSearchArray = JSON.parse(localStorage.getItem("previousSearch"));
}
// var previousSearchArray = ["San Francisco", "Richmond, VA"]


// console.log(JSON.parse(localStorage.getItem("previousSearch")));
dateEl.innerHTML = date.format('dddd, MMMM Do YYYY');

forecastEl.children[1].innerHTML = date.add(2,'days').format('dddd');
forecastEl.children[2].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[3].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[4].innerHTML = date.add(1,'days').format('dddd');

updatePreviousSearch();

function updatePreviousSearch() {
    for (var i = 0; i < previousSearchArray.length; i++) {
        let newSave = document.createElement("button");
        newSave.innerHTML = previousSearchArray[i];
        previousSearchEl.appendChild(newSave);
    }
}

searchEl.addEventListener('submit', function(event) {

    let search = document.getElementById("user-search");
    let newSave = document.createElement("button");
    
    event.preventDefault();
    // console.log(search.value);
    if (search.value) {
        previousSearchArray.unshift(search.value);
        newSave.innerHTML = search.value;
        previousSearchEl.insertBefore(newSave, previousSearchEl.firstChild);
        
        getApi(weatherURL + search.value + apiKey);
        
        search.value = "";
        localStorage.setItem("previousSearch", JSON.stringify(previousSearchArray) );
        
        // console.log(weatherData);
    }
  });

  function getApi(requestUrl) {
    // fetch request gets a list of all the repos for the node.js organization
    //We set the request URL to a variable. This is the URL that the fetch() method will use to request data. The path we are making a request to here is /orgs/nodejs/repos, as shown in the following code:
    // var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  
    //We pass the requestUrl variable as an argument to the fetch() method, as shown in the following example:
    fetch(requestUrl)
      //We then convert the response into JSON and return the formatted response, as follows:
      .then(function (response) {
        // console.log("response", response)
        //The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object). 
        //This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method
        //JSON stands for JavaScript Object Notation. It is nothing more than the use of simple JavaScript objects to exchange data between the client and server. This makes the data easier to read and understand.
        //Takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON, which is a JavaScript value of datatype object, string, etc.
        //Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
        return response.json();
      })
      .then(function (data) {
        console.log("data",data)
        //Loop over the data to generate a table, each table row will have a link to the repo url

        cityEl.textContent = data.name;
        // for (var i = 0; i < data.length; i++) {
         
        //   var createTableRow = document.createElement('tr');
        //   var tableData = document.createElement('td');
        //   var link = document.createElement('a');
  
        //   console.log(data[i].html_url);
        //   link.textContent = data[i].html_url;
        //   link.href = data[i].html_url;
  
        //   tableData.appendChild(link);
        //   createTableRow.appendChild(tableData);
        //   tableBody.appendChild(createTableRow);
        // }
      });
  }
  
  

