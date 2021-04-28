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
  //https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete
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
          alert("Item was added to cart!")
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
          alert("Item was added to cart!")
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
          alert("Item was added to cart!")
        }, error => {
          console.error("Error updating cart occurred.", error);
        }, event.data)
      })
    }
  });
  makeRequest('GET', '/currentCart', (response) => {
    for (var i = 0; i < response.products.length; i++) {
      $('.api-data-cart')
        .append('<h3>' + response.products[i].title + '</h3>')
        .append('<span>' + '$' + response.products[i].price + '</span> &nbsp')
    }
  });
});

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
  alert(firstName.value + ", thanks for reaching out!");
  window.location.reload();
}

//checkout page
function placeOrder() {
  makeRequest('DELETE', '/resetCart', (response) => {
    //https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
    window.location.reload();
  }, error => {
    alert("The cart could not be deleted" + error);
  })
  alert(firstName.value + ", your order has been placed! Thanks for shopping with us!")
}

function deleteCart() {
  makeRequest('DELETE', '/resetCart', (response) => {
    alert("The cart has been deleted!");
    //https://stackoverflow.com/questions/3715047/how-to-reload-a-page-using-javascript
    window.location.reload();
  }, error => {
    alert("The cart could not be deleted" + error);
  })
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

