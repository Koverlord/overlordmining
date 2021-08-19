// 탭 5 : 로봇 제작소

tab_robot_num = 0;
function tab_robot(num) {
    const tab_robot_list = document.getElementsByClassName("tab_robot")
    const robot_list = document.getElementsByClassName("robot");
    tab_robot_list[tab_robot_num].className = "tab_robot not_active";
    robot_list[tab_robot_num].style.display = "none";
    tab_robot_list[num].className = "tab_robot active";
    robot_list[num].style.display = "block";
    tab_robot_num = num;
}

const part_material = {
    0 : ["alloy_iron_gold", "overlord_ingot"],
    1 : ["iron_ingot", "gold_ingot"],
    2 : ["enchanted_overlord_ingot", "circuit"],
    3 : ["diamond", "overlord_ingot"]
};

const part_price = {
    0 : ["1000", "100"],
    1 : ["30", "30"],
    2 : ["1", "300"],
    3 : ['2000', "100"]
};
const part_result = {
    0 : "robot_body",
    1 : "circuit",
    2 : "CPU",
    3 : "mining_drill"
};

const robot_material = {
    0 : ["robot_body", "circuit", "CPU", "mining_drill"]
};

const robot_price = {
    0 : ["1", "500", "1", "2"]
};

const robot_result = {
    0 : "mining_robot"
}

function part_craft(num) {
    let part_max_craft = parseInt(SD[part_material[num][0]] / part_price[num][0]);
    for(let i = 1; i < part_material[num].length; i++) {
        if (parseInt(SD[part_material[num][i]] / part_price[num][i]) < part_max_craft) {
        part_max_craft = parseInt(SD[part_material[num][i]] / part_price[num][i]);
        }
    }

    let robot_craft_num = parseInt("0" + prompt("조합할 개수를 입력해 주세요\n현재 최대 조합 가능 개수 : " + part_max_craft + "개")); // 음수 써도 0으로 바뀜
    if (robot_craft_num == 0) { //자연수 아니면 여기서 걸러짐
        add_log("자연수를 입력해 주세요");
    }
    else {
        if (robot_craft_num > part_max_craft) { // 최대갯수보다 많이만들려고하면 최대갯수만큼 만들어지게 해줌
            robot_craft_num = part_max_craft;
        }
        for(let i = 0; i <= part_material[num].length; i++) { // 재료 소모  
            SD[part_material[num][i]] -= part_price[num][i] * robot_craft_num;
        }
        SD[part_result[num]][0] += robot_craft_num;
        add_log(robot_craft_num + "개 조합 완료");
        
    }
    store(1); // 주괴
    store(2); // 합금
    store(3); // 조합템
    store(4); // 오버로드 템
}

function robot_craft(num){
    if (num == 0) { // 로봇 공간이 충분한지 확인.
        if (maxrobot-robot_count < 1) {
            add_log("로봇의 공간이 부족합니다");
            return;
        }
    }
    for (let i = 0; i < robot_material[num].length; i++){ // 재료 부족한 거지 컷
        if (SD[robot_material[num][i]][0] < robot_price[num][i]) {
            add_log("재료가 부족합니다");
            return;
        }
    }
    for (let i = 0; i < robot_material[num].length; i++){ // 재료 부족한 거지 컷
        SD[robot_material[num][i]][0] -= robot_price[num][i]; }
    SD[robot_result[num]] += 1;
    add_log("일반 채광 로봇 제작 완료");
    
    store(1); // 주괴
    store(2); // 합금
    store(3); // 조합템
    store(4); // 오버로드 템
}