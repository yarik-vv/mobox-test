const dropdownBlock = document.querySelector('.dropdown');
const categoryBlock = document.querySelector('.dropdown .kategory');
const moreBlock = document.querySelector('.dropdown .more');
const dropdownBtn = document.querySelector('.icon-category');

dropdownBtn.onclick = dropdown;
function dropdown() {
  dropdownBlock.style.display = 'flex';
  dropdownBlock.addEventListener('click', category);

  dropdownBtn.onclick = function() {
    dropdownBlock.style.display = 'none';
    moreBlock.style.display = 'none';
    categoryBlock.style.maxWidth = 'none';
    return (dropdownBtn.onclick = dropdown);
    //console.log('vsmisle');
  };
}

function category(event){
  console.log(event.target.nodeName);
  if(event.target.nodeName === 'LI'){
    moreBlock.style.display = 'flex';
    categoryBlock.style.maxWidth = '725px';

          //убираем прошлые инпуты все
          for (let i = 0; i < moreBlock.childNodes.length; i++) {
            if(i%2 !== 0){
              console.log(moreBlock.childNodes[i]);
              moreBlock.childNodes[i].style.display = 'none';
            }
          }

    function selectInput(inputName){
      //выводим новые инпуты
      let input = document.getElementById(inputName);
      input.style.display = 'flex';
    }
    
    let moreInputs = event.target.className.split(' ');
    //console.log(moreInputs[0]);  
    for (let i = 0; i < moreInputs.length; i++) {
      console.log(moreInputs[i]);
      selectInput(moreInputs[i]);
    }
  } 
}