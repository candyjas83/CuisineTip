// Pull inputs from the user and run the function
function calculateTip () {
  const billAmt = document.getElementById('bill_Amt')
  const serviceQual = document.getElementById('service_Quality')

  // Calculate the Tip for the function
  const bill = parseFloat(billAmt.value)
  const tip = parseFloat(serviceQual.value)

  // Custom alert box if fields are left empty and checks that user enters a decimal number.
  const decimalNum = /^[-+]?[0-9]+\.[0-9]+$/
  if (billAmt.value === '' || !billAmt.value.match(decimalNum)) {
    Swal.fire(
      'Oops..',
      'Don\'t forget to enter the bill amount!',
      'error'
    )
  } else {
    const calTip = (bill * tip)

    // Calculate the bill amount including the tip
    const calBill = (bill + calTip)

    // Display the final tip amount and bill amount on the HTML file
    document.getElementById('final_Tip').innerHTML = '$' + calTip.toFixed(2)
    document.getElementById('final_Bill').innerHTML = '$' + calBill.toFixed(2)
  }
}

// Clear input and output boxes
document.getElementById('clear').onclick = function () {
  document.getElementById('bill_Amt').value = ''
  document.getElementById('final_Tip').innerHTML = '$' + '0.00'
  document.getElementById('final_Bill').innerHTML = '$' + '0.00'
}

// When the user clicks the button, run this function
document.getElementById('calculate').onclick = function () {
  calculateTip()
}
