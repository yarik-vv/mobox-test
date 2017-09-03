//все инпуты
const searchBtn = document.getElementById('search');
const searchInput = document.querySelector('input[name="search"]');
const searchBtnMenu = document.getElementById('searchMenu');
const searchInputMenu = document.querySelector('input[name="searchMenu"]');
const budgetOtInput = document.querySelector('input[name="budgetOt"]');
const budgetDoInput = document.querySelector('input[name="budgetDo"]');
const termOtInput = document.querySelector('input[name="termOt"]');
const termDoInput = document.querySelector('input[name="termDo"]');
const dateOtInput = document.querySelector('input[name="dateOt"]');
const dateDoInput = document.querySelector('input[name="dateDo"]');
const rateInput = document.querySelector('input[name="rate"]');
const reviewsInput = document.querySelector('input[name="reviews"]');
const cityInput = document.querySelector('input[name="city"]');

//переменная для подсчета пустых инпутов
let empty = 0;

//вешаем на кнопки поиска функцию поиска
searchBtn.onclick = search;
searchBtnMenu.onclick = search;

//функция поиска
function search() {
  let newPosts = [];

  for (let i = 0; i < posts.length; i++) {
    let title = searchText(searchInput.value, posts[i].title);
    let description = searchText(searchInput.value, posts[i].description);

    let titleM = searchText(searchInputMenu.value, posts[i].title);
    let descriptionM = searchText(searchInputMenu.value, posts[i].description);

    let budget = searchInterval(budgetOtInput.value, budgetDoInput.value, posts[i].budget);
    let term = searchInterval(termOtInput.value, termDoInput.value, posts[i].term);
    let date = searchInterval(dateOtInput.value, dateDoInput.value, posts[i].date);

    let rate = searchText(rateInput.value, posts[i].rate);
    let reviews = searchText(reviewsInput.value, posts[i].reviews);
    let city = searchText(cityInput.value, posts[i].city);

    //если найдено совпадение, то добавляем обьект в новый масив
    if (title || titleM || description || descriptionM || budget || term || date || rate || reviews || city) {
      newPosts.push(posts[i]);
    }
  }
  searchLoad(newPosts);
}

//функция загрузки постов
function searchLoad(data) {
  //проверяем или не пустые инпуты
  if (empty === 210) {
    empty = 0;
    return;
  }
  //проверяем или пришли данные
  if (data.length === 0) {
    list.innerHTML =
      '<h3 class="error">К сожалению, мы ничего не нашли по вашему запросу :(</h3>';
    return;
  }
  pushPosts(data, 0);
}

//поиск интервалов
function searchInterval(start, end, data) {
  if (start !== '' || end !== '') {
    return start < data && data < end;
  } else {
    empty++;
    return false;
  }
}

//обычный поиск по строкам и числам
function searchText(chto, gde) {
  if (chto !== '') {
    //приводим к одному регистру
    chto = chto.toLowerCase();
    gde = gde.toLowerCase();

    let regexp = new RegExp(chto);
    return regexp.test(gde);
  } else {
    empty++;
    return false;
  }
}
