// 탭4 : 추출소

function extract() {  //추출
    for (let i = 0; i < SD.overlord; i++) {
        let r_extract = Math.floor(Math.random() * (100)) + 1; // 1 ~ 100 난수 생성
        if (r_extract >= 51) {
            SD.overlord_essence += 1; //정수
        }
        else if (r_extract >= 31) {
            SD.overlord_scrap += 1; //파편
        }
        else if (r_extract >= 2) {
            SD.overlord_part += 1; //조각
        }
        else if (r_extract == 1) {
            r_extract = Math.floor(Math.random() * (100)) + 1;
            if (r_extract >= 2) {
                SD.overlord_ingot += 1;
            }
            else {
                SD.overlord_soul += 1;
            }
        }
    }
    SD.overlord=0;
    store();
    add_log("추출 완료.");
}
