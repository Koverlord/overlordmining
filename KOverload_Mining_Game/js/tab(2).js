function melt(){
    if (SD.iron>=1){
        SD.iron-=1;
        SD.iron_ingot+=1;
        store()
        add_log("철 1개 제련!")
    }
}

function realmelt(){
    var wow = setInterval(melt,1000);
}
