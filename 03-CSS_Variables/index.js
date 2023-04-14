const inputs = document.querySelectorAll('.controls input')

inputs.forEach(input => input.addEventListener('change',handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate))

function handleUpdate(e) {
  //add '' : color don't have sizing
  const suffix = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value + suffix)
}