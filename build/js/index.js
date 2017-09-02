var list = document.getElementById('list');

//юзаем ajax запрос чтобы вытянуть даные про посты
let posts = null;
AJAXrequest('./posts.json', 'GET').then(
  function(result) {
    posts = JSON.parse(result);
    pushPosts(posts, 0);
  },
  function(error) {
    console.log(error);
  }
);

//сам ajax запрос
function AJAXrequest(url, method) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();

    //обработываем ответ
    request.onreadystatechange = function() {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(this.responseText);
        } else {
          reject(this.responseText);
        }
      }
    };

    //открываем запрос
    request.open(method, url, true);

    //посылаем запрос
    request.send();
  });
}

//функция загрузки постов в блок
function pushPosts(data, start) {
  list.innerHTML = '';

  for (let i = start; i < start + 5; i++) {
    let listItem = document.createElement('article');
    listItem.className = 'list-item';

    //рейтинг считаем и заполняем
    let rate = ['<i class="icon-star-full"></i>'];
    for (let s = 1; s < data[i].rate; s++) {
      rate.push('<i class="icon-star-full"></i>');
    }
    //дополняем пустыми звездочками если нужно
    while (true) {
      if (rate.length < 5) {
        rate.push('<i class="icon-star-empty"></i>');
      } else {
        break;
      }
    }
    //в строку и убираем запятые
    rate = rate.toString();

    for (let a = 0; a < 5; a++) {
      rate = rate.replace(',', '');
    }

    //добавляем пост
    listItem.innerHTML =
      '<div><h3>' +
      data[i].title +
      '</h3><p>' +
      data[i].description +
      '</p><div class="list-item-info"><span class="rate">' +
      rate +
      '</span><span class="done">Работ выполнено:<span>' +
      data[i].done +
      '</span></span><span class="reviews">Отзывов:<span>' +
      data[i].reviews +
      '</span></span></div></div><button>Открыть</button>';
    list.appendChild(listItem);
  }
}
