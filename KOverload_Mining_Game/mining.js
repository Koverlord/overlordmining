var saveData = {
    iron : 0,
    gold : 0,
    diamond : 0,
    emerald : 0,
    ruby : 0,
    overlord : 0,
    upgrade1 : 50,
    purchased1 : 0,
    upgrade2 : 2000,
    purchased2 : 0,
    upgrade3 : 5,
    purchased3 : 0,
    a : 1,
    b : 1,
    irongold : 0,
    extractpipe : 0,
    engine : 0,
    emitpipe : 0,
    extractor : 0,
    overlordscrap : 0,
    overlordpart : 0,
    overlordingot : 0,
    overlordessence : 0,
    overlordsoul : 0,
    overlordposs : 1,
    extractorlevel : 1,
    exupgrade1 : 20,
    exupgrade2 : 5,
    expurchased : 0,
    upgrade4 : 50,
    purchased4 : 0,
    doubleminingposs : 0,
    enchantedoverlordingot : 0,
    autominetime : 10,
    robotmaker : 0,
    minepower : 0,
    circuit : 0,
    upgrade5 : 400,
    purchased5 : 0,
    upgrade6 : 200,
    purchased6 : 0,
    c : 0,
    d : 0,
    maxrobot : 5,
    robotbody : 0,
    CPU : 0,
    miningdrill : 0,
    robotcount : 0,
    commonminingrobot : 0,
    commonexcavatorrobot : 0,
    robotupgrade1 : 50,
    robotpurchased1 : 0,
    mythmineticket : 0,
    mythrill : 0,
    orichalcum : 0,
    adamantite : 0,
    udc : 1,
    mythupgrade1 : 10,
    mythpurchased1 : 0,
    mythupgrade2 : 10,
    mythpurchased2 : 0,
    mythupgrade3 : 10,
    mythpurchased3 : 0,
    e : 1,
    f : 1,
}

function save() { // 세이브
    localStorage['saveFile'] = JSON.stringify(saveData);
    add_log("*세이브되었습니다*");
}

function load() { // 로드
    saveData = JSON.parse(localStorage['saveFile']);
    add_log("*로드되었습니다*");
    store();
}

var n = 0;

function add_log(log) { // log를 id="log"인 div에 추가함
    n++;
    var x = document.createElement("p");    //<p></p> 만들고 x 라고하자
    x.innerHTML = log;                      //안에는 log 넣음 -> <p>log</p>
    x.setAttribute("id", "scroll" + n)      //태그 p의 id="scroll" + n 로 설정, 아이디 붙이는 이유는 자동 스크롤을 위함
    document.getElementById("log").append(x);   //id="log"인 div의 마지막에 위에 만든 x를 넣어줌
    document.getElementById("scroll" + n).scrollIntoView(true);     //최근에 써진 로그로 스크롤해줌
}

function store() {  //id="storehouse" 인 div의 내용을 아래에 있는 Store로 설정함
    var Store = "";
    Store += "<p>철 " + saveData.iron + "개</p>";
    Store += "<p>금 " + saveData.gold + "개</p>";
    Store += "<p>다이아몬드 " + saveData.diamond + "개</p>";
    Store += "<p>에메랄드 " + saveData.emerald + "개</p>";
    Store += "<p>루비 " + saveData.ruby + "개</p>";
    Store += "<p>오버로드 " + saveData.overlord + "개</p>";
    document.getElementById("storehouse").innerHTML = Store 
    //최적화 하자면 업데이트를 전체를 하는게 아니라 수정된 자원이 있는 줄만 replace로 수정하면 될듯
}

function mining(num) { // 아시다시피 광질하는거 대충 복사했음
    if (Math.random < (saveData.doubleminingposs / 100)) { // 0~1 사이의 난수 생성후 doubleminingposs/100 보다 적을경우 2배 채광 (doubleminingposs% 확률임)
        num *= 2;
    }
    var r_n = Math.floor(Math.random() * (100)) + 1; // 1 ~ 100 사이의 정수 랜덤생성
    var r_no = Math.floor(Math.random() * (100)) + 1;
    if (r_n > 50){
        saveData.iron += (saveData.a + saveData.c) * num;
        add_log("철 " + (saveData.a + saveData.c) * num + "개 획득! 현재 " + saveData.iron + "개");
    }
    else if (r_n > 20){
        saveData.gold += (saveData.a + saveData.c) * num;
        add_log("금 " + (saveData.a + saveData.c) * num + "개 획득! 현재 " + saveData.gold + "개");
    }
    else if (r_n > 10){
        saveData.diamond += (saveData.a + saveData.d) * num;
        add_log("다이아몬드 " + (saveData.a + saveData.d) * num + "개 획득! 현재 " + saveData.diamond + "개");
    }
    else if (r_n > 5){
        saveData.emerald += (saveData.a + saveData.d) * num;
        add_log("에메랄드 " + (saveData.a + saveData.d) * num + "개 획득! 현재 " + saveData.emerald + "개");
    }
    else if (r_n > 0){
        saveData.ruby += (saveData.a + saveData.d) * num;
        add_log("루비 " + (saveData.a + saveData.d) * num + "개 획득! 현재 " + saveData.ruby + "개");
    }
    if (r_no <= saveData.overlordposs){
        saveData.overlord += (saveData.a * saveData.f) * num;
        add_log("오버로드 " + (saveData.a * saveData.f) * num + "개 획득! 현재 " + saveData.overlord + "개");
    }
    store(); // 광질 한 후 보유량 업데이트
}

function tab(num) {
    let tab_size = 4;
    let x = document.getElementsByName("tab_menu");
    for (i = 0; i < tab_size; i++) {
        document.getElementById("tab" + i).style.display = "none";
        x[i].className = " ";
    }
    document.getElementById("tab" + num).style.display = "block";
    x[num].className = "active";
}

window.onload = function () { // 페이지가 다 load 되면 store(), load()함수 실행
    store(); //세이브파일이 없을때 실행해도 보유갯수가 0개로 보이게 하기위해 사용
    try {    
        load();
    }
    catch {
        // 비워둘것
    }
}
