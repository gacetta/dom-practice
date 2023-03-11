// new-note button
const buttonEl = document.querySelector('.new-note__button')
// add eventlistener
buttonEl.addEventListener('click', createNote)

function createNote() {
  // on click get text from input field
  const noteText = document.querySelector('#new-note__input');
  // create note container
  const noteContainerEl = document.createElement('div');
  // create note p
  const noteTextEl = document.createElement('p');
  // create note button
  const noteButtonEl = document.createElement('button');
  
  //setup note container
  noteContainerEl.classList.add('note__container');

  //setup noteText
  noteTextEl.classList.add('note__text');
  noteTextEl.textContent = noteText.value;
  noteText.value = '';

  // setup noteButton
  noteButtonEl.classList.add('note__button');
  noteButtonEl.textContent = 'X';
  noteButtonEl.addEventListener('click', () => {
    noteContainerEl.remove();
  });

  // append all elements to DOM
  noteContainerEl.append(noteTextEl, noteButtonEl);
  document.querySelector('#notes').append(noteContainerEl);
}

// RENDER NOTES
// iterate over the notes array
// for each note:
  // create element:
/*
div class container id=uuid
  p class note text
  button class remove note
div
*/  