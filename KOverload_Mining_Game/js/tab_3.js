//탭3 : 조합소

var material = {
    1 : ['iron','gold']
};

var price = {
    1 : ['10', '10']
};
function have_no_idea_to_naming(num){
    let a=prompt("조합할 개수를 입력해 주세요.");
    console.log(a);
    let max_make=parseInt(SD[material[num][0]]/price[num][0]);
    for(var i=0; i<=material[num].length; i++){
        if (parseInt(SD[material[num][i]]/price[num][i]) < max_make){
        max_make = parseInt(SD[material[num][i]]/price[num][i];
    }
}
  
