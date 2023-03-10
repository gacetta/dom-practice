import { v4 as uuid } from 'uuid';

const noteArr = [{ noteID: 1, noteText: 'test text'}];

// new-note button
const buttonEl = document.querySelector('.new-note__button')
// add eventlistener
buttonEl.addEventListener('click', createNote)

function createNote() {
  // on click get text from input field
  const noteText = document.querySelector('#new-note__input');
  console.log(noteText.value);
  // generate new uuid
  const noteID = uuid();
  console.log(noteID)
  // add input text to noteArr

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