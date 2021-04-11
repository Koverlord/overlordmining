//탭1 - 업그레이드

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

//UGS 변수
let UGS_price = []; // 가격
const UGS_maxlvl = [-1, 100, -1, -1, 99, 4, -1]; // 최고 레벨 (-1은 레벨제한 없음) //6번 최고레벨 추가 바람
let UGS_material = ["iron_ingot", "gold_ingot", "emerald", "ruby", "overlord_ingot", "diamond", "iron_ingot"]; // 미네랄

function UGS_load(num) {
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
            UGS_price[num] = 5 * SD.UGS_lvl[num];
            SD.overlord_poss = SD.UGS_lvl[num] + 1;
            UGS_text += "오버로드 출현 확률 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 5: // 한번에 조합하는 일반 아이템 개수 증가
            UGS_price[num] = parseInt((2000 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 1000) * SD.udc);
            SD.b = SD.UGS_lvl[num] + 1;
            UGS_text += "한번에 조합하는 일반 아이템 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;
        case 6: // 한번에 제련하는 광물 개수 증가
            UGS_price[num] = parseInt((50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25) * SD.udc);
            SD.melt_count = (parseInt((SD.UGS_lvl[num] + 1)/5) * - 5 + 2 * SD.UGS_lvl[num] + 2) * (parseInt((SD.UGS_lvl[num] + 1) / 5) + 1) / 2;
            UGS_text += "한번에 제련하는 광물 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
            break;

        // case num: // 설명
        //     UGS_price[num] = 가격 결정 식;
        //     결과 = 결과 결정 식;
        //     UGS_text += "업글 내용. level : " + SD.UGS_lvl[num] + "<br>";
        //     break;
        
    }
    UGS_text += "업그레이드 재료 : " + Name[UGS_material[num]] + " " + UGS_price[num] + "개";
    UGS_list[num].innerHTML = UGS_text;

}

function upgrade(num) {
    if (SD[UGS_material[num]] >= UGS_price[num] && SD.UGS_lvl[num] / UGS_maxlvl[num] < 1) { // 보유재화 =< 필요재화 확인 && 만렙 > 현제레벨 확인, 만렙=-1(렙제없음)은 음수가 나옴(<1)
        SD[UGS_material[num]] = SD[UGS_material[num]] - UGS_price[num]; // 재화 소모
        SD.UGS_lvl[num]++; // 레벨업
        add_log("업그레이드 성공!");
    }
    else if (SD.UGS_lvl[num] == UGS_maxlvl[num]) {
        add_log("최고 레벨입니다");
    }
    else {
        add_log("재료가 부족합니다"); //만렙이 아닌데 이메시지뜨면 잘못된것
    }
    UGS_load(num);
    store(0); // 광물
    store(1); // 주괴
    store(4); // 오버로드
}
