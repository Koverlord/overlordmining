function melt(){
    if (SD.iron>=1){
        SD.iron-=1;
        SD.iron_ingot+=1;
        store()
    }
}

function realmelt(){
    var wow = setinterval(melt(),1000);
}
