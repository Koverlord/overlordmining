function melt(){
    if (SD.iron>=1){
        SD.iron-=1;
        SD.iron_ingot+=1;
        store()
        add_log("철 1개 제련!")
    }
}

function realmelt(){
  if (typeof t === "undefined") { // check t is undefined
  let t = setInterval(melt, 1000);
  this.innerHTML = "중단하기";
} else {
  t = clearInterval(t); // overwrite t to undefined
  this.innerHTML = "제련하기";
}
}
