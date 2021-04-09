//탭2 - 제련소

function real_melt(ore) {
    if (SD[ore] >= 1) {
        SD[ore] -= 1;
        SD[`${ore}_ingot`] += 1;
        store();
        add_log(Name[ore] + " 1개 제련!");
    }
}

//melt('iron');
function melt(ore) {
    if (Melt[`${ore}`] == 0) {
        Melt[`${ore}`] = setInterval(real_melt, 1000, ore);
        this.innerHTML = "중단"
        // add_log(Name[ore] + " 제련 시작");
    }
    else {
        clearTimeout(Melt[`${ore}`]);
        Melt[`${ore}`] = 0;
        this.innerHTML = "제련"
        // add_log(Name[ore] + " 제련 중지");
    }


}
