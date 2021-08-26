//탭1 - 강화

tab_UGS_num = 0;
function tab_UGS(num) {
    let tab_UGS_list = document.getElementsByClassName("tab_UGS")
    let UGS_list = document.getElementsByClassName("UGS");
    tab_UGS_list[tab_UGS_num].className = "tab_UGS not_active";
    UGS_list[tab_UGS_num].style.display = "none";
    tab_UGS_list[num].className = "tab_UGS active";
    UGS_list[num].style.display = "block";
    tab_UGS_num = num;
    UGS_load(num);
}

const special_material = {
    7 : ['iron_ingot', 'enchanted_overlord_ingot']
};

const special_price = {
    7 : ['500', '5']
};

let UGS_price = []; // 가격
const UGS_maxlvl = [-1, 100, -1, -1, 19, 4, -1, 2, 9]; // 최고 레벨 (-1은 레벨제한 없음)
let UGS_material = {
    0 : 'iron_ingot',
    1 : 'gold_ingot',
    2 : 'emerald',
    3 : 'ruby',
    4 : 'overlord_ingot',
    5 : 'diamond',
    6 : 'iron_ingot',
    7 : 'iron_ingot',
    8 : ['alloy_iron_gold', 'pipe', 'extract_engine', 'overlord_ingot']
};

function UGS_load(num) { // 업그레이드 상점 로드 시에 가격 텍스트 표시, 가격 갱신 함수
    let UGS_list = document.getElementsByClassName("UGS_list");
    let UGS_text = "";
    switch (num) {
        case 0: // 한번에 얻는 광물 개수 증가
            UGS_price[num] = parseInt((50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25) * SD.udc);
            SD.a = (parseInt((SD.UGS_lvl[num] + 1)/5) * - 5 + 2 * SD.UGS_lvl[num] + 2) * (parseInt((SD.UGS_lvl[num] + 1) / 5) + 1) / 2;
            UGS_text += "한번에 얻는 광물 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;

        case 1: // 이중 채광 확률 증가
            UGS_price[num] =parseInt((50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25) * SD.udc);
            SD.doubleminingposs =  SD.UGS_lvl[num];
            UGS_text += "이중 채광 확률 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 2: // 한번에 얻는 금속 개수 증가
            UGS_price[num] = parseInt((50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25) * SD.udc);
            SD.c = (parseInt((SD.UGS_lvl[num] + 1)/5) * - 5 + 2 * SD.UGS_lvl[num] + 2) * (parseInt((SD.UGS_lvl[num] + 1) / 5) + 1) / 2 - 1;
            UGS_text += "한번에 얻는 금속 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 3: // 한번에 얻는 보석 개수 증가
            UGS_price[num] = parseInt((50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25) * SD.udc);
            SD.d = (parseInt((SD.UGS_lvl[num] + 1)/5) * - 5 + 2 * SD.UGS_lvl[num] + 2) * (parseInt((SD.UGS_lvl[num] + 1) / 5) + 1) / 2 - 1;
            UGS_text += "한번에 얻는 보석 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 4: // 오버로드 출현 확률 증가
            UGS_price[num] = parseInt((5 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 2.5) * SD.udc);
            SD.overlord_poss = SD.UGS_lvl[num] + 1;
            UGS_text += "오버로드 출현 확률 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 5: // 한번에 조합하는 일반 아이템 개수 증가
            UGS_price[num] = parseInt((2000 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 1000) * SD.udc);
            SD.b = SD.UGS_lvl[num] + 1;
            UGS_text += "한번에 조합하는 일반 아이템 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 6: // 한번에 제련하는 광물 개수 증가
            UGS_price[num] = parseInt(50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25);
            SD.melt_count = (parseInt((SD.UGS_lvl[num] + 1)/5) * - 5 + 2 * SD.UGS_lvl[num] + 2) * (parseInt((SD.UGS_lvl[num] + 1) / 5) + 1) / 2;
            UGS_text += "한번에 제련하는 광물 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 7: // 광물 1개당 주괴 수 증가
            UGS_material[7] = special_material['7'][SD.UGS_lvl['7']];
            UGS_price[num] = special_price['7'][SD.UGS_lvl[num]];
            SD.melt_multiply = SD.UGS_lvl[num] + 1;
            UGS_text += "광물 1개당 주괴 수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 8: // 오버로드 1개당 추출 아이템 수 증가
            UGS_price[num] = [];
            UGS_price[num][0] = parseInt((SD.UGS_lvl[num] + 1) * 500);
            UGS_price[num][1] = parseInt(50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25);
            UGS_price[num][2] = parseInt(20 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 10);
            UGS_price[num][3] = parseInt(50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 450);
            SD.extractor_level = SD.UGS_lvl[num] + 1;
            UGS_text += "오버로드 1개당 추출 아이템 수 증가. level : " + SD.UGS_lvl[num] + "<br>";
        // case num: // 설명
        //     UGS_price[num] = 가격 결정 식;
        //     결과 = 결과 결정 식;
        //     UGS_text += "업글 내용. level : " + SD.UGS_lvl[num] + "<br>";
        //     break;
        
    }
    if (SD.UGS_lvl[num] == UGS_maxlvl[num]) { // 최고 레벨은 업그레이드 불가
        UGS_text += "최고 레벨입니다"
    }
    else {
        final_text = ""
        if (num == 8){ // 이 업그레이드는 재료가 여러 개라서 특별처리
            for(let i = 0; i < UGS_material[num].length; i++){
                final_text += Name[UGS_material[num][i]] + " " + UGS_price[num][i] + "개 "
                } 
        }
        else {final_text +=Name[UGS_material[num]] + " " + UGS_price[num] + "개 "}
        UGS_text += "강화 재료 : " + final_text
    }
    UGS_list[num].innerHTML = UGS_text;

}

function upgrade(num) {
    if (num == 8) { // 특별처리
        if (SD.UGS_lvl[num] == UGS_maxlvl[num]) {
            add_log("최고 레벨입니다");
            return;
        }
        for (let i = 0; i < UGS_material[num].length; i++){ // 재료 부족한 거지 컷
            if (SD[UGS_material[num][i]] < UGS_price[num][i]) {
                add_log("재료가 부족합니다");
                return;
            }
        }
        for (let i = 0; i < UGS_material[num].length; i++) {
            SD[UGS_material[num][i]] -= UGS_price[num][i];
        }
        SD.UGS_lvl[num]++;
        add_log("강화 성공");
    }
    else {
        if (SD[UGS_material[num]] >= UGS_price[num] && SD.UGS_lvl[num] / UGS_maxlvl[num] < 1) { // 보유재화 =< 필요재화 확인 && 만렙 > 현제레벨 확인, 만렙=-1(렙제없음)은 음수가 나옴(<1)
            SD[UGS_material[num]] = SD[UGS_material[num]] - UGS_price[num]; // 재화 소모
            SD.UGS_lvl[num]++; // 레벨업
            add_log("강화 성공!");
        }
        else if (SD.UGS_lvl[num] == UGS_maxlvl[num]) {
            add_log("최고 레벨입니다");
        }
        else {
            add_log("재료가 부족합니다"); //재료부족이 아닌데 이메시지뜨면 잘못된것
        }
    }
    UGS_load(num);
    store(0); // 광물
    store(1); // 주괴
    store(2); // 합금
    store(3); // 조합템
    store(4); // 오버로드
    var_init()
}

