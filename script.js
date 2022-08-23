/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector('#input');
const items = document.querySelector('#items');
input.addEventListener('keydown', function(event) {
    const text = input.value;

    const newItems = document.createElement('div');
    newItems.classList.add('input');
    newItems.textContent = text;

    newItems.addEventListener('click', function() {
        newItems.classList.toggle('done');
    });
    if (event.keyCode == 13) {
        items.append(newItems);
        input.value = '';
    }
});

const allItems = document.querySelectorAll('#items');
for (let addDeleteDone of i) {
    addDeleteDone[allItems].addEventListener('click', function() {
        addDeleteDone[allItems].classList.toggle('done');
    })

}

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */