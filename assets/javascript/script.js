const dateEl = document.getElementById('date');
const forecastEl = document.getElementById('forecast');
const previousSearchEl = document.getElementById('previous-search');
const searchEl = document.getElementById('search');
// console.log(header);
var previousSearchArray = ["San Francisco, CA","Richmond, VA","Albuquerque, NM"];
var date = moment();

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
    previousSearchArray.unshift(search.value);
    newSave.innerHTML = search.value;
    previousSearchEl.insertBefore(newSave, previousSearchEl.firstChild);
    search.value = "";

  });
