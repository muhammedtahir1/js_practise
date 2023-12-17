
// if (btn.classList.contains('js-button')) {
//   console.log('Hell yeah')
// } else {
//   console.log('nahh');
// }

// const btn = document.querySelector('.toggle-button');

// btn.addEventListener('click', () => {
//   if (!btn.classList.contains('is-toggled')) {
//     btn.classList.add('is-toggled')
//   } else {
//     btn.classList.remove('is-toggled')
//   }
// })


function toggleBtn(selector) {
  btn = document.querySelector(selector);

  if (!btn.classList.contains('.is-toggled')) {
    previousbtn();

    btn.classList.add('is-toggled')
  } else {
    btn.classList.remove('is-toggled')
  }
}

function previousbtn() {
  const preBtn = document.querySelector('.is-toggled')
  if (preBtn) {
    preBtn.classList.remove('is-toggled')
  }
}
