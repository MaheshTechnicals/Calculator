// Get Numbers 

function getNum(num) {
  const input = document.querySelector("input")
  input.value += num
  input.style.color = "white"
  play("sound/click.wav")
}



// calculate Numbers.

function result() {
  const input = document.querySelector("input")


  if (input.value == "") {

  }

  else {
    input.value = eval(input.value)
    input.style.color = "#fed330"
    play("sound/ans.wav")
  }


}

// Clear Button.

function remove() {
  const puted = document.querySelector("input")
  puted.value = null
  play("sound/clear.wav")

}


// Backspace button.

function backspace() {
  const puted = document.querySelector("input")
  let back = puted.value.slice(0, puted.value.length - 1)
  puted.value = back
  play("sound/click.wav")
}


// sqrt function √

function sqrt() {
  let put = document.querySelector("input")
  let onlyNum = put.value.substr(0, put.value.length - 1)
  let sqRoot = Math.sqrt(onlyNum)
  put.value = sqRoot
}


// On click Sounds.

function play(file) {
  let audio = new Audio(file)
  audio.play()
}