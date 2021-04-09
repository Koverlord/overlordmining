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

    let max_craft = parseInt(SD[craft_material[num][0]] / craft_price[num][0]);
    for(let i = 0; i <= craft_material[num].length; i++){
        if (parseInt(SD[craft_material[num][i]] / craft_price[num][i]) < max_craft){
        max_craft = parseInt(SD[craft_material[num][i]] / craft_price[num][i]);
        }
    }

    let craft = parseInt("0" + prompt("조합할 개수를 입력해 주세요. 현재 최대 조합 가능 개수 : " + max_craft + "개"));

    if (craft < 1) {
        add_log("1 이상의 숫자를 입력해 주세요");
    }
    else if (craft <= max_craft){
        for(let i = 0; i <= craft_material[num].length; i++){
            SD[craft_material[num][i]] -= craft_price[num][i] * craft;
        }
        SD[craft_result[num]] += craft;
        add_log(craft + "개 조합 완료");
        store();
    }
    else {
        for(let i = 0; i <= craft_material[num].length; i++){
            SD[craft_material[num][i]] -= craft_price[num][i] * max_craft;
        }
        SD[craft_result[num]] += craft;
        add_log(craft + "개 조합 완료");
        store();
    }
}
  
