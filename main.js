// Get Numbers 

function getNum(num) {
  const input = document.querySelector("input")
  input.value += num
}



// calculate Numbers.

function result() {
  const input = document.querySelector("input")
  input.value = eval(input.value)
}

// Clear Button.

function remove() {
  const puted = document.querySelector("input")
  puted.value = null

}


// Backspace button.

function backspace() {
  const puted = document.querySelector("input")
  let back = puted.value.slice(0, puted.value.length - 1)
  puted.value = back
}


// sqrt function √

function sqrt() {
  let put = document.querySelector("input")
  let onlyNum = put.value.substr(0, put.value.length - 1)
  let sqRoot = Math.sqrt(onlyNum)
  put.value = sqRoot
}