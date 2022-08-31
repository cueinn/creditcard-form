const inputs = document.querySelectorAll("input")

function findFeedbackError(node) {
  let parent = node.parentNode
  return parent.querySelector('.feedbackError')
}

function showErrorMessage(input, message) {

  let feedbackError = findFeedbackError(input)

  feedbackError.innerText = message
  feedbackError.classList.add("active")

}

function highlightInput(input) {
  input.classList.add("error")
}

function removeErrorState(input) {
  input.classList.remove("error")
  findFeedbackError(input).classList.remove("active")
}

function isValid(input) {
  if(input.validity.valid) return true 
  else return false
}

function isFilled(input) {
  if(input.value.length === 0) return false
  else return true
}

inputCardholderName.addEventListener("input", () => {
  
  cardPreview_name.innerText = inputCardholderName.value

  if(isFilled(inputCardholderName)) {
    removeErrorState(inputCardholderName)
  }
})

inputCardNumber.addEventListener("input", () => {

  inputLength = inputCardNumber.value.length

  if(inputLength === 4 || inputLength === 9 || inputLength === 14) {
    inputCardNumber.value += " "
  }

  cardPreview_number.innerText = inputCardNumber.value

  if(isFilled(inputCardNumber)) {
    removeErrorState(inputCardNumber)
  }

})

inputExpDateMonth.addEventListener("input", () => {
  cardPreview_dateMonth.innerText = inputExpDateMonth.value

  if(isFilled(inputExpDateMonth)) {
    removeErrorState(inputExpDateMonth)
  }
})

inputExpDateYear.addEventListener("input", () => {
  cardPreview_dateYear.innerText = inputExpDateYear.value

  if(isFilled(inputExpDateYear)) {
    removeErrorState(inputExpDateYear)
  }
})

inputCVC.addEventListener("input", () => {
  cardPreview_cvc.innerText = inputCVC.value

  if(isFilled(inputCVC)) {
    removeErrorState(inputCVC)
  }
})

buttonConfirm.addEventListener("click", (e) => {

  inputs.forEach(input => {

    if(!isFilled(input)) {
      highlightInput(input)
      showErrorMessage(input, "Can't be blank")
      e.preventDefault()
    }

    if(!isValid(input)) {
      highlightInput(input)
      showErrorMessage(input, "Wrong format, numbers only")
      e.preventDefault()
    }

  })

})

function success() {
  form.classList.add("hidden")
  formComplete.classList.add("active")
}