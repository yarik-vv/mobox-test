const dropdownBlock = document.querySelector('.dropdown');
const categoryBlock = document.querySelector('.dropdown .kategory');
const moreBlock = document.querySelector('.dropdown .more');
const dropdownBtn = document.querySelector('.icon-category');

dropdownBtn.onclick = dropdown;

//функция открытия окна
function dropdown() {
  dropdownBlock.style.display = 'flex';

  //если ширина больше 940px разрешаем открывать дополнительный блок
  if(window.matchMedia("(min-width: 940px)").matches){
    dropdownBlock.addEventListener('click', category);
  }
  
  //вешаем функцию скрытия окна
  dropdownBtn.onclick = function() {
    dropdownBlock.style.display = 'none';
    moreBlock.style.display = 'none';
    categoryBlock.style.maxWidth = 'none';

    //возвращаем функцию открытия
    return (dropdownBtn.onclick = dropdown);
  };
}

//функция выбора категорий
function category(event){
  if(event.target.nodeName === 'LI'){
    moreBlock.style.display = 'flex';
    categoryBlock.style.maxWidth = '725px';
    //убираем прошлые инпуты все
    for (let i = 0; i < moreBlock.childNodes.length; i++) {
      if(i%2 !== 0){
        moreBlock.childNodes[i].style.display = 'none';
      }
    }
  }

  function selectInput(inputName){
    //выводим новые инпуты
    let input = document.getElementById(inputName);
    input.style.display = 'flex';
  }
    
  //перебираем и выводим инпуты соответственно категории
  let moreInputs = event.target.className.split(' ');
  for (let i = 0; i < moreInputs.length; i++) {
    selectInput(moreInputs[i]);
  }
}