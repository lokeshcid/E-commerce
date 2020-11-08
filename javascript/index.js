text = localStorage.getItem("cart");
obj = JSON.parse(text);
var cart = obj.cartname;


$(".showcartvalue").text("$ " + cart);
$(".emptycart").click(function() {
  cart = 0;
  myObj = {
    cartname: cart
  };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("cart", myJSON);
  if ($(".form-control option:selected").text() == "RUPEE") {
    $(".showcartvalue").text("₹ " + cart);
  } else {
    $(".showcartvalue").text("$ " + cart);
  }

});

$(".item_add").click(function() {

  if (confirm("Are you sure you want to add this item into cart")) {
    $(".addcart").text("Your item is successfully added in cart");
    $(".addcart").addClass("showaddcart");
    var x = $(this).closest("h4").children(".item_price");
    var str = x[0].innerHTML;
    var str2 = str.slice(2);
    var a = parseInt(str2);
    if ($(".form-control option:selected").text() == "RUPEE") {
      cart = (cart * 72) + a;
      alert("Total value of your cart is ₹" + cart);
      $(".showcartvalue").text("₹ " + cart);
      cart = cart / 72;
    } else {
      cart = cart + a;
      alert("Total value of your cart is $" + cart);
      $(".showcartvalue").text("$ " + cart);
    }
    myObj = {
      cartname: cart
    };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("cart", myJSON);
  }

});



$('.form-control').change(function() {
  var value = $(this).val();
  if (value == "RUPEE") {
    $(".item_price").each(function(i) {
      var x = $(this).text();
      x = x.slice(2);
      x = parseInt(x);
      x = x * 72;
      $(this).text("₹ " + x);
    });
    cart = cart * 72;
    $(".showcartvalue").text("₹ " + cart);
    cart = cart / 72;
    myObj = {
      cartname: cart
    };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("cart", myJSON);



  } else {
    $(".item_price").each(function(i) {
      var x = $(this).text();
      x = x.slice(2);
      x = parseInt(x);
      x = x / 72;
      $(this).text("$ " + x);
    });
    $(".showcartvalue").text("$ " + cart);
    myObj = {
      cartname: cart
    };
    myJSON = JSON.stringify(myObj);
    localStorage.setItem("cart", myJSON);

  }

});
// images birth
textone = localStorage.getItem("imagedata");
objone = JSON.parse(textone);
var y = objone.image;
var pri = objone.price;
var nam = objone.name;
var gen = objone.gender;

$(".mask").click(function() {
  y = $(this).children("img").attr("src");

  var str8 = $(this).closest(".product-main").children(".product-bottom").children("h4").children(".item_price");
  pri = str8[0].innerHTML;
  nam = $(this).closest(".product-main").children(".product-bottom").children("h3");
  nam = nam[0].innerHTML;
  gen = $(this).closest(".product").children(".gender1")[0].innerHTML;
  imgo = {
    image: y,
    price: pri,
    name: nam,
    gender: gen
  };
  uJSON = JSON.stringify(imgo);
  localStorage.setItem("imagedata", uJSON);
});


$(".image-birth").attr("src", y);
$(".item_price_two").text(pri);
$(".name_item").text(nam);
$(".gender").text(gen);
