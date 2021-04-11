//탭0, 메인

function tab(num) { //num번째 탭으로 전환
    const tab_size = document.getElementsByClassName("tab_menu").length;
    let tab_list = document.getElementsByClassName("tab_menu");
    for (i = 0; i < tab_size; i++) {
        document.getElementById("tab" + i).style.display = "none";
        tab_list[i].className = "tab_menu not_active";
    }
    document.getElementById("tab" + num).style.display = "block";
    tab_list[num].className = "tab_menu active";
}

tab_store_num = 0;
function tab_store(num) {
    let tab_store_list = document.getElementsByClassName("tab_store")
    let store_list = document.getElementsByClassName("store");
    tab_store_list[tab_store_num].className = "tab_store not_active";
    store_list[tab_store_num].style.display = "none";
    tab_store_list[num].className = "tab_store active";
    store_list[num].style.display = "block";
    tab_store_num = num;
    store(num);
}

var n = 0;
function add_log(log) { // log를 id="log"인 div에 추가함
    n++;
    var log_line = document.createElement("p");
    log_line.innerHTML = log;
    log_line.setAttribute("id", "scroll_" + n);
    document.getElementById("log").append(log_line); // log 에 내용 추가
    document.getElementById("scroll_" + n).scrollIntoView(true);
}

let store_list = document.getElementsByClassName("store");
function store(num) {  //스토어 업데이트
    var store_text = "";
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
            store_text += "강화 오버로드 주괴 " + SD.enchantedoverlordingot + "개<br>";
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
            store_text += "강화 오버로드 주괴 " + SD.enchantedoverlordingot + "개<br>";
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

var repeatmining = 1;
function mining(rep) { // 광질
    if (Math.random() < (SD.doubleminingposs / 100)) { // 0~1 사이의 난수 생성후 doubleminingposs/100 보다 적을경우 2배 채광 (doubleminingposs% 확률임)
        repeatmining = 2;
        add_log("한번 더 채광!")
    }
    else {
        repeatmining = 1;
    }
    for (i = 0; i < repeatmining; i++) {
        var r_n = Math.floor(Math.random() * (100)) + 1; // 1 ~ 100 사이의 정수 랜덤생성
        var r_no = Math.floor(Math.random() * (100)) + 1;
        if (r_n > 50) {
            SD['iron'] += (SD['a'] + SD['c']) * rep;
            add_log("철 " + (SD.a + SD.c) * rep + "개 획득! 현재 " + SD.iron + "개");
        }
        else if (r_n > 20) {
            SD['gold'] += (SD['a'] + SD['c']) * rep;
            add_log("금 " + (SD['a'] + SD['c']) * rep + "개 획득! 현재 " + SD.gold + "개");
        }
        else if (r_n > 10) {
            SD['diamond'] += (SD['a'] + SD['d']) * rep;
            add_log("다이아몬드 " + (SD['a'] + SD['d']) * rep + "개 획득! 현재 " + SD.diamond + "개");
        }
        else if (r_n > 5) {
            SD['emerald'] += (SD['a'] + SD['d']) * rep;
            add_log("에메랄드 " + (SD['a'] + SD['d']) * rep + "개 획득! 현재 " + SD.emerald + "개");
        }
        else if (r_n > 0) {
            SD['ruby'] += (SD['a'] + SD['d']) * rep;
            add_log("루비 " + (SD.a + SD.d) * rep + "개 획득! 현재 " + SD.ruby + "개");
        }
        
        if (r_no <= SD.overlord_poss) {
            SD['overlord'] += (SD['a'] * SD['f']) * rep;
            add_log("오버로드 " + (SD.a * SD.f) * rep + "개 획득! 현재 " + SD.overlord + "개");
        }
    }
    store(0); // 광물
    store(4); // 오버로드
}

function Tab_size() {
    const tab_size = document.getElementsByClassName("tab_menu").length;
    let table_main_size = parseInt(document.getElementById("table_main").offsetWidth);
    for (i = 0; i < tab_size; i++) {
        document.getElementById("tab" + i).style.width = table_main_size - 28 + "px";
    }
}

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = 'It looks like you have been editing something. '
                            + 'If you leave before saving, your changes will be lost.';

    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
});

window.onload = function () { // 페이지가 다 load 되면 load()함수 실행
    load();
    Tab_size();
}
