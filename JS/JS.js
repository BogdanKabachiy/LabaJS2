// var AYE = 2;
// var eya = 4;
// AYE +=4 
// document.write (AYE + eya);
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var znach = {};
// Для перевірки закоментувати рядок, з значенням, яке не хочете побачити
alert( isEmpty(znach) ); // true

znach["2:28"] = "час поїсти";

alert( isEmpty(znach) ); // false