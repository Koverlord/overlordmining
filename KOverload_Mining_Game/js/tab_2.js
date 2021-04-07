//탭2 - 제련소

function real_melt(ore) {
    // if (SD.ore >= 1) {
        SD[ore] -= 1;
        SD[`${ore}_ingot`] += 1;
        store();
        add_log(Name[ore] + " 1개 제련!");
    // }
}

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
