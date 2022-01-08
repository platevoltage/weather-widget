const dateEl = document.getElementById('date');
// console.log(header);

var date = moment().format('dddd, MMMM Do YYYY');

dateEl.innerHTML = date;

