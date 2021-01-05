var SD = {}; //현제 세이브파일이 될 예정

var default_SD = { //기본값 세이브파일
    iron : 0,
    gold : 0,
    diamond : 0,
    emerald : 0,
    ruby : 0,
    overlord : 0,
    upgrade3 : 5,
    purchased3 : 0,
    upgrade4 : 50,
    purchased4 : 0,
    upgrade5 : 400,
    purchased5 : 0,
    upgrade6 : 200,
    purchased6 : 0,
    a : 1,
    b : 1,
    c : 0,
    d : 0,
    e : 1,
    f : 1,
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
    doubleminingposs : 0,
    enchantedoverlordingot : 0,
    autominetime : 10,
    robotmaker : 0,
    minepower : 0,
    circuit : 0,
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
    test1 : 1,
    UGS : { //SD["UGS"]
        0 : { //SD["UGS"][list_num]
            name : "한번에 얻는 광물 개수 증가",
            material : ["철", "SD['iron']"],          //new Function('return ' + SD["UGS"][list_num]["material"][1])();
            level : 0,
            price : 50,
            price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((50 + SD.UGS[num].level * (SD.UGS[num].level + 1) * 25) * SD.udc)",           //eval() 이용해서 결제할것
            result : [
                ["SD['a']", "(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1)/5) + 1) / 2"],
            ]
        },
        1 : {
            name : "한번에 조합하는 일반 아이템 개수 증가",
            material : "SD.diamon",
            level : 0,
            price : 2000,
            price_equation : "parseInt((2000 + SD.UGS[num].level * (SD.UGS[num].level + 1) * 1000) * SD.udc)",
            result : [
                ["SD.b", "SD.UGS[num].level + 1"]
            ]
        },
    },
}

function save() { // 세이브
    localStorage['saveFile'] = JSON.stringify(SD);
    add_log("*세이브되었습니다*");
}

// function load() { // 로드
//     var SD_old; //SD_old 세이브파일
//     if(localStorage.hasOwnProperty("saveFile")){ //SD_old 세이브 파일이 있을경우
//         SD_old = JSON.parse(localStorage['saveFile']); //불러온다
//     }
    
//     for(key in default_SD){ //default_SD 와 SD_old 대조해서
//         if(SD_old.hasOwnProperty(key)){ //키값이 같은게 SD_old에 있을경우 (만약 SD_old에만 있는 키값이 있으면 가져오지 않음)
//             SD[key] = SD_old[key];  //SD_old를 SD 세이브파일로 불러온다
//         }
//     }
    
//     for(key in default_SD){ //default_SD 와 SD 대조해서
//         if(!SD.hasOwnProperty(key)){    //default_SD 세이브파일에만 존제하는 키를 (SD 세이브파일에 없는거)
//             SD[key] = default_SD[key]; //가져온다
//         }
//     }

//     add_log("*로드되었습니다*");
//     store();
// }

function loadRecursive(defaulDict, oldDict){
    var newDict = {};
    for(key in defaulDict){
        if(oldDict.hasOwnProperty(key)){
            if(typeof oldDict[key] == "number"){
                newDict[key] = oldDict[key];
            }
            else if((typeof oldDict[key] != "string") && (!Array.isArray(oldDict[key]))){
                newDict[key] = loadRecursive(defaulDict[key], oldDict[key]);
            }
        }
    }
    for(key in defaulDict){//default_SD 와 SD 대조해서
        if(!newDict.hasOwnProperty(key)){//default_SD 세이브파일에만 존제하는 키를 (SD 세이브파일에 없는거)
            newDict[key] = defaulDict[key];//가져온다
        }
    }
    // console.log("out", newDict);
    return newDict;
}

function load() {
    var SD_old;
    if(localStorage.hasOwnProperty("saveFile")){
        SD_old = JSON.parse(localStorage['saveFile']);
    }
    SD = loadRecursive(default_SD, SD_old);
    add_log("*로드되었습니다*");
    store();
}

function tab(num) {
    let tab_size = 5;
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
    var x = document.createElement("p");    //<p></p> 만들고 x 라고하자
    x.innerHTML = log;                      //안에는 log 넣음 -> <p>log</p>
    x.setAttribute("id", "scroll_" + n)      //태그 p의 id="scroll" + n 로 설정, 아이디 붙이는 이유는 자동 스크롤을 위함
    document.getElementById("log").append(x);   //id="log"인 div의 마지막에 위에 만든 x를 넣어줌
    document.getElementById("scroll_" + n).scrollIntoView(true);     //최근에 써진 로그로 스크롤해줌
}

function store() {  //id="storehouse" 인 div의 내용을 아래에 있는 Store로 설정함
    var Store = "";
    Store += "<p>철 " + SD.iron + "개</p>";
    Store += "<p>금 " + SD.gold + "개</p>";
    Store += "<p>다이아몬드 " + SD.diamond + "개</p>";
    Store += "<p>에메랄드 " + SD.emerald + "개</p>";
    Store += "<p>루비 " + SD.ruby + "개</p>";
    Store += "<p>오버로드 " + SD.overlord + "개</p>";
    document.getElementById("storehouse").innerHTML = Store 
    //최적화 하자면 업데이트를 전체를 하는게 아니라 수정된 자원이 있는 줄만 replace로 수정하면 될듯
}

function mining(num) { // 아시다시피 광질하는거 대충 복사했음
    if (Math.random() < (SD.doubleminingposs / 100)) { // 0~1 사이의 난수 생성후 doubleminingposs/100 보다 적을경우 2배 채광 (doubleminingposs% 확률임)
        num *= 2;
    }
    var r_n = Math.floor(Math.random() * (100)) + 1; // 1 ~ 100 사이의 정수 랜덤생성
    var r_no = Math.floor(Math.random() * (100)) + 1;
    if (r_n > 50){
        SD.iron += (SD.a + SD.c) * num;
        add_log("철 " + (SD.a + SD.c) * num + "개 획득! 현재 " + SD.iron + "개");
    }
    else if (r_n > 20){
        SD.gold += (SD.a + SD.c) * num;
        add_log("금 " + (SD.a + SD.c) * num + "개 획득! 현재 " + SD.gold + "개");
    }
    else if (r_n > 10){
        SD.diamond += (SD.a + SD.d) * num;
        add_log("다이아몬드 " + (SD.a + SD.d) * num + "개 획득! 현재 " + SD.diamond + "개");
    }
    else if (r_n > 5){
        SD.emerald += (SD.a + SD.d) * num;
        add_log("에메랄드 " + (SD.a + SD.d) * num + "개 획득! 현재 " + SD.emerald + "개");
    }
    else if (r_n > 0){
        SD.ruby += (SD.a + SD.d) * num;
        add_log("루비 " + (SD.a + SD.d) * num + "개 획득! 현재 " + SD.ruby + "개");
    }
    if (r_no <= SD.overlordposs){
        SD.overlord += (SD.a * SD.f) * num;
        add_log("오버로드 " + (SD.a * SD.f) * num + "개 획득! 현재 " + SD.overlord + "개");
    }
    store(); // 광질 한 후 보유량 업데이트
}

function UGS_load(list_num) {
    var y = document.getElementsByClassName("UGS_list");
    var upgrade_text = " "
    upgrade_text += SD["UGS"][list_num]["name"] + " level : " + SD["UGS"][list_num]["level"] + "<br>";
    upgrade_text += "업그레이드 재료 : "+ SD["UGS"][list_num]["material"][0] + " " + SD["UGS"][list_num]["price"] + "개<br>";
    y[list_num].innerHTML = upgrade_text;
}

function upgrade(num) {
    var material = new Function('return ' + SD["UGS"][num]["material"][1])();
    if ( material>= SD["UGS"][num]["price"]){
        material -= SD["UGS"][num]["price"];
        eval(SD["UGS"][num]["material"][1] + "=" + material);
        SD["UGS"][num]["level"] += 1;
        eval(SD["UGS"][num]["price_equation"]);
        var result = SD["UGS"][num]["result"][0][1];
        eval(SD["UGS"][num]["result"][0][0] + "=" + result);
        store();
        UGS_load(num)
    }
}
//SD["UGS"][num]["material"][1] = "SD.iron"
//new Function('return ' + SD["UGS"][num]["material"][1])(); = SD.iron 의 값 리턴

function test() {
    var z = document.getElementById("testt");
    test_text = " ";
    test_text += "<p>SD.iorn : " + SD.iron + "</P>";
    test_text += "<p>SD.UGS.0.name : " + SD['UGS']['0']['name'] + "</P>";
    test_text += "<p>SD.UGS.0.level : " + SD['UGS']['0']['level'] + "</P>";
    // test_text += "<p>SD.UGS.0.result : " + SD['UGS']['0']['result'] + "</P>";
    // test_text += "<p>SD.UGS.0.result.0.0 : " + SD['UGS']['0']['result'][0][0] + "</P>";
    // test_text += "<p>SD.UGS.0.result.0.1 : " + SD['UGS']['0']['result'][0][1] + "</P>";
    // test_text += "<p></P>";
    z.innerHTML = test_text
}


window.onload = function () { // 페이지가 다 load 되면 store(), load()함수 실행
    load();
}
