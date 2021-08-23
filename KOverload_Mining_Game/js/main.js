//탭0, 메인

let tab_menu_num = 0; // 전역변수
function tab_menu(num) {
    const tab_menu_list = document.getElementsByClassName("tab_menu")
    const menu_list = document.getElementsByClassName("menu");
    tab_menu_list[tab_menu_num].className = "tab_menu not_active";
    menu_list[tab_menu_num].style.display = "none";
    tab_menu_list[num].className = "tab_menu active";
    menu_list[num].style.display = "block";
    tab_menu_num = num;
}

let tab_store_num = 0; // 전역변수
function tab_store(num) {
    const tab_store_list = document.getElementsByClassName("tab_store")
    const store_list = document.getElementsByClassName("store");
    tab_store_list[tab_store_num].className = "tab_store not_active";
    store_list[tab_store_num].style.display = "none";
    tab_store_list[num].className = "tab_store active";
    store_list[num].style.display = "block";
    tab_store_num = num;
    store(num);
}

let tab_mine_num = 0; // 전역변수
function tab_mine(num) {
    const tab_mine_list = document.getElementsByClassName("tab_mine")
    tab_mine_list[tab_mine_num].className = "tab_mine not_active";
    tab_mine_list[num].className = "tab_mine active";
    tab_mine_num = num;
    document.getElementById("button_mine").setAttribute("onclick", "mine(" + num + ")")
}

let n = 0; // 전역변수
function add_log(log) { // log를 id="log"인 div에 추가함
    n++;
    var log_line = document.createElement("p");
    log_line.innerHTML = log;
    log_line.setAttribute("id", "scroll_" + n);
    document.getElementById("log").append(log_line); // log 에 내용 추가
    document.getElementById("scroll_" + n).scrollIntoView(true);
    var log_remove = document.getElementById("scroll_" + (n - 100)); //로그 100개 넘으면 삭제됨
    if (n > 100) {
        document.getElementById("log").removeChild(log_remove);
    }
}

const store_list = document.getElementsByClassName("store");
function store(num) {  //스토어 업데이트
    let store_text = "";
    if (!num == tab_store_num) {
        return;
    }
    switch (num) {
        case 0: //광물
            store_text += "<p>";
            store_text += "철 " + SD.iron + "개<br>";
            store_text += "금 " + SD.gold + "개<br>";
            store_text += "다이아몬드 " + SD.diamond + "개<br>";
            store_text += "에메랄드 " + SD.emerald + "개<br>";
            store_text += "루비 " + SD.ruby + "개<br>";
            store_text += "오버로드 " + SD.overlord + "개<br>";
            store_text += "</p>";
            break;
        case 1: //주괴
            store_text += "<p>";
            store_text += "철 주괴 " + SD.iron_ingot + "개<br>";
            store_text += "금 주괴 " + SD.gold_ingot + "개<br>";
            store_text += "오버로드 주괴 " + SD.overlord_ingot + "개<br>";
            store_text += "강화 오버로드 주괴 " + SD.enchanted_overlord_ingot + "개<br>";
            store_text += "</p>";
            break;        
        case 2: //합금
            store_text += "<p>";
            store_text += "철-금 합금 " + SD.alloy_iron_gold + "개<br>";
            store_text += "</p>";
            break;        
        case 3: //조합
            store_text += "<p>";
            store_text += "파이프 " + SD.pipe + "개<br>";
            store_text += "추출 엔진 " + SD.extract_engine + "개<br>";
            store_text += "로봇 몸체 " + SD.robot_body + "개<br>";
            store_text += "회로 " + SD.circuit + "개<br>";
            store_text += "CPU " + SD.CPU + "개<br>";
            store_text += "드릴 " + SD.mining_drill + "개<br>";
            store_text += "</p>";
            break;    
        case 4: // 오버로드
            store_text += "<p>";
            store_text += "오버로드 " + SD.overlord + "개<br>";
            store_text += "오버로드의 정수 " + SD.overlord_essence + "개<br>";
            store_text += "오버로드의 파편 " + SD.overlord_scrap + "개<br>";
            store_text += "오버로드의 조각 " + SD.overlord_part + "개<br>";
            store_text += "오버로드 주괴 " + SD.overlord_ingot + "개<br>";
            store_text += "오버로드의 영혼 " + SD.overlord_soul + "개<br>";
            store_text += "강화 오버로드 주괴 " + SD.enchanted_overlord_ingot + "개<br>";
            store_text += "</p>";
            break;
        // case n:
        //     store_text += "<p>";
        //     store_text += "";
        //     store_text += "</p>";
        //     break;
    }
    store_list[num].innerHTML = store_text;

    //최적화 하자면 업데이트를 전체를 하는게 아니라 수정된 자원이 있는 줄만 replace로 수정하면 될듯
}

// ["광물", 확률, 변수1, 변수2] = 광물을 확률에 따라 변수1 + 변수2 만큼 회득
// 주사위는 각각 독립된 확률을 의미함
// 광산은 말그대로 광산끼리 나눈거
let MI = [];
function var_init() { // 변수 초기화 variable_initialization
    MI = [ // mine_information
        [ // 0번째 광산 : 일반
            [ // 0번째 주사위 : 광물
                ["iron", 50, SD.a, SD.c],
                ["gold", 30, SD.a, SD.c],
                ["diamond", 10, SD.a, SD.d],
                ["emerald", 5, SD.a, SD.d],
                ["ruby", 5, SD.a, SD.d]
            ],
            [ // 1번째 주사위 : 오버로드
                ["overlord", SD.overlord_poss, SD.a, SD.f],
                ["nothing", 100 - SD.overlord_poss, 0, 0]
            ]
        ],
        [ // 1번째 광산 : 전설
            [ // 0번째 주사위 : 광물
                ["nothing", 90, SD.e, 0],
                ["mythrill", 5, SD.e, 0],
                ["orichalcum", 4, SD.e, 0],
                ["adamantite", 1, SD.e, 0],
            ]
        ]
        // [
        //     [
        //         []
        //     ]
        // ]
    ];
}


function mine(num , mult = 1) {
    let rep_mine;
    if (Math.random() < (SD.doubleminingposs / 100)) { // 0~1 사이의 난수 생성후 doubleminingposs/100 보다 적을경우 2배 채광 (doubleminingposs%)
        rep_mine = 2;
        add_log("이중 채광!")
    }
    else {
        rep_mine = 1;
    }
    for (j = 0; j < rep_mine; j++) {
        for (k in MI[num]) { // 주사위
            let sum_percent = 0;
            for (i in MI[num][k]) { // 확률 합 구하기
                sum_percent += MI[num][k][i][1];
            }
            let RM = parseInt(Math.random() * (sum_percent)) // RM = random_number, 0 ~ sum_percent - 1 사이의 정수인 난수 생성
            for (i in MI[num][k]) { // 가챠
                if (MI[num][k][i][1] > RM) {
                    if (MI[num][k][i][0] == "nothing") {;
                        
                    }
                    else {
                        SD[MI[num][k][i][0]] += (parseInt(MI[num][k][i][2] + MI[num][k][i][3]) * mult);
                        add_log((Name[MI[num][k][i][0]]+ " " + parseInt(MI[num][k][i][2] + MI[num][k][i][3]) * mult) + "개 획득! 현재 " + SD[MI[num][k][i][0]] + "개");
                    }
                    break;
                }
                RM -= MI[num][k][i][1];
            }
        }
        for (i = 0; i < store_list.length; i++){
            store(i);
        }
    }
}

function Tab_size() { // 메뉴 사이즈 조정
    const tab_size = document.getElementsByClassName("tab_menu").length;
    let table_main_size = parseInt(document.getElementById("table_main").offsetWidth);
    for (i = 0; i < tab_size; i++) {
        document.getElementsByClassName("menu")[i].style.width = table_main_size - 28 + "px";
    }
}

function unlock(Key) {
    let lock = document.getElementById("unlock_" + Key);
    if (!SD.unlock[Key]) {
        lock.style.display = "none";
    }
    else {
        lock.style.display = "block";
    }
}

window.addEventListener("beforeunload", function (e) { // 새로고침 경고문
    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});

window.onload = function () { // 페이지가 다 load 되면 load()함수 실행
    load();
    Tab_size();
    var_init();
    SD.Auto_Save = !SD.Auto_Save;
    auto_save();
    if (SD.robot_maker == 1) {
        SD.Auto_Mine = 1;
        auto_mine();
    }
}
