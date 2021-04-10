// https://www.w3schools.com/howto/howto_js_dropdown.asp
// search bar dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$(document).ready(function () {
  console.log("Ready!");
  makeRequest('GET', '/mensClothing', (response) => {
    for (var i = 0; i < response.length; i++) {
      $('.api-data')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<h3>' + response[i].price + '</h3>')
        .append('<p>' + response[i].description + '</p>')
    }
  });
  makeRequest('GET', 'https://fakestoreapi.com/carts/1', (response) => {
    console.log(JSON.stringify(response));
  })
});

function makeRequest(method, url, successFn) {
  $.ajax({
    method: method,
    url: url,
    success: successFn
  });
}


