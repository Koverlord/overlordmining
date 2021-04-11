//탭2 - 제련소

function real_melt(ore) {
    if (SD[ore] >= SD['melt_count']) {
        SD[ore] -= SD['melt_count'];
        SD[`${ore}_ingot`] += SD['melt_count'] * SD['melt_multiply'];
        store(0); // 광물
        store(1); // 주괴
        // add_log(Name[ore] + " 1개 제련!");
    }
    else {
        add_log("제련 재료가 부족합니다");
        melt(ore);
    }
}

//melt('iron');
function melt(ore) {
    if (Melt[`${ore}`] == 0) {
        Melt[`${ore}`] = setInterval(real_melt, 1000, ore);
        this.innerHTML = "중단"
        add_log(Name[ore] + " 제련 시작");
    }
    else {
        clearTimeout(Melt[`${ore}`]);
        Melt[`${ore}`] = 0;
        this.innerHTML = "제련"
        add_log(Name[ore] + " 제련 중지");
    }


}
