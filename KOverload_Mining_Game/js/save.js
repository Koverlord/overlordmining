//변수, 세이브, 로드

var SD = {}; //현제 세이브파일이 될 예정

var default_SD = { //기본값 세이브파일
    iron : 0,
    gold : 0,
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
    udc : 1,
    mythupgrade1 : 10,
    mythpurchased1 : 0,
    mythupgrade2 : 10,
    mythpurchased2 : 0,
    mythupgrade3 : 10,
    mythpurchased3 : 0,
    test1 : 1,
    iron_ingot : 0;
    UGS : { //SD['UGS']
        0 : { //SD['UGS'][num]
            name : "한번에 얻는 광물 개수 증가",
            material : ["철", "SD['iron']"],
            level : 0,
            max_level : "-1",
            price : 50,
            price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((50 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 25) * SD['udc'])",           //eval() 이용해서 결제할것
            result : [
                ["SD['a']", "(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"],
            ]
        },
        1 : {
            name : "이중 채광 확률 증가",
            material : ["금", "SD['gold']"],
            level : 0,
            max_level : "100",
            price : "50",
            price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((50 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 25) * SD['udc'])",
            result : [
                ["SD.doubleminingposs", ["SD['UGS'][num]['level']"]]
            ],
        },
        2 : {
            name : "한번에 얻는 금속 개수 증가",
            material : ["에메랄드", "SD['emerald']"],
            level : 0,
            max_level : -1,
            price : "20",
            price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((200 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 100) * SD['udc'])",
            result : [
                ["SD['c']", ["(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"]]
            ],
        },
        3 : {
            name : "한번에 얻는 보석 개수 증가",
            material : ["루비", "SD['ruby']"],
            level : 0,
            max_level : -1,
            price : "20",
            price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((200 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 100) * SD['udc'])",
            result : [
                ["SD['d']", ["(parseInt((SD['UGS'][num]['level'] + 1)/5) * - 5 + 2 * SD['UGS'][num]['level'] + 2) * (parseInt((SD['UGS'][num]['level'] + 1) / 5) + 1) / 2"]]
            ],
        },
        4 : {
            name : "오버로드 출현 확률 증가",
            material : ["오버로드 주괴", "SD['overlordingot']"],
            level : 0,
            max_level : 99,
            price : "5",
            price_equation : "SD[\'UGS\'][num][\'price\'] = 5",
            result : [
                ["overlordposs", ["SD['UGS'][num]['level'] + 1"]]
            ],
        },
        5 : { // 나중에 분리 예정
            name : "한번에 조합하는 일반 아이템 개수 증가",
            material : ["다이아몬드","SD['diamond']"],
            level : 0,
            max_level : 4,
            price : 2000,
            price_equation : "SD[\'UGS\'][num][\'price\'] = parseInt((2000 + SD['UGS'][num]['level'] * (SD['UGS'][num]['level'] + 1) * 1000) * SD.udc)",
            result : [
                ["SD.b", "SD['UGS'][num]['level'] + 1"]
            ]
        },
        // num : { // 사용시 '복사'해서 컨트롤 + /(슬래쉬)로 주석해제
        //     name : "", //SD.UGS.[num].name
        //     material : ["재료이름", "재료경로"],
        //     level : 0,
        //     max_level : -1, //만렙, 최고레벨 적고, 제한 없을 경우 -1
        //     price : "필요한 재료 갯수(숫자)",
        //     price_equation : "SD[\'UGS\'][num][\'price\'] = 수식",
        //     result : [
        //         ["업그레이드로 바뀔것", ["업그레이드로 바뀌게할 수식"]]
        //     ],
        // },
    },
}

function save() { // 세이브
    localStorage['saveFile'] = JSON.stringify(SD);
    add_log("*세이브되었습니다*");
}

function loadRecursive(defaultDict, oldDict){
    var newDict = {};
    for(key in defaultDict){
        if(oldDict.hasOwnProperty(key)){
            if(typeof oldDict[key] == "number"){
                newDict[key] = oldDict[key];
            }
            else if((typeof oldDict[key] != "string") && (!Array.isArray(oldDict[key]))){
                newDict[key] = loadRecursive(defaultDict[key], oldDict[key]);
            }
        }
    }
    for(key in defaultDict){//default_SD 와 SD 대조해서
        if(!newDict.hasOwnProperty(key)){//default_SD 세이브파일에만 존제하는 키를 (SD 세이브파일에 없는거)
            newDict[key] = defaultDict[key];//가져온다
        }
    }
    // console.log("out", newDict);
    return newDict;
}

function load() {
    var SD_old;
    if(localStorage.hasOwnProperty("saveFile")){ // 만약 localStorage에 saveFile이 있을경우
        SD_old = JSON.parse(localStorage['saveFile']); //SD_old에 저장한다
    }
    add_log("*로드되었습니다*"); // 여기서 n++; 됨 (최초엔 n = 0)
    if (n == 1) { // 처음 로딩시에만 
        SD = loadRecursive(default_SD, SD_old); // 세이브 파일에 오류가 있는지 확인한다
        for(var i = 0; i < document.getElementsByClassName('UGS_list').length; i++){ UGS_load(i);} // 업그레이드 목록 동기화
    }
    store();
}
