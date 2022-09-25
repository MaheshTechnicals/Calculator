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

function remove(){
  const puted =document.querySelector("input")
  puted.value=null
  
}
