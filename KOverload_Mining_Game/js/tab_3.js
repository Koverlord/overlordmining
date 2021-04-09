//탭3 : 조합소

var material = {
    1 : ['iron','gold']
};

var price = {
    1 : ['10', '10']
};
var result = {
    1 : 'irongold'
};
    
function craft(num){

    let max_make=parseInt(SD[material[num][0]]/price[num][0]);
    for(let i=0; i<=material[num].length; i++){
        if (parseInt(SD[material[num][i]]/price[num][i]) < max_make){
        max_make = parseInt(SD[material[num][i]]/price[num][i]);
        }
    }
    let make=prompt("조합할 개수를 입력해 주세요. 현재 최대 조합 가능 개수 : " + max_make + "개");
    try {
        make=parseInt(make);
        if (0<=make<=max_make){
            for(let i=0; i<=material[num].length; i++){
                SD[material[num][i]]-=price[num][i]*make;
            }
            SD[result[num]]+=make;
            alert("조합 완료.");
            store()
        }
        else {
            alert("제대로 입력하세요 빠빡대가리야");
        }
    }
    catch{
        alert("제대로 입력하세요 빠빡대가리야");
    }
}
  
