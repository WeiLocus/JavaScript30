const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]')

checkboxes.forEach( checkbox => {
  checkbox.addEventListener('click',handleClick)
});

let lastChecked

function handleClick(e) {
  // check if they had the shift key down
  // and check that they are checking it 
  let inBetween = false
  if (e.shiftKey && this.checked) {
    //loop over every single checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween
      }
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }
  lastChecked = this
}