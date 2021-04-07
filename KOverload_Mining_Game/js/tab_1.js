//탭1 - 업그레이드
//작동 안할꺼임

//UGS 변수
let UGS_price = []; // 가격
const UGS_maxlvl = [-1]; // 최고 레벨 (-1은 레벨제한 없음)

function UGS_load(num) {
    let y = document.getElementsByClassName("UGS_list");
    let UGS_text = "";
    switch (num) { //가격계산
        case 0: // 한번에 얻는 광물 개수 증가
        UGS_price[num] = parseInt((50 + SD.UGS_lvl[num] * (SD.UGS_lvl[num] + 1) * 25) * SD.udc);
        SD.a = (parseInt((SD.UGS_lvl[num] + 1)/5) * - 5 + 2 * SD.UGS_lvl[num] + 2) * (parseInt((SD.UGS_lvl[num] + 1) / 5) + 1) / 2;
        UGS_text += "한번에 얻는 광물 개수 증가. level : " + SD.UGS_lvl[num] + "<br>";
        UGS_text += "업그레이드 재료 : " + Name["iron"] + " " + UGS_price[num];
        break;
        
    }
    y[num].innerHTML = UGS_text;
}

function upgrade(num) {
    switch (num) {
        case 0: // 한번에 얻는 광물 개수 증가
        if (SD.iron >= UGS_price[num] && SD.UGS_lvl[num] / UGS_maxlvl < 1) { // 보유재화 =< 필요재화 확인 && 만렙 > 현제레벨 확인, 만렙=-1(렙제없음)은 음수가 나옴(<1)
            SD.iron = SD.iron - UGS_price[num]; // 재화 소모
                SD.UGS_lvl[0]++; // 레벨업
                add_log("업그레이드 성공!");
            }
            else {
                UGS_fail(num);
            }
            break;

        // case num:
        //     코드
        //     break;            
    }

    //SD.UGS_lvl[num] // 레벨

    UGS_load(num);
    store();
}

function UGS_fail(num) {
    if (SD.UGS_lvl[num] == UGS_maxlvl) {
        add_log("최고 레벨입니다");
    }
    else {
        add_log("재료가 부족합니다"); //만렙이 아닌데 이메시지뜨면 잘못된것
    }
}

// 0 : { //SD['UGS'][num]
//     name : "한번에 얻는 광물 개수 증가",
//     material : ["철", "SD['iron']"],
//     level : 0,
//     max_level : "-1",
//     price : 50,
//     price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((50 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 25) * SD['udc'])",           //eval() 이용해서 결제할것
//     result : [
//         ["SD['a']", "(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"],
//     ]
// },

// function UGS_load(num) {
//     var y = document.getElementsByClassName("UGS_list");
//     eval(SD["UGS"][num]["price_equation"]); // 가격 레벨에 맞게 업데이트
//     eval(SD["UGS"][num]["result"][0][0] + "=" + SD["UGS"][num]["result"][0][1]); // 다음레벨에 필요한 재료 갯수 업데이트
//     var upgrade_text = " "
//     upgrade_text += SD["UGS"][num]["name"] + " level : " + SD["UGS"][num]["level"] + "<br>";
//     upgrade_text += "업그레이드 재료 : "+ SD["UGS"][num]["material"][0] + " " + SD["UGS"][num]["price"] + "개<br>";
//     y[num].innerHTML = upgrade_text;
// }

// function upgrade(num) {
//     if ((SD["UGS"][num]["level"] < SD["UGS"][num]["max_level"]) || (SD["UGS"][num]["max_level"] == -1)){
//         if (eval(SD["UGS"][num]["material"][1]) >= SD["UGS"][num]["price"]) { // 필요한 재료 >= 가격 일때
//             eval(SD["UGS"][num]["material"][1] + "-=" + SD["UGS"][num]["price"]); // 필요한 재료 -= 가격
//             SD["UGS"][num]["level"] += 1; // 레벨 증가
//             //밑에 2줄은 UGS_load(num)으로 옮김
//             // eval(SD["UGS"][num]["price_equation"]); // 가격 조정
//             // eval(SD["UGS"][num]["result"][0][0] + "=" + SD["UGS"][num]["result"][0][1]); // 다음레벨에 필요한 재료 갯수
//             store();
//             UGS_load(num);
//             add_log("업그레이드!");
//         }
//         else{
//             add_log("업글 불가 (재료)");
//         }
//     }
//     else {
//         add_log("업글 불가 (레벨)");
//     }
// }
