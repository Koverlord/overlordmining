function extract(){
    oh = SD.overlord;
    for(let i = 0; i < oh; i++){
        r_extract = Math.floor(Math.random() * (100)) + 1;
        if (r_extract >= 51){
            SD.overlord_essence += 1
        }
        else if (r_extract >= 31){
            SD.overlord_scrap += 1
        }
        else if (r_extract >= 2){
            SD.overlord_part += 1
        }
        else if (r_extract == 1){
            r_extract = Math.floor(Math.random() * (100)) + 1;
            if (r_extract >= 2){
                SD.overlord_ingot += 1
            }
            else {
                SD.overlord_soul += 1
            }
        }
    }
    SD.overlord=0;
    add_log("추출 완료.")
}
