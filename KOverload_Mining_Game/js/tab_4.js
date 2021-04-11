// 탭4 : 추출소

function extract() {  //추출
    add_log("오버로드 " + SD.overlord + "개를 추출합니다");
    for (let i = 0; i < SD.overlord; i++) {
        let r_extract = Math.floor(Math.random() * (100)) + 1; // 1 ~ 100 난수 생성
        if (r_extract % 2 == 0) {       // 50%
            SD.overlord_essence += 1;   // 정수
        }
        // 위랑 아래는 독립적
        if (r_extract > 30) {           // 70%
            SD.overlord_scrap += 1;     // 파편
        }
        else if (r_extract > 1) {       // 29%
            SD.overlord_part += 1;      // 조각
        }
        else if (r_extract == 1) {      // 1%
            r_extract = Math.floor(Math.random() * (100)) + 1;
            if (r_extract > 2) {        // 99%
                SD.overlord_ingot += 1; // 주괴
            }
            else {                      // 1%
                SD.overlord_soul += 1;  // 영혼
            }
        }
    }
    SD.overlord = 0;
    store(0); // 광물
    store(1); // 주괴
    store(4); // 오버로드
    add_log("추출을 완료하였습니다");
}
