const noteArr = [{ noteID: 1, noteText: 'test text'}];
let currID = 1;

// new-note button
const buttonEl = document.querySelector('.new-note__button')
// add eventlistener
buttonEl.addEventListener('click', createNote)

function createNote() {
  // on click get text from input field
  const noteText = document.querySelector('#new-note__input');
  console.log(noteText.value);
  console.log('currID: ', currID)
  const noteID = currID++
  console.log('noteID: ', noteID, 'currID: ', currID)
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