//탭2 - 제련소

function real_melt(ore) {
    // if (SD.ore >= 1) {
        SD[ore] -= 1;
        SD[`${ore}_ingot`] += 1;
        store();
        add_log(Name[ore] + " 1개 제련!");
    // }
}

// function realmelt() {
//     if (typeof t === "undefined") { // check t is undefined
//         var t = setInterval(melt, 1000);
//         this.innerHTML = "중단하기";
        
//     } 
//     else { // overwrite t to undefined
//         clearInterval(t);
//         this.innerHTML = "제련하기";
//     }
//     // this.innerHTML = "중단하기";
// }

//melt('iron');
function melt(ore) {
    if (SD[`${ore}_melt`] == 0) {
        SD[`${ore}_melt`] = setInterval(real_melt, 1000, ore);
        this.innerHTML = "중단"
    }
    else {
        clearTimeout(SD[`${ore}_melt`]);
        SD[`${ore}_melt`] = 0;
        this.innerHTML = "제련"
    }


}
