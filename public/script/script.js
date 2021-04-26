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
  doAjaxRequest();
  console.log("Ready!");
  makeRequest('GET', '/currentCart', (response) => {
    console.log("Current Cart: ", response); //response is cart object
  }, (error) => {
    if (error.status === 404) {
      console.log("No cart found. Creating new cart.");
      makeRequest('POST', '/postCart')
    } else {
      console.error("Error loading cart.", error);
    }
  });
  // https://stackoverflow.com/questions/16026942/how-do-i-chain-three-asynchronous-calls-using-jquery-promises
  makeRequest('GET', '/mensClothing', (response) => {
    for (var i = 0; i < response.length; i++) {
      $('.api-data-men')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<p>' + response[i].description + '</p>')
        .append('<span>' + '$' + response[i].price + '</span> &nbsp')
        .append('<button id="mens-btn-' + i + '">Add Item</button>')
    }
  }).then((response) => {
    for (var i = 0; i < response.length; i++) {
      $('#mens-btn-' + i).click(response[i], function (event) {
        makeRequest('PUT', '/updateCartProducts', (updatedCart) => {
          console.log("Cart updated successfully! ", updatedCart);
        }, error => {
          console.error("Error updating cart occurred.", error);
        }, event.data)
      })
    }
  });
  makeRequest('GET', '/womensClothing', (response) => {
    for (var i = 0; i < response.length; i++) {
      $('.api-data-women')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<p>' + response[i].description + '</p>')
        .append('<span>' + '$' + response[i].price + '</span> &nbsp')
        .append('<button id="womens-btn-' + i + '">Add Item</button>')
    }
  }).then((response) => {
    for (var i = 0; i < response.length; i++) {
      $('#womens-btn-' + i).click(response[i], function (event) {
        makeRequest('PUT', '/updateCartProducts', (updatedCart) => {
          console.log("Cart updated successfully! ", updatedCart);
        }, error => {
          console.error("Error updating cart occurred.", error);
        }, event.data)
      })
    }
  });
  makeRequest('GET', '/electronicsStuff', (response) => {
    for (var i = 0; i < response.length; i++) {
      $('.api-data-electronics')
        .append('<img src="' + response[i].image + '" class="responsive1"/>')
        .append('<h3>' + response[i].title + '</h3>')
        .append('<p>' + response[i].description + '</p>')
        .append('<span>' + '$' + response[i].price + '</span> &nbsp')
        .append('<button id="electronic-btn-' + i + '">Add Item</button>')
    }
  }).then((response) => {
    for (var i = 0; i < response.length; i++) {
      $('#electronic-btn-' + i).click(response[i], function (event) {
        makeRequest('PUT', '/updateCartProducts', (updatedCart) => {
          console.log("Cart updated successfully! ", updatedCart);
        }, error => {
          console.error("Error updating cart occurred.", error);
        }, event.data)
      })
    }
  });
  // makeRequest('GET', '/getCartProducts', (response) => {
  //   for (var i = 0; i < response.length; i++) {
  //     $('.api-data-cart')
  //       .append('<h3>' + response[i].title + '</h3>')
  //       .append('<span>' + '$' + response[i].price + '</span> &nbsp')
  //   }
  // }).then((response) => {
  //     makeRequest('PUT', '/getCartProducts', (cartProducts) => {
  //       console.log("Get products called.", cartProducts);
  //     }, error => {
  //       console.error("Error occurred.", error);
  //     })
  // });

  function doAjaxRequest() {
    $.ajax({
        type: "GET",
        url: "/getCartProducts"
    }).done(function (response) {
        console.log(response);
        displayData(response);
    });
}

  function makeRequest(method, url, successFn, errorFn, data) {
    return $.ajax({
      method: method,
      url: url,
      success: successFn,
      error: errorFn,
      data: data
    });
  }
})

//For collapsible Objective style guide credit to w3schools 
// https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// for contact form credit to codebrainer https://www.codebrainer.com/blog/contact-form-in-javascript
//method which initializes my variables
class User {
  constructor(firstName, lastName, discription, state, email, streetAddress, zip, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.discription = discription;
    this.state = state;
    this.email = email;
    this.streetAdress = streetAddress;
    this.zipCode = zip;
    this.question = question;
  }
}

function sendContact() {
  //this alert is sent after the send contact button is pushed 
  alert(firstName.value + " " + "thanks for reaching out!");

  //attempted to actually send this info to my email couldnt figure it out
  location = "mailto:thomas.j.beck23@gmail.com";
}

//checkout page
function placeOrder() {
  alert(firstName.value + " " + "Your order has been placed! Thanks for shopping with us!")
}

function deleteCart() {
  alert("The cart has been deleted!");
  window.location.reload();
}

//Cart page products
function displayData(data) {
  let content = $("#content");
  content.append($(`<h3>${data.title}</h3>`));
  content.append($(`<h3>${data.price}</h3>`));
}
