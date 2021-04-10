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
  makeRequest();
});

function makeRequest() {
  $.ajax({
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
    headers: {
      "Cookie": "__cfduid=d6790497a73979398425979e3d580f4d81618008586"
    },
    success: (data) => {
      console.log(data);
    }
  });
}


