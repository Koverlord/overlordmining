//탭3 : 조합소

tab_craft_num = 0;
function tab_craft(num) {
    let tab_craft_list = document.getElementsByClassName("tab_craft")
    let craft_list = document.getElementsByClassName("craft");
    tab_craft_list[tab_craft_num].className = "tab_craft not_active";
    craft_list[tab_craft_num].style.display = "none";
    tab_craft_list[num].className = "tab_craft active";
    craft_list[num].style.display = "block";
    tab_craft_num = num;
}

const craft_material = {
    0 : ["iron_ingot", "gold_ingot"],
    1 : ["alloy_iron_gold", "emerald", "ruby"],
    2 : ["alloy_iron_gold", "diamond"],
    3 : ["alloy_iron_gold", "pipe", "extract_engine"],
    4 : ["overlord_scrap"],
    5 : ["overlord_part", "overlord_essence"],
    6 : ["overlord_soul", "overlord_ingot" , "overlord_essence"],
    7 : ["alloy_iron_gold", "enchanted_overlord_ingot"],
    8 : ["diamond", "emerald", "ruby"],
    9 : ["overlord_ingot", "enchanted_overlord_ingot"],
};

const craft_price = {
    0 : ["15", "15"],
    1 : ["10", "30", "30"],
    2 : ["50", "300"],
    3 : ["100", "10", "1"],
    4 : ["5"],
    5 : ["10", "10"],
    6 : ["1", "100", "1000"],
    7 : ["1000", "10"],
    8 : ["500", "300", "300"],
    9 : ["50000", "200"],
};
const craft_result = {
    0 : "alloy_iron_gold",
    1 : "pipe",
    2 : "extract_engine",
    3 : "extractor",
    4 : "overlord_part",
    5 : "overlord_ingot",
    6 : "enchanted_overlord_ingot",
    7 : "robot_maker",
    8 : "gem_mine",
    9 : "legend_mine",
};
    
function craft(num,click) {
    if (num == 3 || num == 7 || num == 8 || num == 9) { // 기계, 광산 입장권
        if (SD[craft_result[num]] == 1) {
            add_log("이미 조합하셨습니다");
        }
        else {
            for(let i = 0; i <= craft_material[num].length; i++) { // 재료 보유여부 확인
                if (SD[craft_material[num][i]] < craft_price[num][i]) {
                    add_log("재료 부족");
                    return;
                }
            }
            for(let i = 0; i <= craft_material[num].length; i++) { // 재료 소모
                SD[craft_material[num][i]] -= craft_price[num][i]
            }
            SD[craft_result[num]] = 1;
            add_log(Name[craft_result[num]] + " 조합 완료");
            if (num == 3) {
                add_log("추출소 탭이 해금되었습니다");
                SD.unlock.Extract = 1;
                unlock("Extract");
                document.getElementById("button_extract").innerHTML = "제작 불가"; // 버튼 텍스트 변경
                document.getElementById("button_extract").style.color = "#888"; // 회색
            }
            else if(num == 7) {
                add_log("로봇 제작소 탭이 해금되었습니다");
                SD.unlock.Robot = 1;
                unlock("Robot");
                document.getElementById("button_robot").innerHTML = "제작 불가"; // 버튼 텍스트 변경
                document.getElementById("button_robot").style.color = "#888"; // 회색
            }
            else if(num == 8) {
                add_log("보석 광산이 해금되었습니다");
                SD.unlock.Gem_mine = 1;
                unlock("Gem_mine");
                document.getElementById("button_gem").innerHTML = "제작 불가"; // 버튼 텍스트 변경
                document.getElementById("button_gem").style.color = "#888"; // 회색
            }
            else if(num == 9) {
                add_log("전설의 광산이 해금되었습니다");
                SD.unlock.Legend_mine = 1;
                unlock("Legend_mine");
                document.getElementById("button_legend").innerHTML = "제작 불가"; // 버튼 텍스트 변경
                document.getElementById("button_legend").style.color = "#888"; // 회색
            }
        }
    }

    else {
        let max_craft = parseInt(SD[craft_material[num][0]] / craft_price[num][0]);
        for(let i = 1; i < craft_material[num].length; i++) {
            if (parseInt(SD[craft_material[num][i]] / craft_price[num][i]) < max_craft) {
            max_craft = parseInt(SD[craft_material[num][i]] / craft_price[num][i]);
            }
        }
        let craft_num;
        if (click.shiftKey) {
            if (max_craft == 0) {
                return;
            }
            craft_num = max_craft;
        }
        else {
            craft_num = parseInt("0" + prompt("조합할 개수를 입력해 주세요\n현재 업그레이드 미적용 기준 최대 조합 가능 개수 : " + max_craft + "개")); // 음수 써도 0으로 바뀜
        }
        if (craft_num == 0) { //자연수 아니면 여기서 걸러짐
            add_log("자연수를 입력해 주세요");
        }
        else {
            if (craft_num > max_craft) { // 최대갯수보다 많이만들려고하면 최대갯수만큼 만들어지게 해줌
                craft_num = max_craft;
            }
            for(let i = 0; i <= craft_material[num].length; i++) { // 재료 소모  
                SD[craft_material[num][i]] -= craft_price[num][i] * craft_num;
            }
            if (num == 0 || num == 4 || num == 5 || num == 6) { // 오버로드 아이템은 조합버프를 받지 않아야 하므로 오버로드 아이템의 번호를 적어둘것
                SD[craft_result[num]] += craft_num;
                add_log(craft_num + "개 조합 완료");
            }
            else { // 그외
                SD[craft_result[num]] += craft_num * SD.b;
                add_log(craft_num * SD.b + "개 조합 완료");
            }
        }
    }
    store(1); // 주괴
    store(2); // 합금
    store(3); // 조합템
    store(4); // 오버로드 템
}