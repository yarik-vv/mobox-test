const list = document.getElementById('list');  
const paginationBlock = document.getElementById('pagination');
paginationBlock.addEventListener('click', pagination);

let posts = null;
  
  function AJAXrequest(url, method){
    return new Promise(function(resolve, reject) {

      var request = new XMLHttpRequest();
      
      //обработываем ответ
      request.onreadystatechange = function() {
        if(request.readyState === 4) {
          if(request.status === 200){
            resolve(this.responseText);
          }
          else{
            reject(this.responseText);
          }
        }
      };   

      //открываем запрос
      request.open(method, url, true);

      //посылаем запрос
      request.send();
    })
  };

  AJAXrequest('./posts.json', 'GET')
    .then(function(result) {
      posts = JSON.parse(result);
      pushPosts(posts, 0);
    }, function(error) {
      console.log(error);
    });



    function pagination(event){
      if(event.target.id !== 'prev' && event.target.id !== 'next'){
        lastPage = document.querySelector('#pagination .active');
        lastPage.className = '';
        event.target.className = 'active';
      }
      paginationSelect(posts, event.target.id);  
    }

function paginationSelect(data, id){
  let currentPage = null;
  
  switch(id){
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
      currentPage = document.querySelector('#pagination .active');
      let prevPage = currentPage.previousSibling.previousSibling;

      if(prevPage.id !== 'prev'){
        prevPage.click();
        currentPage.className = ""; 
        prevPage.className = "active"; 
      }   
    break;

    case 'next':
      currentPage = document.querySelector('#pagination .active');
      let nextPage = currentPage.nextSibling.nextSibling;

      if(nextPage.id !== 'next'){
        nextPage.click();
        currentPage.className = ""; 
        nextPage.className = "active"; 
      } else{
        console.log('kek');
      }
    break;

    default: 
      pushPosts(posts, 0);
    break;
  }
}

function pushPosts(data, start){
  //const list = document.getElementById('list');
  list.innerHTML = '';

  for (let i = start; i < (start+5); i++) {
    let listItem = document.createElement('article'); 
    listItem.className = 'list-item';
    
    //рейтинг считаем
    let rate = ['<i class="icon-star-full"></i>'];
    for (let s = 1; s < data[i].rate; s++) {
      rate.push('<i class="icon-star-full"></i>'); 
        
    } 
    //дополняем пустыми звездочками
    while(true){
      if(rate.length < 5){
        rate.push('<i class="icon-star-empty"></i>');
      } else {
        break;
      }
    }
    //в строку и убираем запятые
    rate = rate.toString();

    for (let a = 0; a < 5; a++) {
      rate = rate.replace(",", "");
    }
  
    //добавляем пост
    listItem.innerHTML = '<div><h3>' + data[i].title + '</h3><p>' + data[i].description + '</p><div class="list-item-info"><span class="rate">' + rate + '</span><span class="done">Работ выполнено:<span>' + data[i].done + '</span></span><span class="reviews">Отзывов:<span>' + data[i].reviews + '</span></span></div></div><button>Открыть</button>';
    list.appendChild(listItem);  
  }
  
}