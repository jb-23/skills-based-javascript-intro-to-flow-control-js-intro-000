function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!"
  } /* else {
    return "You are not a teenager!"
  } */
}

function teenager(age) {
  var x
  x = basicTeenager(age)
  if (x) { return x }
  else { return "You are not a teenager" }
}

function ageChecker(age) {
  var y
  y = basicTeenager(age)
  if (y) { return y }
  else if (age < 13 ) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age) {

}

function switchAge(age) {

}
