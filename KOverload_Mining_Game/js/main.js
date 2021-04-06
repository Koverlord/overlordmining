//탭0, 메인

function tab(num) { //num번째 탭으로 전환
    let tab_size = 6;
    let x = document.getElementsByClassName("tab_menu");
    for (i = 0; i < tab_size; i++) {
        document.getElementById("tab" + i).style.display = "none";
        x[i].className = "tab_menu not_active";
    }
    document.getElementById("tab" + num).style.display = "block";
    x[num].className = "tab_menu active";
}

var n = 0;
function add_log(log) { // log를 id="log"인 div에 추가함
    n++;
    var x = document.createElement("p");
    x.innerHTML = log;
    x.setAttribute("id", "scroll_" + n);
    document.getElementById("log").append(x);
    document.getElementById("scroll_" + n).scrollIntoView(true);
}

function store() {  //광물 보유량 업데이트
    var Store = "";
    Store += "<p>철 " + SD.iron + "개</p>";
    Store += "<p>금 " + SD.gold + "개</p>";
    Store += "<p>다이아몬드 " + SD.diamond + "개</p>";
    Store += "<p>에메랄드 " + SD.emerald + "개</p>";
    Store += "<p>루비 " + SD.ruby + "개</p>";
    Store += "<p>오버로드 " + SD.overlord + "개</p>";
    Store += "<p>철괴 " + SD.iron_ingot +"개</p>";
    Store += "<p>금괴 " + SD.gold_ingot +"개</p>";
    document.getElementById("storehouse").innerHTML = Store 
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
    for (i = 0; i < repeatmining; i++){
        var r_n = Math.floor(Math.random() * (100)) + 1; // 1 ~ 100 사이의 정수 랜덤생성
        var r_no = Math.floor(Math.random() * (100)) + 1;
        if (r_n > 50){
            SD['iron'] += (SD['a'] + SD['c']) * rep;
            add_log("철 " + (SD.a + SD.c) * rep + "개 획득! 현재 " + SD.iron + "개");
        }
        else if (r_n > 20){
            SD['gold'] += (SD['a'] + SD['c']) * rep;
            add_log("금 " + (SD['a'] + SD['c']) * rep + "개 획득! 현재 " + SD.gold + "개");
        }
        else if (r_n > 10){
            SD['diamond'] += (SD['a'] + SD['d']) * rep;
            add_log("다이아몬드 " + (SD['a'] + SD['d']) * rep + "개 획득! 현재 " + SD.diamond + "개");
        }
        else if (r_n > 5){
            SD['emerald'] += (SD['a'] + SD['d']) * rep;
            add_log("에메랄드 " + (SD['a'] + SD['d']) * rep + "개 획득! 현재 " + SD.emerald + "개");
        }
        else if (r_n > 0){
            SD['ruby'] += (SD['a'] + SD['d']) * rep;
            add_log("루비 " + (SD.a + SD.d) * rep + "개 획득! 현재 " + SD.ruby + "개");
        }
        if (r_no <= SD.overlordposs){
            SD['overlord'] += (SD['a'] * SD['f']) * rep;
            add_log("오버로드 " + (SD.a * SD.f) * rep + "개 획득! 현재 " + SD.overlord + "개");
        }
    }
    store(); // 광질 한 후 보유량 업데이트
}

window.onload = function () { // 페이지가 다 load 되면 load()함수 실행
    load();
}
