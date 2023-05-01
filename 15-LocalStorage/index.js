const itemsList = document.querySelector('.plates')
const addItems = document.querySelector('.add-items')

const items = JSON.parse(localStorage.getItem('items')) || []

addItems.addEventListener('submit', addItem)
renderList(items, itemsList);
itemsList.addEventListener('click',toggleDone)
itemsList.addEventListener('click',deleteItem)

function addItem (e) {
  e.preventDefault()
  const target = e.target.firstElementChild.value.trim()
  if (target.length === 0) {
    alert ('內容不能為空白')
    return
  }
  const text = target
  const item = {
    text: text,
    done: false
  }

  items.push(item)
  renderList(items, itemsList)

  localStorage.setItem('items',JSON.stringify(items))

  e.target.firstElementChild.value = ' '
}

function renderList (plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li class="item">
      <input type="checkbox" data-index=${i} id=item${i} ${plate.done? 'checked' : ''}>
      <label for=item${i}>${plate.text}</label>
      <span data-index=${i} class="delete">x</span>
    </li>
  `
  }).join('')

  platesList.scrollTop = platesList.scrollHeight - platesList.offsetHeight;
}

function toggleDone(e) {
  if (!e.target.matches('input')) return

  const index = e.target.dataset.index
  console.log(index)
  items[index].done = !items[index].done
  localStorage.setItem('items',JSON.stringify(items))
  renderList(items, itemsList)
}

function deleteItem(e) {
  if (e.target.matches('.delete')) {
    const index = e.target.dataset.index
    items.splice(index,1)
    localStorage.setItem('items',JSON.stringify(items))
    renderList(items, itemsList)
  }
}