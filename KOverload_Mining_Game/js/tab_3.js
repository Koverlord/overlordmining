//탭3 : 조합소

const craft_material = {
    0 : ['iron','gold']
};

const craft_price = {
    0 : ['10', '10']
};
const craft_result = {
    0 : 'irongold'
};
    
function craft(num){

    let max_make = parseInt(SD[craft_material[num][0]] / craft_price[num][0]);
    for(let i = 0; i <= craft_material[num].length; i++){
        if (parseInt(SD[craft_material[num][i]] / craft_price[num][i]) < max_make){
        max_make = parseInt(SD[craft_material[num][i]] / craft_price[num][i]);
        }
    }
    let make = prompt("조합할 개수를 입력해 주세요. 현재 최대 조합 가능 개수 : " + max_make + "개");
    try {
        make = parseInt(make);
        if (0 <= make && make <= max_make){
            for(let i=0; i <= craft_material[num].length; i++){
                SD[craft_material[num][i]] -= craft_price[num][i] * make;
            }
            SD[craft_result[num]] += make;
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
  
