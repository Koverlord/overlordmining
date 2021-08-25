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
    if (num == 2) {
        melt_text()
    }
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

    const store_goods = [
        [
            "iron",
            "gold",
            "diamond",
            "emerald",
            "ruby",
            "overlord",
            "crystal",
            "mythrill",
            "orichalcum",
            "adamantite",
            "legend_ore",
        ],
        [
            "iron_ingot",
            "gold_ingot",
            "overlord_ingot",
            "enchanted_overlord_ingot",
            "mythrill_ingot",
        ],
        [
            "alloy_iron_gold",
        ],
        [
            "pipe",
            "extract_engine",
            "robot_body",
            "circuit",
            "CPU",
            "mining_drill",
        ],
        [
            "overlord",
            "overlord_essence",
            "overlord_scrap",
            "overlord_part",
            "overlord_ingot",
            "overlord_soul",
            "enchanted_overlord_ingot",
        ],
    ];

    store_text += "<p>";
    store_goods[num].forEach(i => store_text += `${Name[i]} ${toNotation(`${SD[i]}`)} 개<br>`);
    store_text += "</p>";
    store_list[num].innerHTML = store_text;
}

// ["광물", 확률, 변수1, 변수2] = 광물을 확률에 따라 변수1 + 변수2 만큼 회득
// 주사위는 각각 독립된 확률을 의미함
// 광산은 말그대로 광산끼리 나눈거
let MI = [];
function var_init() { // 변수 초기화 variable_initialization
    MI = [ // mine_information
        [ // 0번째 광산 : 일반
            [ // 0번째 주사위 : 광물
                ["iron", 50, SD.a + SD.c],
                ["gold", 30, SD.a + SD.c],
                ["diamond", 10, SD.a + SD.d],
                ["emerald", 5, SD.a + SD.d],
                ["ruby", 5, SD.a + SD.d]
            ],
            [ // 1번째 주사위 : 오버로드
                ["overlord", SD.overlord_poss, SD.a * SD.f],
                ["nothing", 100 - SD.overlord_poss, 0]
            ]
        ],
        [ // 1번째 광산 : 전설
            [ // 0번째 주사위 : 광물
                ["nothing", 399, SD.e],
                ["crystal", 300, SD.e],
                ["mythrill", 150, SD.e],
                ["orichalcum", 100, SD.e],
                ["adamantite", 50, SD.e],
                ["legend_ore", 1, SD.e],
            ]
        ],
        [ // 2번째 광산 : 보석
            [ // 0번째 주사위 : 광물
                ["diamond", 40, parseInt((SD.a + SD.d) / 3)],
                ["emerald", 25, parseInt((SD.a + SD.d) / 3)],
                ["ruby", 25, parseInt((SD.a + SD.d) / 3)],
                ["nothing", 10, SD.a],
            ]
        ]
        // [
        //     [
        //         []
        //     ]
        // ]
    ];
}


function mine(num , multi = 1) {
    let rep_mine;
    if (Math.random() < (SD.doubleminingposs / 100)) { // 0~1 사이의 난수 생성후 doubleminingposs/100 보다 적을경우 2배 채광 (doubleiningposs%)
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
                        SD[MI[num][k][i][0]] += parseInt(MI[num][k][i][2] * multi);
                        add_log((Name[MI[num][k][i][0]]+ " " + parseInt(MI[num][k][i][2] * multi) + "개 획득! 현재 " + SD[MI[num][k][i][0]] + "개"));
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

Math.floorAt = function(num, at) {
    return Math.floor(num/(10**at))*(10**at)
}

function toNotation(num) {
    if (num == 0) {
        return 0;
    }
    nth = Math.floor(Math.log10(num)/3)
    unit = ["", "K", "M", "B", "T"]
    return `${Math.floorAt(num/(1000**nth), -3)}${unit[nth]}`
}

function update() { // 버전 올릴때 default_SD.version 도 같이 올릴것
    switch (SD.version) {
        case 0:
            SD.legend_ore = SD.legendarium;
            //SD.legendarium = 0;
            SD.auto_mining_time = 5000;
            if (SD.UGS_lvl[4] >= 19) {
                SD.UGS_lvl[4] = 19;
            }
            SD.version = 1;
        //case 1:
            // 패치 1
        //case 2:
            //패치 2
        //case 3:
            //패치 3
            break;
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
    update();
}
