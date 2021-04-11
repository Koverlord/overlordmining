//탭3 : 조합소

const craft_material = {
    0 : ['iron_ingot', 'gold_ingot'],
    1 : ['alloy_iron_gold', 'diamond', 'ruby'],
    2 : ['alloy_iron_gold', 'emerald']
};

const craft_price = {
    0 : ['10', '10'],
    1 : ['10', '50', '50'],
    2 : ['30', '200']
};
const craft_result = {
    0 : 'alloy_iron_gold',
    1 : 'pipe',
    2 : 'extract_engine'
};
    
function craft(num){
    let max_craft = parseInt(SD[craft_material[num][0]] / craft_price[num][0]);
    for(let i = 0; i <= craft_material[num].length; i++){
        if (parseInt(SD[craft_material[num][i]] / craft_price[num][i]) < max_craft){
        max_craft = parseInt(SD[craft_material[num][i]] / craft_price[num][i]);
        }
    }

    let craft = parseInt("0" + prompt("조합할 개수를 입력해 주세요. 현재 업그레이드 미적용 기준 최대 조합 가능 개수 : " + max_craft + "개")); // 음수 써도 0으로 바뀜
    // console.log(craft); // 입력한 숫자 확인용
    if (craft == 0) { //자연수 아니면 여기서 걸러짐
        add_log("1 이상의 숫자를 입력해 주세요");
    }
    else {
        if (craft > max_craft){ // 최대갯수보다 많이만들려고하면 최대갯수만큼 만들어지게 해줌
            craft = max_craft;
        }
        for(let i = 0; i <= craft_material[num].length; i++){     
            SD[craft_material[num][i]] -= craft_price[num][i] * craft;
        }
        SD[craft_result[num]] += craft * SD.b;
        add_log(craft * SD.b + "개 조합 완료");
        store(1); // 주괴
        store(2); // 합금
        store(3); // 조합템
    }
}
  
