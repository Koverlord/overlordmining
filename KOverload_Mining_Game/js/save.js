// 변수, 세이브, 로드

var SD = {}; // 현제 세이브파일이 될 예정

var default_SD = { // 기본값 세이브파일
    version : 1, // 버전 업데이트시 같이 올라가야함
    iron : 0,
    iron_ingot : 0,
    gold : 0,
    gold_ingot : 0,
    diamond : 0,
    emerald : 0,
    ruby : 0,
    overlord : 0,
    // upgradeN   // 필요 재료 갯수
    // purchasedN // 레벨
    a : 1,  // 한번에 얻는 광물 개수
    b : 1,  // 한번에 조합하는 일반 아이템 개수
    c : 0,  // 한번에 얻는 금속 개수
    d : 0,  // 한번에 얻는 보석 개수
    e : 1,  // 전설의 광산에서 광질할때 나오는 광물 개수
    f : 1,  // *오버로드 나오는 개수 증가
    alloy_iron_gold : 0,
    pipe : 0,
    extract_engine : 0,
    extractor : 0,
    overlord_scrap : 0,
    overlord_part : 0,
    overlord_ingot : 0,
    overlord_essence : 0,
    overlord_soul : 0,
    overlord_poss : 1,
    melt_count : 1, // 한번에 제련하는 개수
    melt_multiply : 1, // 광물 하나당 나오는 주괴 개수
    extractor_level : 1,
    doubleminingposs : 0,
    enchanted_overlord_ingot : 0,
    auto_mining_time : 5000,
    robot_maker : 0,
    minepower : [0],
    circuit : 0,
    maxrobot : 5,
    robot_body : 0,
    CPU : 0,
    mining_drill : 0,
    robot_count : 0,
    mining_robot : [0],
    excavator_robot : [0],
    gem_mine : 0,
    legend_mine : 0,
    crystal : 0,
    mythrill : 0,
    orichalcum : 0,
    adamantite : 0,
    legend_ore : 0,
    mythrill_ingot : 0,
    orichalcum_ingot : 0,
    adamantite_ingot : 0,
    legendarium : 0,
    udc : 1, // 할인율 Upgrade DisCount
    test1 : 1, // 이건 뭐지;;
    Auto_Save : 0,
    Auto_Mine : 0,
    A_test : 0,
    UGS_lvl : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    unlock : {
        Develop : 0, // 개발자용 탭
        Extract : 0, // 추출기 탭
        Robot : 0, // 로봇 제작소 탭
        Gem_mine : 0, // 보석 광산 탭
        Legend_mine : 0, // 전설의 광산 탭
    }
};

var Name = {
    iron : "철",
    gold : "금",
    iron_ingot : "철 주괴",
    gold_ingot : "금 주괴",
    ruby : "루비",
    emerald : "에메랄드",
    diamond : "다이아몬드",
    alloy_iron_gold : "철-금 합금",
    pipe : "파이프",
    extractor : "추출기",
    extract_engine : "추출 엔진",
    overlord : "오버로드",
    overlord_ingot : "오버로드 주괴",
    enchanted_overlord_ingot : "강화 오버로드 주괴",
    robot_maker : "로봇 제작기",
    robot_body : "로봇 몸체",
    overlord_essence : "오버로드의 정수",
    overlord_scrap : "오버로드의 파편",
    overlord_part : "오버로드의 조각",
    circuit : "회로",
    CPU : "CPU",
    mining_drill : "채광 드릴",
    overlord_soul : "오버로드의 영혼",
    gem_mine : "보석 광산 입장권",
    legend_mine : "전설의 광산 입장권",
    crystal : "수정",
    mythrill : "미스릴",
    orichalcum : "오리칼쿰",
    adamantite : "아다만타이트",
    legend_ore : "전설의 광석",
    mythrill_ingot : "미스릴 주괴",
    orichalcum_ingot : "오리칼쿰 주괴",
    adamantite_ingot : "아다만타이트 주괴",
    legendarium : "레전더리움",
};




function save() { // 세이브
    localStorage["saveFile"] = JSON.stringify(SD);
    add_log("*세이브되었습니다*");
}

let Auto_save;
function auto_save() {
    SD.Auto_Save = !SD.Auto_Save;
    if (SD.Auto_Save) {
        add_log("오토세이브가 켜졌습니다");
        Auto_save = setInterval(save, 30 * 1000); // 30초
    }
    else {
        add_log("오토세이브가 꺼졌습니다");
        clearTimeout(Auto_save);
    }
}

function loadRecursive(defaultDict, oldDict) {
    var newDict = {};
    for (key in defaultDict){
        if (oldDict.hasOwnProperty(key)){
            if (typeof oldDict[key] == "number" || typeof oldDict[key] == "boolean") {
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
    if (localStorage.hasOwnProperty("saveFile")){ // 만약 localStorage에 saveFile이 있을경우
        SD_old = JSON.parse(localStorage["saveFile"]); //SD_old에 저장한다
        SD = loadRecursive(default_SD, SD_old); // 갱신
    }
    else {
        SD = default_SD; // 세이브파일이 없을경우(처음) 세이브파일 생성
    }

    for (x in SD.unlock) { // 언락 확인
        unlock(x);
    }

    add_log("*로드되었습니다*"); // 여기서 n++; 됨 (최초엔 n = 0)
    for (i = 0; i < store_list.length; i++){
        store(i);
    };

    // SD.Auto_save = !SD.Auto_save; // 오토 세이브 자동적용
    // auto_save();
}
