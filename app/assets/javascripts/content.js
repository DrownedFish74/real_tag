$(function() {
  function init(){
    let family = [{family: "佐藤",first:"一郎"},{family: "山田",first:"一郎"},{family: "佐藤",first:"次郎"},{family: "林",first:"一郎"},{family: "佐藤",first:"三郎"}]
    return family;
  }

  function addHTML(people) {
    $(".right__result__people").remove();
    people.forEach(function(result){
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
// 問題１　配列all_peopleにfamilyの値を入れてください////////

////////////////////////////////////////////////////
    addHTML(all_people)
  })
  
  $('.left__search__btn').on('click',function(e){
    e.preventDefault();
    satou = []
// 問題２　配列satouに佐藤さんだけ入れてください//////////////

////////////////////////////////////////////////////
    addHTML(satou)
  })
  
  $('.left__delete__btn').on('click',function(e){
    e.preventDefault();
// 問題３　配列all_peopleに佐藤さん以外だけ入れてください////
// 但し、佐藤さん以外を「加える」のではなく、///////////////
// 佐藤さんを「消す」方向で解決してください/////////////////

/////////////////////////////////////////////////////
    addHTML(all_people)
  })
});