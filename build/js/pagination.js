//вешаем клик на пеерключатель страниц
const paginationBlock = document.getElementById('pagination');
paginationBlock.addEventListener('click', pagination);


//фукнция для обработки клика по пеерключателю страницы
function pagination(event) {
  if (event.target.id !== 'prev' && event.target.id !== 'next') {
    lastPage = document.querySelector('#pagination .active');
    lastPage.className = '';
    event.target.className = 'active';
  }
  paginationSelect(posts, event.target.id);
}

//функция выбора страницы
function paginationSelect(data, id) {
  let currentPage = null;

  switch (id) {
    case 'page1':
      pushPosts(posts, 0);
      break;

    case 'page2':
      pushPosts(posts, 4);
      break;

    case 'page3':
      pushPosts(posts, 9);
      break;

    case 'page4':
      pushPosts(posts, 14);
      break;

    case 'page5':
      pushPosts(posts, 19);
      break;

    case 'prev':
      //переключение страницы назад
      currentPage = document.querySelector('#pagination .active');
      let prevPage = currentPage.previousSibling.previousSibling;

      if (prevPage.id !== 'prev') {
        prevPage.click();
        currentPage.className = '';
        prevPage.className = 'active';
      }
      break;

    case 'next':
      //переключение страницы вперед
      currentPage = document.querySelector('#pagination .active');
      let nextPage = currentPage.nextSibling.nextSibling;

      if (nextPage.id !== 'next') {
        nextPage.click();
        currentPage.className = '';
        nextPage.className = 'active';
      }
      break;

    default:
      pushPosts(posts, 0);
      break;
  }
}