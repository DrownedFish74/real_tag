$(function() {
  function init(){
    let family = [{family: "佐藤",first:"一郎"},{family: "山田",first:"一郎"},{family: "佐藤",first:"次郎"},{family: "林",first:"一郎"},{family: "佐藤",first:"三郎"}]
    return family;
  }

  function addHTML(people) {
    $(".right__result__people").remove();
    people.forEach(function(result){
////////////////
      var HTML = `
      <div class="right__result__people">
      ${result.family}　${result.first}
      </div>
      `;
      $('.right__result').append(HTML)
    })
  }
  
  $('.left__list__btn').on('click', function(e) {
    e.preventDefault();
    all_people = init()
    addHTML(all_people)
  })
  
  $('.left__search__btn').on('click',function(e){
    e.preventDefault();
    all_people = init()
    satou = []
    all_people.forEach(function(people){
      if (people.family === "佐藤"){
        satou.push(people)
      }
    })
    addHTML(satou)
  })
  
  $('.left__delete__btn').on('click',function(e){
    e.preventDefault();
    all_people = init()
    let delete_list = []
    $.each(all_people,function(i,people) {
      if (people.family === "佐藤"){
        delete_list.push(i)
      };
    })
    i = all_people.length
    while (i--){
      if (delete_list.indexOf(i) != -1) {
        all_people.splice(i,1)
      }
    }
    addHTML(all_people)
  })
});