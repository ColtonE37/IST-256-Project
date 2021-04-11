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
      $('.api-data-men')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<h3>' + '$' + response[i].price + '</h3>')
        .append('<p>' + response[i].description + '</p>')
    }
    //console.log(JSON.stringify(response))
  });
  makeRequest('GET', '/womensClothing', (response) => {
    for (var i = 0; i < response.length; i++) {
      $('.api-data-women')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<h3>' + '$' + response[i].price + '</h3>')
        .append('<p>' + response[i].description + '</p>')
    }
    //console.log(JSON.stringify(response))
  });
  makeRequest('GET', '/electronicsStuff', (response) => {
    for (var i = 0; i < response.length; i++) {
      $('.api-data-electronics')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<h3>' + '$' + response[i].price + '</h3>')
        .append('<p>' + response[i].description + '</p>')
    }
    //console.log(JSON.stringify(response))
  });

  function makeRequest(method, url, successFn) {
    $.ajax({
      method: method,
      url: url,
      success: successFn
    });
  }
})

//For collapsible Objective style guide credit to w3schools 
// https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
