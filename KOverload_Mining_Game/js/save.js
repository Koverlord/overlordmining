//변수, 세이브, 로드

var SD = {}; //현제 세이브파일이 될 예정

var default_SD = { //기본값 세이브파일
    iron : 0,
    iron_ingot : 0,
    iron_melt : 0,
    gold : 0,
    gold_ingot : 0,
    gold_melt : 0,
    diamond : 0,
    emerald : 0,
    ruby : 0,
    overlord : 0,
    // upgradeN   // 필요 재료 갯수
    // purchasedN // 레벨
    a : 1,  //한번에 얻는 광물 개수
    b : 1,  //한번에 조합하는 일반 아이템 개수
    c : 0,  //한번에 얻는 금속 개수
    d : 0,  //한번에 얻는 보석 개수
    e : 1,  //전설의 광산에서 광질할때 나오는 광물 개수
    f : 1,  //*오버로드 나오는 개수 증가
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
    udc : 1, // 할인율 Upgrade DisCount
    mythupgrade1 : 10,
    mythpurchased1 : 0,
    mythupgrade2 : 10,
    mythpurchased2 : 0,
    mythupgrade3 : 10,
    mythpurchased3 : 0,
    test1 : 1,
    UGS_lvl : [0, 0, 0, 0, 0, 0]
};

var Name = {
    iron : "철",
    gold : "금"
};


function save() { // 세이브
    localStorage['saveFile'] = JSON.stringify(SD);
    add_log("*세이브되었습니다*");
}

function loadRecursive(defaultDict, oldDict) {
    var newDict = {};
    for (key in defaultDict){
        if (oldDict.hasOwnProperty(key)){
            if (typeof oldDict[key] == "number") {
                newDict[key] = oldDict[key];
            }
            else {
                newDict[key] = loadRecursive(defaultDict[key], oldDict[key]);
            }
        }
    }
    for (key in defaultDict){//default_SD 와 SD 대조해서
        if (!newDict.hasOwnProperty(key)){//default_SD 세이브파일에만 존제하는 키를 (SD 세이브파일에 없는거)
            newDict[key] = defaultDict[key];//가져온다
        }
    }
    // console.log("out", newDict);
    return newDict;
}

function load() {
    var SD_old;
    SD = default_SD;
    if (localStorage.hasOwnProperty("saveFile")){ // 만약 localStorage에 saveFile이 있을경우
        SD_old = JSON.parse(localStorage['saveFile']); //SD_old에 저장한다
        if (n == 1) { // 처음 로딩시에만 
            SD = loadRecursive(default_SD, SD_old); // 세이브 파일에 오류가 있는지 확인한다
            for(var i = 0; i < document.getElementsByClassName('UGS_list').length; i++){ UGS_load(i);} // 업그레이드 목록 동기화
        }
    }
    add_log("*로드되었습니다*"); // 여기서 n++; 됨 (최초엔 n = 0)

    store();
}
