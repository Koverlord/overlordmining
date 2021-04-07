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

// UGS : { //SD['UGS']
//     0 : { //SD['UGS'][num]
//         name : "한번에 얻는 광물 개수 증가",
//         material : ["철", "SD['iron']"],
//         level : 0,
//         max_level : "-1",
//         price : 50,
//         price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((50 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 25) * SD['udc'])",           //eval() 이용해서 결제할것
//         result : [
//             ["SD['a']", "(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"],
//         ]
//     },
//     1 : {
//         name : "이중 채광 확률 증가",
//         material : ["금", "SD['gold']"],
//         level : 0,
//         max_level : "100",
//         price : "50",
//         price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((50 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 25) * SD['udc'])",
//         result : [
//             ["SD.doubleminingposs", ["SD['UGS'][num]['level']"]]
//         ],
//     },
//     2 : {
//         name : "한번에 얻는 금속 개수 증가",
//         material : ["에메랄드", "SD['emerald']"],
//         level : 0,
//         max_level : -1,
//         price : "20",
//         price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((200 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 100) * SD['udc'])",
//         result : [
//             ["SD['c']", ["(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"]]
//         ],
//     },
//     3 : {
//         name : "한번에 얻는 보석 개수 증가",
//         material : ["루비", "SD['ruby']"],
//         level : 0,
//         max_level : -1,
//         price : "20",
//         price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((200 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 100) * SD['udc'])",
//         result : [
//             ["SD['d']", ["(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"]]
//         ],
//     },
//     4 : {
//         name : "오버로드 출현 확률 증가",
//         material : ["오버로드 주괴", "SD['overlordingot']"],
//         level : 0,
//         max_level : 99,
//         price : "5",
//         price_equation : "SD[\'UGS\'][num][\'price\'] = 5",
//         result : [
//             ["overlordposs", ["SD['UGS'][num]['level'] + 1"]]
//         ],
//     },
//     5 : { // 나중에 분리 예정
//         name : "한번에 조합하는 일반 아이템 개수 증가",
//         material : ["다이아몬드","SD['diamond']"],
//         level : 0,
//         max_level : 4,
//         price : 2000,
//         price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((2000 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 1000) * SD.udc)",
//         result : [
//             ["SD.b", "SD['UGS'][num]['level'] + 1"]
//         ]
//     },
//     // num : { // 사용시 '복사'해서 컨트롤 + /(슬래쉬)로 주석해제
//     //     name : "", //SD.UGS.[num].name
//     //     material : ["재료이름", "재료경로"],
//     //     level : 0,
//     //     max_level : -1, //만렙, 최고레벨 적고, 제한 없을 경우 -1
//     //     price : "필요한 재료 갯수(숫자)",
//     //     price_equation : "SD[\'UGS\'][num][\'price\'] = 수식",
//     //     result : [
//     //         ["업그레이드로 바뀔것", ["업그레이드로 바뀌게할 수식"]]
//     //     ],
//     // },
// },
// 
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
